import React from "react";
import { FiDownload } from "react-icons/fi";

const DownloadBrochure = () => {
  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-20 relative shadow-lg rounded-3xl bg-[#081E35]">
        <div className="rounded-2xl w-full z-20 md:z-0">
          <div className="flex flex-col w-full h-auto px-4 py-3 md:py-6 md:px-8 text-white">
            <div>
              <h2 className="text-4xl font-black pb-2 mb-4 border-b-2 w-fit border-white playfair uppercase">
                Download Brochure
              </h2>
              <p className="text-lg lg:text-xl font-extralight mt-4">
                All you need to know about this project
              </p>
            </div>
            <div className="flex flex-col justify-center items-start py-4">
              <button
                type="submit"
                className="select-none flex justify-between items-center relative space-x-4 hover:cursor-pointer bg-white text-[#000000] hover:bg-white/80 transition delay-50 px-6 rounded-full py-3 text-xl uppercase"
              >
                Download Brochure <FiDownload className="ml-2 text-xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl max-h-[10rem] lg:max-h-[15rem] flex justify-center items-center">
          <img
            className="w-full h-full max-w-lg lg:mr-20"
            src="/brochure.png"
            alt="download brochure"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadBrochure;
