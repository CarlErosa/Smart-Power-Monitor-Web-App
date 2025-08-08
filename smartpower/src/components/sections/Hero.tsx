import { Button } from "@/components/ui/button";
import { IconEye } from "@tabler/icons-react";
import styles from "./Hero.module.css";

export default function Hero() {
    return(
         <section className="relative overflow-hidden">
      <div className={styles.lightningContainer}>
        <div className={`${styles.lightning} ${styles.lightning1}`}></div>
        <div className={`${styles.lightning} ${styles.lightning2}`}></div>
        <div className={`${styles.lightning} ${styles.lightning3}`}></div>
        <div className={`${styles.lightning} ${styles.lightning4}`}></div>
      </div>
    <div className="text-center p-10 mt-40 relative z-10">
      <h1 className="text-7xl font-bold text-white">Take Control of Your</h1>
      <h1 className="text-7xl font-bold text-[#a5f3fc]">Energy Usage</h1>
      <p className="mt-4 text-gray-400">Monitor, analyze, and optimize your home's energy consumption<br /> with our intelligent IoT platform. Save money while reducing your environmental footprint.</p>
      <div className="flex gap-4 justify-center items-center mt-10">
        <Button variant="secondary" className="bg-[#a5f3fc] hover:bg-[#87ceeb] hover:scale-105 hover:shadow-lg hover:shadow-cyan-300/30 transition-all duration-300 ease-in-out">Start Free Trial</Button>
        <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 hover:border-sky-400 hover:text-sky-400 hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 ease-in-out">
          <IconEye className="w-4 h-4" /> View Live Demo
        </Button> 
      </div>
      <p className="mt-8 text-sm text-gray-400">No credit card required • 14-day free trial • Setup in under 5 minutes</p>
    </div>
   </section>
    )
}