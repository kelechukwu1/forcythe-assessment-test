import { MarqueeCards } from '@/components/ReviewCard';
import DiscoverTabs from '@/components/DiscoverTabs';
import SparkToSpotlight from '@/components/SparkToSpotlight';
import { MovingBorderCard } from "@/components/MovingBorderCard";
import SolutionsThatHelps from '@/components/SolutionsThatHelps';
import NewsAndProducts from '@/components/NewsAndProducts';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='mt-[6.3rem] md:mt-[6.8rem]'>
      <div className="md:min-h-screen bg-[#030516]" >
        <Image
          src="/header-bg.png"
          alt="Background Image"
          layout="fill"
          className="z-0 absolute responsive-object-fit mt-9"
        />
        {/* Hero section */}
        <HeroSection />

        {/* Marquee */}
        <MarqueeCards />

        {/* Discover Tabs */}
        <DiscoverTabs />

        {/* Spark to spotlight */}
        <SparkToSpotlight />

        {/* B2B/B2C */}
        <MovingBorderCard />

        {/* Solution that helps */}
        <SolutionsThatHelps />

        {/* News and Products */}
        <NewsAndProducts />
      </div>
    </main>
  );
}
