import { Button } from "@/components/ui/button"
import { IconEye } from "@tabler/icons-react";
import Link from 'next/link'

export default function Header() {
    return (
        <header>
    <nav className="flex flex-col sm:flex-row items-center justify-between py-2 px-4 bg-[#0f172a] text-white backdrop-blur font-bold border-b border-gray-700">
  <div className="flex items-center gap-x-2 mb-1 sm:mb-0">
    <img src="/image.png" alt="Logo" className="w-8 h-8 sm:w-12 sm:h-12" />
    <div className="font-bold text-base sm:text-xl text-sky-500">Smart Power</div>
  </div>
  
  <div className="flex flex-wrap gap-x-3 sm:gap-x-4 items-center">
    <Link href="/features" className="hover:text-sky-500 transition-colors text-sm">Features</Link>
    <Link href="/pricing" className="hover:text-sky-500 transition-colors text-sm">Pricing</Link>
    <Link href="/reviews" className="hover:text-sky-500 transition-colors text-sm">Reviews</Link>
    <Button variant="outline" size="sm" className="bg-transparent border-white text-xs cursor-pointer">
      <IconEye className="w-3 h-3" /> View Dashboard
    </Button>
  </div>
</nav>
   </header>
    )
}