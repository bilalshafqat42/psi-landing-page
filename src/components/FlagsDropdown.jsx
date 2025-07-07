import React, { useState } from "react";
import { countries } from "../constants/countries"; // adjust path as needed

const FlagDropdown = () => {
  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer border px-4 py-2 rounded-lg bg-white shadow-md"
      >
        <img src={selected.flag} alt={selected.name} className="w-5 h-5 mr-2" />
        <span>{selected.name}</span>
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
        </svg>
      </div>

      {open && (
        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white z-10">
          {countries.map((country) => (
            <div
              key={country.code}
              onClick={() => {
                setSelected(country);
                setOpen(false);
              }}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-5 h-5 mr-2"
              />
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlagDropdown;
