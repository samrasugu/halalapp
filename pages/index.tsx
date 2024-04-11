import Image from "next/image";
import { Urbanist } from "next/font/google";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { use, useEffect, useState } from "react";
import { Business } from "@/typing.t";
import { BusinessList } from "@/components/BusinessList";

const inter = Urbanist({ subsets: ["latin"] });

export default function Home() {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch("/api/businesses");
        const data = await response.json();
        setBusinesses(data);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };

    fetchBusinesses();
  }, []);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <BusinessList businesses={businesses} />
    </div>
  );
}
