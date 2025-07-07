import React, { useState } from "react";

const PropertySearchForm = () => {
  const [type, setType] = useState("rent");
  const [formData, setFormData] = useState({
    city: "",
    propertyType: "",
    bedroom: "",
    size: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search data:", { type, ...formData });
  };

  const handleReset = () => {
    setType("rent");
    setFormData({
      city: "",
      propertyType: "",
      bedroom: "",
      size: "",
      price: "",
    });
  };

  return (
    <div
      className="w-full max-w-7xl mx-auto p-6 rounded-2xl
      bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-10"
    >
      {/* Toggle + Reset Button Row */}
      <div className="flex justify-between md:justify-start items-center mb-6 gap-4 flex-wrap">
        {/* Rent / Buy Toggle */}
        <div className="relative flex bg-gray-200 rounded-full w-40 h-10 cursor-pointer">
          <div
            className={`absolute top-0 h-full w-1/2 bg-blue-700 rounded-full transition-all duration-300 ${
              type === "buy" ? "left-1/2" : "left-0"
            }`}
          ></div>
          <div
            className="flex-1 flex items-center justify-center z-10 text-sm font-medium"
            onClick={() => setType("rent")}
          >
            <span className={type === "rent" ? "text-white" : "text-gray-600"}>
              Rent
            </span>
          </div>
          <div
            className="flex-1 flex items-center justify-center z-10 text-sm font-medium"
            onClick={() => setType("buy")}
          >
            <span className={type === "buy" ? "text-white" : "text-gray-600"}>
              Buy
            </span>
          </div>
        </div>

        {/* Reset Button */}
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1 border border-gray-300 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582M20 20v-5h-.581m-1.41-5A7.5 7.5 0 004.582 9m0 0H9m-4.418 0A7.5 7.5 0 0119.418 15"
            />
          </svg>
          Reset
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col md:flex-row gap-4 md:items-end">
          {/* City Input */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm font-medium mb-1 text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Property Type */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm font-medium mb-1 text-gray-700">
              Property Type
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Townhouse</option>
            </select>
          </div>

          {/* Bedroom */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm font-medium mb-1 text-gray-700">
              Bedroom
            </label>
            <select
              name="bedroom"
              value={formData.bedroom}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>

          {/* Property Size */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm font-medium mb-1 text-gray-700">
              Size (sqft)
            </label>
            <input
              type="number"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="e.g. 1000"
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm font-medium mb-1 text-gray-700">
              Price
            </label>
            <select
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option>Below 1M</option>
              <option>1M - 2M</option>
              <option>2M+</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex flex-col w-full md:w-auto">
            <button
              type="submit"
              className="mt-4 md:mt-0 bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertySearchForm;
