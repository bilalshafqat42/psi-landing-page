import React from "react";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="relative">
        {/* Property Image */}
        <img
          src={property.propertyImage}
          alt={property.propertyName}
          className="w-full h-56 object-cover"
        />

        {/* For Sale Tag - Top Left */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          For Sale
        </span>

        {/* Heart Icon - Top Right */}
        <button
          onClick={() => console.log("Liked!")}
          className="absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:bg-red-100 transition"
        >
          <FaHeart className="text-red-500" />
        </button>

        {/* Price Tag - Bottom Left */}
        <span className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-sm font-bold px-3 py-1 rounded">
          {property.propertyPrice}
        </span>
      </div>

      <div className="p-4">
        {/* Heading */}
        <h2 className="text-lg font-semibold mb-1">{property.propertyName}</h2>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <FaMapMarkerAlt className="mr-1 text-blue-500" />
          {property.propertyLocation}
        </div>

        {/* Bed | Bath | Size */}
        <div className="grid grid-cols-3 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <FaBed className="text-blue-500" />
            {property.propertyBed} Bed
          </div>
          <div className="flex items-center gap-1">
            <FaBath className="text-blue-500" />
            {property.propertyBath} Bath
          </div>
          <div className="flex items-center gap-1">
            <FaRulerCombined className="text-blue-500" />
            {property.propertySize}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <a
            href={property.whatsappButton}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-sm"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href={property.callButton}
            className="flex justify-center items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded text-sm"
          >
            <FaPhoneAlt /> Call
          </a>
          <a
            href={property.emailButton}
            className="flex justify-center items-center gap-1 bg-purple-500 text-white px-2 py-1 rounded text-sm"
          >
            <FaEnvelope /> Email
          </a>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Agent Info + Details */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={property.agentImage}
              alt={property.agentName}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium">{property.agentName}</span>
          </div>
          <a
            href={property.propertyDetailsButton}
            className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-sm"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
