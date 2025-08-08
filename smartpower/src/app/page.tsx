import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import HowitWorks from '@/components/sections/HowitWorks';
import { Zap, TrendingDown, Activity , Cog, Shield, BarChart, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import Pricing from '@/components/sections/Pricing';

export const metadata: Metadata = {
  title: "Welcome to SmartVolt",
  description: "",
};

export default function Home() {
  return (
  <div>
   {/*Header Section*/}
  <Header />

   {/*Hero Section*/}
  <Hero />

   {/*How It Works Section*/}
  <HowitWorks />

   {/* Pricing Section */}
   <Pricing />

</div>



  );
}
