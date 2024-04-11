import React, { useState } from "react";

export const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/heroimage.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-center">
        <div className="text-center text-white pt-44 pb-20">
          <h1 className="text-4xl font-semibold mb-4">
            Find the best halal businesses
          </h1>
          <p className="text-lg mb-6">
            Discover the best halal businesses near you
          </p>
          <button className="px-6 py-2 bg-primaryColor text-white rounded-md">
            Get Started
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg w-auto mx-20">
          <form action="" className="flex flex-wrap">
            <input
              type="text"
              placeholder="Search term"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 mb-4 mr-4 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 mb-4 mr-4 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="restaurant">Restaurant</option>
              <option value="grocery">Business</option>
              <option value="beauty">Beauty</option>
              <option value="art">Art</option>
            </select>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-2 mb-4 mr-4 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select location</option>
              <option value="United States">United States</option>
              <option value="Kenya">Kenya</option>
              <option value="United States">United Kingdom</option>
              <option value="Morocco">Morocco</option>
              <option value="South Africa">South Africa</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 mb-4 bg-primaryColor text-white rounded-md"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
