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

  const handleSearch = async (searchCriteria: {
    searchTerm: string;
    category: string;
    location: string;
  }) => {
    try {
      const { searchTerm, category, location } = searchCriteria;
      const queryParams = new URLSearchParams();
      if (location) queryParams.append("location", location);
      if (searchTerm) queryParams.append("searchTerm", searchTerm);
      if (category) queryParams.append("category", category);

      const response = await fetch(`/api/search?${queryParams.toString()}`);
      const data = await response.json();
      setBusinesses(data);
      // clear search criteria
    } catch (error) {
      console.error("Error fetching businesses:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <HeroSection
        onSearch={handleSearch}
      />
      <BusinessList businesses={businesses} />
    </div>
  );
}
