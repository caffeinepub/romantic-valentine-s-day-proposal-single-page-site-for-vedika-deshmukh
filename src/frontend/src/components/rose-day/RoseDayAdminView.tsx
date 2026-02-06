import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { X, AlertCircle, Heart } from 'lucide-react';
import { useRoseDaySubmissions } from '@/hooks/useRoseDaySubmissions';

interface RoseDayAdminViewProps {
  onClose: () => void;
}

export function RoseDayAdminView({ onClose }: RoseDayAdminViewProps) {
  const { submissions, isLoading, error } = useRoseDaySubmissions();

  return (
    <div className="min-h-screen p-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="border-2 border-rose-200/50 shadow-rose-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
              <CardTitle className="text-2xl md:text-3xl font-display text-rose-600">
                Rose Day Submissions
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-rose-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Separator className="my-4" />
                  </div>
                ))}
              </div>
            )}

            {error && (
              <Alert variant="destructive" className="border-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="ml-2">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            {!isLoading && !error && submissions.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Heart className="w-16 h-16 mx-auto mb-4 text-rose-300" />
                <p className="text-lg">No submissions yet</p>
                <p className="text-sm mt-2">Answers will appear here once someone completes the questions</p>
              </div>
            )}

            {!isLoading && !error && submissions.length > 0 && (
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-6">
                  {submissions.map(([principal, submission], index) => (
                    <div key={principal.toString()} className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-rose-600">Submission #{index + 1}</span>
                        <span className="text-xs font-mono bg-rose-50 px-2 py-1 rounded">
                          {principal.toString().slice(0, 8)}...
                        </span>
                      </div>
                      
                      <div className="space-y-3 bg-rose-50/50 p-4 rounded-lg border border-rose-100">
                        <div>
                          <p className="text-sm font-medium text-rose-600 mb-1">
                            Q1: When was our first kiss?
                          </p>
                          <p className="text-base text-foreground pl-3 border-l-2 border-rose-300">
                            {submission.answer1}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-rose-600 mb-1">
                            Q2: When did you give me my first chocolate?
                          </p>
                          <p className="text-base text-foreground pl-3 border-l-2 border-rose-300">
                            {submission.answer2}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-rose-600 mb-1">
                            Q3: How many roses have I given you till now?
                          </p>
                          <p className="text-base text-foreground pl-3 border-l-2 border-rose-300">
                            {submission.answer3}
                          </p>
                        </div>
                      </div>
                      
                      {index < submissions.length - 1 && <Separator className="my-6" />}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
