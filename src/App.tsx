import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Marquee } from '@/components/Marquee';
import { Hero } from '@/components/Hero';
import { Flavors } from '@/components/Flavors';
import { VibeCheck } from '@/components/VibeCheck';
import { Contact } from '@/components/Contact';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { TermsAndConditions } from '@/pages/TermsAndConditions';
import { ReturnRefundPolicy } from '@/pages/ReturnRefundPolicy';

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
        <Route path="/return-refund-policy" element={<Layout><ReturnRefundPolicy /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
