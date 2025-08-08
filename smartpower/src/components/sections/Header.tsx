'use client';
import { Button } from "@/components/ui/button"
import { IconEye } from "@tabler/icons-react";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const handleFeaturesClick = (e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.getElementById('features');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
        <section>
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col sm:flex-row items-center justify-between py-2 px-4 bg-black/20 backdrop-blur-lg text-white font-bold border-b border-gray-700/30">
  <div className="flex items-center gap-x-0 mb-1 sm:mb-0">
    <img src="/image.png" alt="Logo" className="w-8 h-8 sm:w-12 sm:h-12 mt-3" />
    <div className="font-bold text-base sm:text-xl text-sky-500 mt-0">SmartVolt</div>
  </div>
  
  <div className="flex flex-wrap gap-x-3 sm:gap-x-4 items-center">
    <Link href="#features" className="hover:text-sky-500 transition-all duration-300 ease-in-out hover:scale-105 text-sm" onClick={handleFeaturesClick}>Features</Link>
    <Link href="#pricing" className="hover:text-sky-500 transition-all duration-300 ease-in-out hover:scale-105 text-sm">Pricing</Link>
    <Link href="#about" className="hover:text-sky-500 transition-all duration-300 ease-in-out hover:scale-105 text-sm">About</Link>
    <Button variant="outline" size="sm" className="bg-transparent border-white text-xs cursor-pointer hover:scale-105 hover:border-sky-500 hover:text-sky-500 transition-all duration-300 ease-in-out">
      <IconEye className="w-3 h-3" /> View Dashboard
    </Button>
  </div>
</nav>
   </section>
    )
}