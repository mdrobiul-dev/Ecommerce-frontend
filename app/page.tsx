import { X, DiamondPercent } from "lucide-react";
import { MoveRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center gap-2 w-full h-7 bg-[#38CB89] relative">
        <DiamondPercent size={22} className="inline" />
        <p> 30% off storewide — Limited time!</p>
        <a href="#" className="underline">
          Shop Now
          <span className="pl-1">
            <MoveRight size={15} className="inline" />
          </span>
        </a>
      </div>
      <button className="absolute right-2 top-1">
        <X />
      </button>
      <Navbar />
      <Hero />
    </main>
  );
}
