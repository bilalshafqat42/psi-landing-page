import React from "react";
// import { FiDownload } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";

const DownloadBrochure = () => {
  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-20 relative shadow-lg rounded-3xl bg-[#081E35]">
        <div className="rounded-2xl w-full z-20 md:z-0">
          <div className="flex flex-col w-full h-auto px-4 py-3 md:py-6 md:px-8 text-white">
            <div>
              <h2 className="font-heading font-semibold tracking-wide text-4xl text-[#fff] uppercase border-b-2 w-fit pb-2 font-light leading-tight mb-4">
                Download Brochure
              </h2>
              <p className="font-body text-[#fff] text-basis leading-relaxed mt-6 mb-2">
                All you need to know about this project. All you need to know
                about this project. All you need to know about this project.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start py-4">
              <button className="flex flex-row items-center tracking-wide font-body font-normal bg-[#E46027] hover:bg-[#E46027]/90 text-white font-regular px-6 py-3 rounded text-sm uppercase">
                Download Brochure <HiDownload className="ml-3" />
              </button>
              {/* <button
                className="flex flex-row items-center tracking-wide font-body font-normal
 bg-[#E46027] hover:bg-[#E46027]/90 text-white px-6 py-3 rounded"
              >
                Download Brochure <HiDownload className="ml-3" />
              </button> */}
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
