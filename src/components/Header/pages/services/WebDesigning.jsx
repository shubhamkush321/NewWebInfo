import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import DigitalCards from "../Extra/DigitalCards";
import Services from "../Extra/Services";

const webDesigning = () => {
  const { infoDetails } = useContext(InfoContext);

  const WebDesigning = infoDetails?.find(
    (item) => item?.items[0].title === "Web Designing"
  );

  return (
    <>
      {/* Content Section */}
      {WebDesigning && (
        <div className="text-gray-800 bg-gray-100 mt-16">
          <h1 className="text-3xl mb-6 text-gray-800 lg:text-center uppercase p-4">
            {WebDesigning?.items[0]?.title}
          </h1>
          <div className="mb-8">
            <div
              className="mb-6 text-gray-700 lg:p-44 -mt-44"
              dangerouslySetInnerHTML={{
                __html: WebDesigning?.items[0]?.content,
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

export default webDesigning;
