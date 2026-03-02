import { useEffect, useState } from 'react';
import { GrainOverlay } from '@/components/GrainOverlay';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [headerSticky, setHeaderSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHeaderSticky(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-background-light text-text-chocolate overflow-x-hidden selection:bg-accent-mango selection:text-text-chocolate min-h-screen">
      <GrainOverlay />
      <Header sticky={headerSticky} />
      <main className="relative pt-28 min-h-screen flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
