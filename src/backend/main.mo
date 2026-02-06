import Map "mo:core/Map";
import Principal "mo:core/Principal";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Types
  type Submission = {
    answer1 : Text;
    answer2 : Text;
    answer3 : Text;
  };

  public type Summary = {
    count : Nat;
    answers1 : [Text];
    answers2 : [Text];
    answers3 : [Text];
  };

  public type UserProfile = {
    name : Text;
  };

  // Persistent Store
  type Store = Map.Map<Principal, Submission>;

  // Access Control State
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Persistent store instance for submissions
  let store = Map.empty<Principal, Submission>();

  // Store for user profiles
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Submit an answer
  public shared ({ caller }) func submitAnswer(answer1 : Text, answer2 : Text, answer3 : Text) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can submit answers");
    };
    let submission : Submission = { answer1; answer2; answer3 };
    store.add(caller, submission);
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can access their own profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin or owner can access profiles");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save their own profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Only admin can review all submissions and summaries
  public query ({ caller }) func getAllSubmissions() : async [(Principal, Submission)] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can access all answers");
    };
    store.toArray();
  };

  public query ({ caller }) func getSubmissionSummary() : async Summary {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can access summary");
    };
    var answer1List = List.empty<Text>();
    var answer2List = List.empty<Text>();
    var answer3List = List.empty<Text>();

    for ((_, submission) in store.entries()) {
      answer1List.add(submission.answer1);
      answer2List.add(submission.answer2);
      answer3List.add(submission.answer3);
    };

    {
      count = store.size();
      answers1 = answer1List.toArray();
      answers2 = answer2List.toArray();
      answers3 = answer3List.toArray();
    };
  };
};
