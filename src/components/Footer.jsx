import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0b2440] text-white px-6 md:px-10 py-12 text-sm">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h5 className="font-semibold mb-3 uppercase text-[13px] tracking-wide">
              Buy
            </h5>
            <ul className="space-y-2 text-gray-300">
              <li>Properties for Sale</li>
              <li>Guide to Buying</li>
              <li>Signature Collection</li>
              <li>Mortgages</li>
              <li>Property Management</li>
              <li>Legal Services</li>
              <li>Currency Exchange</li>
              <li>Snagging & Inspection</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3 uppercase text-[13px] tracking-wide">
              Sell
            </h5>
            <ul className="space-y-2 text-gray-300">
              <li>List your Property</li>
              <li>Guide to Selling</li>
              <li>Book a Valuation</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3 uppercase text-[13px] tracking-wide">
              Off Plan
            </h5>
            <ul className="space-y-2 text-gray-300">
              <li>New Projects</li>
              <li>Guide to Buying Off Plan</li>
              <li>Best Dubai Communities</li>
              <li>Top Dubai Developers</li>
              <li>Snagging & Inspection</li>
              <li>Upcoming Roadshows</li>
              <li>Branded Residences</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3 uppercase text-[13px] tracking-wide">
              Rent
            </h5>
            <ul className="space-y-2 text-gray-300">
              <li>Properties to Rent</li>
              <li>Guide to Renting</li>
              <li>Short Term Rentals</li>
              <li>Property Management</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3 uppercase text-[13px] tracking-wide">
              Services
            </h5>
            <ul className="space-y-2 text-gray-300">
              <li>Properties for Sale</li>
              <li>Leasing</li>
              <li>Mortgages</li>
              <li>Conveyancing</li>
              <li>Property Management</li>
              <li>Snagging & Inspection</li>
              <li>Holiday Homes</li>
              <li>Currency Exchange</li>
              <li>Partner with PSI</li>
              <li>PRYPCO</li>
              <li>Ethnovate</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3 uppercase text-[13px] tracking-wide">
              About
            </h5>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Meet The Team</li>
              <li>Our Awards</li>
              <li>Careers</li>
              <li>Philanthropy</li>
              <li>Dubai News & Blog</li>
              <li>Sustainability Initiative</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 md:flex md:items-start md:justify-between">
          <div className="space-y-4">
            <div className="flex space-x-4 text-white text-lg">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
              <FaPaperPlane />
              <FaWhatsapp />
            </div>
            <div className="text-gray-400 text-xs">
              <p className="mt-2">
                Privacy Policy / Terms & Conditions / Sitemap
              </p>
              <p>Copyright © 2025. Provident Real Estate</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
