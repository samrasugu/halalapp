import { Business } from "@/typing.t";
import Image from "next/image";
import React from "react";

interface BusinessListProps {
  businesses: Business[];
}

export const BusinessList = ({ businesses }: BusinessListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {businesses.map((business) => (
        <div
          key={business._id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          {/* <Image
            src={business.imageUrl}
            alt={business.name}
            className="w-full h-48 object-cover"
          /> */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              {business.businessName}
            </h3>
            <p className="text-gray-600 mb-2">{business.type}</p>
            <p className="text-gray-600">
              {business.city},{business.country}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
