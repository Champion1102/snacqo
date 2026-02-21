import { GrainOverlay } from '@/components/GrainOverlay';
import { Header } from '@/components/Header';
import { Marquee } from '@/components/Marquee';
import { Hero } from '@/components/Hero';
import { Flavors } from '@/components/Flavors';
import { VibeCheck } from '@/components/VibeCheck';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="bg-background-light text-text-chocolate overflow-x-hidden selection:bg-accent-mango selection:text-text-chocolate min-h-screen">
      <GrainOverlay />
      <Marquee variant="top" />
      <Header />
      <main className="relative pt-28 min-h-screen flex flex-col">
        {/* Decorative icons */}
        <span
          className="absolute top-32 left-10 z-0 hidden lg:block material-symbols-outlined text-6xl text-accent-strawberry rotate-12"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden
        >
          star
        </span>
        <span
          className="absolute top-48 right-20 z-0 hidden lg:block material-symbols-outlined text-5xl text-accent-mango -rotate-12 animate-pulse"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden
        >
          bolt
        </span>

        <Hero />
        <Marquee variant="middle" />
        <Flavors />
        <VibeCheck />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
