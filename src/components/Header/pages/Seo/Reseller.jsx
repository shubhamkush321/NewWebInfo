import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import DigitalCards from "../Extra/DigitalCards";
import Services from "../Extra/Services";

const Reseller = () => {
  const { infoDetails } = useContext(InfoContext);

  const Reseller = infoDetails?.find(
    (item) => item?.items[0].title === "Reseller Seo Services"
  );

  return (
    <>
      {Reseller && (
        <div className="lg:p-44 text-gray-800 bg-gray-100 -mt-20 ">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 lg:text-center">
            {Reseller?.items[0]?.title}
            &nbsp;- Your Agency’s Trustworthy SEO Partner
          </h1>
          <hr className="border-gray-500 mb-4" />
          <div className="mb-8">
            <div
              className="mb-6 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: Reseller?.items[0]?.content,
              }}
            />
          </div>
        </div>
      )}
      <div>
        <Services />
        <DigitalCards />
      </div>
    </>
  );
};

export default Reseller;
