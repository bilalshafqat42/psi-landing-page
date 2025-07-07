import React from "react";
import properties from "../constants/properties";

const PropertyList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {properties.map((property, index) => (
        <div
          key={index}
          className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
        >
          <img
            src={property.propertyImage}
            alt={property.propertyName}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{property.propertyName}</h2>
            <p className="text-gray-500">{property.propertyLocation}</p>
            <p className="mt-1 text-green-600 font-bold">
              {property.propertyPrice}
            </p>
            <div className="mt-2 text-sm text-gray-700">
              <span>{property.propertyBed} Bed</span> |{" "}
              <span>{property.propertyBath} Bath</span> |{" "}
              <span>{property.propertySize}</span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <img
                src={property.agentImage}
                alt={property.agentName}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm">{property.agentName}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={property.whatsappButton}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-500 px-3 py-1 rounded text-sm"
              >
                WhatsApp
              </a>
              <a
                href={property.callButton}
                className="text-white bg-blue-500 px-3 py-1 rounded text-sm"
              >
                Call
              </a>
              <a
                href={property.emailButton}
                className="text-white bg-purple-500 px-3 py-1 rounded text-sm"
              >
                Email
              </a>
              <a
                href={property.propertyDetailsButton}
                className="text-white bg-gray-700 px-3 py-1 rounded text-sm"
              >
                Details
              </a>
              <a
                href={property.likeButton}
                className="text-white bg-red-500 px-3 py-1 rounded text-sm"
              >
                ❤️ Like
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
