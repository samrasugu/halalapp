import Image from "next/image";
import { Inter } from "next/font/google";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  );
}
