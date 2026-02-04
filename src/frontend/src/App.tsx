import { useState } from 'react';
import { HeroVideoSection } from './components/HeroVideoSection';
import { OpeningSection } from './components/OpeningSection';
import { OurMemoriesBackgroundSection } from './components/OurMemoriesBackgroundSection';
import { OurBestMemoriesSection } from './components/OurBestMemoriesSection';
import { VideosSection } from './components/VideosSection';
import { ProposalSection } from './components/ProposalSection';
import { SorrySection } from './components/SorrySection';
import { FinalMessageSection } from './components/FinalMessageSection';
import { MusicToggle } from './components/MusicToggle';
import { GalleryPage } from './pages/GalleryPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'gallery'>('home');

  const navigateToGallery = () => setCurrentPage('gallery');
  const navigateToHome = () => setCurrentPage('home');

  if (currentPage === 'gallery') {
    return <GalleryPage onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen romantic-gradient relative overflow-x-hidden">
      <MusicToggle />
      
      <main className="relative z-10">
        <HeroVideoSection />
        <OpeningSection />
        <OurMemoriesBackgroundSection />
        <OurBestMemoriesSection />
        <VideosSection onNavigateToGallery={navigateToGallery} />
        <ProposalSection />
        <SorrySection />
        <FinalMessageSection />
      </main>
      
      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-border/30 bg-card/50 backdrop-blur-sm">
        <p className="flex items-center justify-center gap-2 flex-wrap px-4">
          © 2026. Built with <span className="text-primary animate-pulse-heart">💖</span> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
