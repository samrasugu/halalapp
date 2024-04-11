import { Business } from "@/typing.t";
import Image from "next/image";
import React from "react";
import imageURL from "/public/images/Business.png";

interface BusinessListProps {
  businesses: Business[];
}

export const BusinessList = ({ businesses }: BusinessListProps) => {
  if (!businesses || businesses.length === 0) {
    return (
      <div className="flex flex-col bg-white py-10 items-center">
        <Image
          src={imageURL}
          alt={"No businesses found"}
          width={300}
          height={300}
        />
        <h2 className="text-3xl font-semibold text-center py-6 text-primaryColor">
          No businesses found
        </h2>
      </div>
    );
  }
  return (
    <div className="flex flex-col bg-white">
      <h2 className="text-3xl font-semibold text-center py-6 text-primaryColor">
        Businesses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 px-20 bg-white">
        {businesses.map((business) => (
          <div
            key={business._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={business.imageUrl}
              alt={business.businessName}
              width={400}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-black font-semibold mb-2">
                {business.businessName}
              </h3>
              <p className="text-primaryColor mb-2">{business.type}</p>
              <p className="text-gray-600">
                {business.city},{business.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
