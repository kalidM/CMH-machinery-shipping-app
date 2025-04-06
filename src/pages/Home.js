import { Suspense } from 'react';
import { Loader } from '../components/UI/Loader';
import HeroSection from '../components/Home/HeroSection';
import Features from '../components/Home/Features';

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="home-page">
        <HeroSection />
        <Features />
      </main>
    </Suspense>
  );
}