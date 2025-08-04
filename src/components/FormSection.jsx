import React from "react";

const FormSection = () => {
  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-20 lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-4xl font-bold uppercase mb-6">
            Our Experts will help you buy the best
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-16 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="rounded-3xl p-8 flex flex-col w-full">
            <form className="myForm">
              <div className="grid gap-4 mb-6 grid-cols-1 lg:grid-cols-2">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  className="col-span-2 bg-transparent border-b-2 border-[#081E35]/50 text-sm focus:outline-none focus:border-[#081E35] block w-full p-2.5"
                  required
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  className="col-span-2 bg-transparent border-b-2 border-[#081E35]/50 text-sm focus:outline-none focus:border-[#081E35] block w-full p-2.5"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="col-span-2 bg-transparent border-b-2 border-[#081E35]/50 text-sm focus:outline-none focus:border-[#081E35] block w-full p-2.5"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="col-span-2 bg-transparent border-b-2 border-[#081E35]/50 text-sm focus:outline-none focus:border-[#081E35] block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="group w-full rounded-full bg-[#081E35] font-bold text-lg text-white relative overflow-hidden px-5 py-3 uppercase"
              >
                Enquire Now
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-full"></div>
              </button>
              <p className="w-full text-[#5D5D5C] text-xs font-light text-center mt-2">
                By clicking Submit, you agree to <br />
                our{" "}
                <a className="underline" href="https://psinv.net/en/terms">
                  Terms &amp; Conditions
                </a>
                ,
                <a
                  className="underline ml-1"
                  href="https://psinv.net/en/privacy"
                >
                  Privacy Policy
                </a>{" "}
                and
                <a
                  className="underline ml-1"
                  href="https://enquiries.estate/outreach-guidelines/"
                >
                  Outreach Guidelines
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
