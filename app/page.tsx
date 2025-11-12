'use client';
import Features from './features/page';
import Hero from './hero/page'
import Navbar from './navbar/page';
import Trustedby from './trusted-by/page';

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Trustedby />
      <Features />
     </div>
  );
}
