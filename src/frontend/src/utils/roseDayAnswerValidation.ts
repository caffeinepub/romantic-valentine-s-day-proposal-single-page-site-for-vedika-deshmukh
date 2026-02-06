// Rose Day answer validation utility
// Validates date answers with flexible formatting (case-insensitive, accepts "day month" or "month day")

const CORRECT_ANSWERS = [
  { day: 9, month: 'december' },    // Question 1: When was our first kiss?
  { day: 1, month: 'january' },     // Question 2: When is our anniversary?
  { day: 6, month: 'september' }    // Question 3: When did we go to Bamboo Garden?
];

/**
 * Normalizes and validates a date answer for a specific step
 * Accepts formats: "9 December", "December 9", "9 december", "december 9", etc.
 */
export function isCorrectRoseDayDateAnswer(stepIndex: number, rawInput: string): boolean {
  if (stepIndex < 0 || stepIndex >= CORRECT_ANSWERS.length) {
    return false;
  }

  const correctAnswer = CORRECT_ANSWERS[stepIndex];
  const normalized = rawInput.trim().toLowerCase();

  // Remove extra whitespace
  const cleaned = normalized.replace(/\s+/g, ' ');

  // Split into parts
  const parts = cleaned.split(' ');

  // We expect exactly 2 parts: day and month (in either order)
  if (parts.length !== 2) {
    return false;
  }

  const [part1, part2] = parts;

  // Try to parse as "day month" format
  const dayFirst = parseInt(part1, 10);
  if (!isNaN(dayFirst) && part2 === correctAnswer.month) {
    return dayFirst === correctAnswer.day;
  }

  // Try to parse as "month day" format
  const daySecond = parseInt(part2, 10);
  if (!isNaN(daySecond) && part1 === correctAnswer.month) {
    return daySecond === correctAnswer.day;
  }

  return false;
}
