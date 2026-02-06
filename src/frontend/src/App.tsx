import { useState, useEffect } from 'react';
import { RoseDayLockScreen } from './components/rose-day/RoseDayLockScreen';
import { RoseDayQuestionsWizard } from './components/rose-day/RoseDayQuestionsWizard';
import { RoseDayRevealPage } from './components/rose-day/RoseDayRevealPage';
import { RoseDayAdminView } from './components/rose-day/RoseDayAdminView';
import { RosePetalsOverlay } from './components/rose-day/RosePetalsOverlay';
import { MusicToggle } from './components/MusicToggle';

type FlowState = 'lock' | 'questions' | 'reveal';

function App() {
  const [flowState, setFlowState] = useState<FlowState>('lock');
  const [answers, setAnswers] = useState<[string, string, string]>(['', '', '']);
  const [showAdmin, setShowAdmin] = useState(false);

  // Check URL for admin view toggle
  useEffect(() => {
    const checkAdminToggle = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      if (hash === '#admin' || params.get('admin') === 'true') {
        setShowAdmin(true);
      }
    };
    checkAdminToggle();
    window.addEventListener('hashchange', checkAdminToggle);
    return () => window.removeEventListener('hashchange', checkAdminToggle);
  }, []);

  const handleUnlock = () => {
    setFlowState('questions');
  };

  const handleAnswersSubmitted = (submittedAnswers: [string, string, string]) => {
    setAnswers(submittedAnswers);
    setFlowState('reveal');
  };

  if (showAdmin) {
    return (
      <div className="min-h-screen rose-gradient relative overflow-x-hidden">
        <RoseDayAdminView onClose={() => {
          setShowAdmin(false);
          window.history.replaceState(null, '', window.location.pathname);
        }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen rose-gradient relative overflow-x-hidden">
      <RosePetalsOverlay />
      <MusicToggle />
      
      <main className="relative z-10">
        {flowState === 'lock' && (
          <div className="animate-fade-in">
            <RoseDayLockScreen onUnlock={handleUnlock} />
          </div>
        )}
        
        {flowState === 'questions' && (
          <div className="animate-fade-in">
            <RoseDayQuestionsWizard onComplete={handleAnswersSubmitted} />
          </div>
        )}
        
        {flowState === 'reveal' && (
          <div className="animate-fade-in">
            <RoseDayRevealPage />
          </div>
        )}
      </main>
      
      <footer className="relative z-10 py-6 text-center text-sm text-muted-foreground/80">
        <p className="flex items-center justify-center gap-2 flex-wrap px-4">
          Unlocked with love, only for Vedu 🌹
        </p>
        <p className="flex items-center justify-center gap-2 flex-wrap px-4 mt-2 text-xs">
          © 2026. Built with <span className="text-rose-500 animate-pulse-heart">💖</span> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rose-500 hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
