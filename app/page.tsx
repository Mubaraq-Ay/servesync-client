'use client';
import Hero from './hero/page'
import Navbar from './navbar/page';
import Features from './features/page';
import Trustedby from './trusted-by/page';
import Integrations from './integrations/page';

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Trustedby />
      <Features />
      <Integrations />
     </div>
  );
}
