import Image from "next/image";
import { Urbanist } from "next/font/google";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { use, useEffect, useState } from "react";
import { Business } from "@/typing.t";
import { BusinessList } from "@/components/BusinessList";
import { Footer } from "@/components/Footer";

const inter = Urbanist({ subsets: ["latin"] });

export default function Home() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [originalBusinesses, setOriginalBusinesses] = useState<Business[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch("/api/businesses");
        const data = await response.json();
        setBusinesses(data);
        setOriginalBusinesses(data);
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
      if (data.length === 0) {
        console.log(data);
        setError("No businesses found matching the search criteria.");
      } else {
        setError(null);
        setBusinesses(data);
      }
      setBusinesses(data);
    } catch (error) {
      console.error("Error fetching businesses:", error);
    }
  };

  const showOriginalList = () => {
    setBusinesses(originalBusinesses);
    setError(null);
  };

  return (
    <div>
      <NavBar />
      <HeroSection onSearch={handleSearch} />
      {error && (
        <div className="bg-white text-white text-center px-4 pt-8">
          <button
            className="bg-primaryColor py-2 px-8 rounded-md text-white"
            onClick={showOriginalList}
          >
            OK
          </button>
        </div>
      )}
      <BusinessList businesses={businesses} />
      <Footer />
    </div>
  );
}
