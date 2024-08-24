import React from "react";
import image1 from "../../../../assets/New folder/asset 17.png";
import image2 from "../../../../assets/New folder/asset 18.png";
import image3 from "../../../../assets/New folder/asset 19.png";
import image4 from "../../../../assets/New folder/asset 20.png";
import image5 from "../../../../assets/New folder/asset 21.png";

function Services() {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left side grid item */}
          <div className="lg:col-span-2">
            <div className="bg-blue-900 p-4 rounded-lg shadow-md w-64 mx-auto flex flex-col h-auto ml-6">
              <h3 className="text-xl font-bold mb-2 ml-10 text-white">
                OUR EXPERTISE
              </h3>
              <p className="text-white mt-6">
                Are you a looking for Digital Marketing Services at Affordable
                Price? If yes, Increase your traffic & sales with Web
                Infomatrix’s Digital Marketing Full Services with satisfied
                customers. We provide unique and customized Digital Marketing
                Services, including{" "}
                <a href="/" className="text-blue-600">
                  SEO, SMO, PPC, Web Designing, Website Development, ORM,{" "}
                </a>
                and many more for your Business
                <button className="border rounded-full w-52 bg-yellow-400 text-white px-4 py-1 mt-32 mb-36 ml-2">
                  Click Here
                </button>
              </p>
            </div>
          </div>

          {/* Right side grid items */}
          <div className="lg:col-span-2 -ml-44">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-blue-900 p-4 rounded-lg flex flex-col h-[250px] w-[200px]">
                <div className="flex items-center justify-center mb-2">
                  <img
                    src={image1}
                    alt="Web Designing"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Digital Marketing
                </h3>
                <p className="text-white flex-grow">
                  We are one of the Best Digital Marketing Agency for Business
                  Growth & Branding Services
                </p>
              </div>
              <div className="bg-blue-200 p-4 rounded-lg  flex flex-col h-[250px] w-[200px]">
                <div className="flex items-center justify-center mb-2">
                  <img
                    src={image2}
                    alt="Web Designing"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  SEO Services
                </h3>
                <p className="text-white flex-grow">
                  We are professional search engine optimization company that
                  offers 100% Organic SEO Services.
                </p>
              </div>
              <div className="bg-blue-900 p-4 rounded-lg  flex flex-col h-[250px] w-[200px]">
                <div className="flex items-center justify-center mb-2">
                  <img
                    src={image3}
                    alt="Web Designing"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  SMO Services
                </h3>
                <p className="text-white flex-grow">
                  We offer Social Media Optimization (SMO) for all Social Media
                  profiles at an affordable price.
                </p>
              </div>
            </div>
            {/* second */}
            <div className="lg:col-span-2 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-blue-200 p-4 rounded-lg  flex flex-col h-[450px] w-[200px] ">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={image3}
                      alt="Web Designing"
                      className="w-14 h-14 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Web Designing
                  </h3>
                  <p className="text-white flex-grow">
                    Web Infomatrix provides Web Design Services with highly
                    scalable, Get Responsive, SEO Friendly Web design Services
                    for Startup, Small Business, or Large Corporation
                  </p>
                </div>
                <div className="bg-blue-900 p-4 rounded-lg  flex flex-col h-[450px] w-[200px]">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={image4}
                      alt="Web Designing"
                      className="w-14 h-14 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    PPC Services
                  </h3>
                  <p className="text-white flex-grow">
                    Our PPC Experts team provide Google Ads, Display Ads, Social
                    Media Ads, Pay Per Click Advertising. Increase conversion
                    rate, website traffic and revenue with our Best PPC
                    Services.
                  </p>
                </div>
                <div className="bg-blue-200 p-4 rounded-lg  flex flex-col h-[450px] w-[200px]">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={image5}
                      alt="Web Designing"
                      className="w-14 h-14 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    ORM Services
                  </h3>
                  <p className="text-white flex-grow">
                    We are leading ORM Service Provider, Build a positive image
                    about your Business and brand with the right ORM Services –
                    Restore and protect your brand, Branding, Positive Reviews,
                    Brand Identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
