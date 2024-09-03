import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import DigitalCards from "../Extra/DigitalCards";
import Services from "../Extra/Services";

const WebsiteDevelopment = () => {
  const { infoDetails } = useContext(InfoContext);

  const WebsiteDevelopment = infoDetails?.find(
    (item) => item?.items[0].title === "Website Development"
  );

  return (
    <>
      {/* Content Section */}
      {WebsiteDevelopment && (
        <div className="text-gray-800 bg-gray-100 mt-16">
          <h1 className="text-3xl mb-6 text-gray-800 lg:text-center uppercase p-4">
            {WebsiteDevelopment?.items[0]?.title}
          </h1>
          <div className="mb-8">
            <div
              className="mb-6 text-gray-700 lg:p-44 -mt-44"
              dangerouslySetInnerHTML={{
                __html: WebsiteDevelopment?.items[0]?.content,
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

export default WebsiteDevelopment;
