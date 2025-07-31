import { Button } from "@/components/ui/button";
import { IconEye } from "@tabler/icons-react";


export default function Hero() {
    return(
         <section>
    <div className="text-center p-10 mt-20">
      <h1 className="text-7xl font-bold text-white">Take Control of Your</h1>
      <h1 className="text-7xl font-bold text-[#a5f3fc]">Energy Usage</h1>
      <p className="mt-4 text-gray-400">Monitor, analyze, and optimize your home's energy consumption<br /> with our intelligent IoT platform. Save money while reducing your environmental footprint.</p>
      <div className="flex gap-4 justify-center items-center mt-6">
        <Button variant="secondary" className="bg-[#a5f3fc]">Start Free Trial</Button>
        <Button variant="outline" className="bg-transparent border-white">
          <IconEye className="w-4 h-4" /> View Live Demo
        </Button> 
      </div>
    </div>
   </section>
    )
}