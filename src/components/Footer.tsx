import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t-4 border-text-chocolate relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex flex-col justify-between z-0 overflow-hidden">
        <span className="text-[10rem] font-black whitespace-nowrap leading-none text-text-chocolate select-none">
          SNACQO SNACQO SNACQO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <a className="flex items-center gap-2" href="#">
            <Logo size="md" />
          </a>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h4 className="font-black text-text-chocolate uppercase tracking-widest mb-4 border-b-2 border-text-chocolate inline-block">
                Socials
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  className="text-text-chocolate font-bold hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">photo_camera</span>
                  Instagram
                </a>
                <a
                  className="text-text-chocolate font-bold hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">music_note</span>
                  TikTok
                </a>
                <a
                  className="text-text-chocolate font-bold hover:text-primary hover:translate-x-1 transition-all flex items-center gap-2"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg">flutter_dash</span>
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-black text-text-chocolate uppercase tracking-widest mb-4 border-b-2 border-text-chocolate inline-block">
                Legal Stuff
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  className="text-text-chocolate font-bold hover:text-primary hover:translate-x-1 transition-all"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-text-chocolate font-bold hover:text-primary hover:translate-x-1 transition-all"
                  href="#"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-text-chocolate/20 pt-8 text-sm font-bold text-text-chocolate/60">
          <p>© 2025 snacQO Snacks Inc. Don&apos;t steal our vibes.</p>
          <p className="mt-2 md:mt-0">Designed for Gen Z, by Gen Z (mostly).</p>
        </div>
      </div>
    </footer>
  );
}
