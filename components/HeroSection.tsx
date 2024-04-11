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
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-auto">
          <form action="" className="flex flex-wrap">
            <input
              type="text"
              placeholder="Search term"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 mb-4 mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 mb-4 mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="px-4 py-2 mb-4 mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
