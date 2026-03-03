import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <main className="flex min-h-screen w-full flex-col sm:items-start">
        <Navbar />
        <div className="max-w-8xl w-full mx-auto px-[42px]">
          <HeroSection />
        </div>
      </main>
    </div>
  );
}
