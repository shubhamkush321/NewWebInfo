import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import DigitalCards from "../Extra/DigitalCards";
import Services from "../Extra/Services";

const WhiteLabel = () => {
  const { infoDetails } = useContext(InfoContext);

  const WhiteLabel = infoDetails?.find(
    (item) => item?.items[0].title === "White Label Seo"
  );

  return (
    <>
      {WhiteLabel && (
        <div className="lg:p-44 text-gray-800 bg-gray-100 -mt-20 ">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 lg:text-center uppercase">
            {WhiteLabel?.items[0]?.title}Services – Grow Your White Label Business Online
          </h1>
          <hr className="border-gray-500 mb-4" />
          <div className="mb-8">
            <div
              className="mb-6 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: WhiteLabel?.items[0]?.content,
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

export default WhiteLabel;
