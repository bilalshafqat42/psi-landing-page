import React, { useState, useEffect } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [media, setMedia] = useState({ mediatype: 129475, medianame: 165233 });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source");

    let mediatype = 129475;
    let medianame = 165233;

    switch (source) {
      case "newsletter":
        mediatype = 166277;
        medianame = 166071;
        break;
      case "sms":
        mediatype = 129474;
        medianame = 129200;
        break;
      case "google":
      case "google_adwords_banner":
      case "google_adwords":
      case "google_adword":
      case "google_ads":
        mediatype = 167218;
        medianame = 128455;
        break;
      case "snapchat":
        mediatype = 165269;
        medianame = 166858;
        break;
      case "facebook":
        mediatype = 165269;
        medianame = 131010;
        break;
      case "blog":
        mediatype = 167313;
        medianame = 167314;
        break;
      case "instagram":
        mediatype = 165269;
        medianame = 166728;
        break;
      case "linkedin":
        mediatype = 165269;
        medianame = 165070;
        break;
      case "whatsapp":
        mediatype = 165269;
        medianame = 166453;
        break;
      case "youtube":
        mediatype = 165269;
        medianame = 166053;
        break;
      default:
        break;
    }

    setMedia({ mediatype, medianame });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const campaignId =
      new URLSearchParams(window.location.search).get("campaign_id") || "0";
    const pageURL = window.location.href;
    const remarks = `Name: ${formData.fname} ${formData.lname}, Email: ${formData.email}, Phone: ${formData.phone}, Page: ${pageURL}`;
    const userIP = "0.0.0.0";

    const url = `https://api.portal.dubai-crm.com/leads/query/create?TitleID=129929&IsForAutoRotation=false&FirstName=${encodeURIComponent(
      formData.fname
    )}&FamilyName=${encodeURIComponent(
      formData.lname
    )}&MobileCountryCode=0&MobileAreaCode=0&MobilePhone=${
      formData.phone
    }&TelephoneCountryCode=na&TelephoneAreaCode=na&Telephone=na&Email=${encodeURIComponent(
      formData.email
    )}&NationalityID=65946&Remarks=${encodeURIComponent(
      remarks
    )}&RequirementType=91212&ContactType=3&CountryID=65946&StateID=91578&CityID=91578&DistrictID=&CommunityID=&SubCommunityID&PropertyID=304861&UnitType=19&PropertyCampaignId=${campaignId}&LanguageID=115915&MethodOfContact=115747&MediaType=${
      media.mediatype
    }&MediaName=${
      media.medianame
    }&Bedroom=&Bathroom=&Budget=&Budget2=&RequirementCountryID=65946&ReferredToID=4634&ReferredByID=4421&IsBulkUpload=false&ActivityAssignedTo=4421&ActivityDate=&ActivityTypeId=167234&ActivitySubject=Email%20Inquiry%20Copy&ActivityRemarks=${encodeURIComponent(
      remarks
    )}&Phone=&APIKey=d301dba69732065cd006f90c6056b279fe05d9671beb6d29f2d9deb0206888c38239a3257ccdf4d0`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log("✅ Lead submitted:", result);
      alert("Thank you! Your request has been submitted.");
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-[#f6f6f6]">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-20 lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="font-heading tracking-wide text-4xl sm:text-7xl lg:text-4xl font-semibold leading-tight tracking-tight uppercase mb-6">
            Our Experts will help you buy the best
          </h2>
          <p className="font-body text-[#333] text-basis leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="rounded-3xl p-8 flex flex-col w-full border-2 border-[#081E35]/50">
            <form className="myForm" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-6 grid-cols-1 lg:grid-cols-2">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  className="col-span-2 bg-transparent border-b-2 border-[#081E35]/50 text-sm focus:outline-none focus:border-[#081E35] block w-full p-2.5"
                  required
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  className="col-span-2 bg-transparent border-b-2 border-[#081E35]/50 text-sm focus:outline-none focus:border-[#081E35] block w-full p-2.5"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="col-span-2 bg-transparent border-b-2 border-[#081E35]/50 text-sm focus:outline-none focus:border-[#081E35] block w-full p-2.5"
                  required
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="col-span-2 bg-transparent border-b-2 border-[#081E35]/50 text-sm focus:outline-none focus:border-[#081E35] block w-full p-2.5"
                  required
                  onChange={handleChange}
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
                our
                <a className="underline" href="https://psinv.net/en/terms">
                  Terms &amp; Conditions
                </a>
                ,{" "}
                <a
                  className="underline ml-1"
                  href="https://psinv.net/en/privacy"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
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
