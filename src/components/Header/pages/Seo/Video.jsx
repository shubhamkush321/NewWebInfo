import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import DigitalCards from "../Extra/DigitalCards";
import Services from "../Extra/Services";

const Video = () => {
  const { infoDetails } = useContext(InfoContext);

  const Video = infoDetails?.find(
    (item) => item?.items[0].title === "Video Seo"
  );

  return (
    <>
      {Video && (
        <div className="lg:p-44 text-gray-800 bg-gray-100 -mt-20 ">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 lg:text-center uppercase">
            {Video?.items[0]?.title}
            &nbsp;and YouTube SEO Services
          </h1>
          <hr className="border-gray-500 mb-4" />
          <div className="mb-8">
            <div
              className="mb-6 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: Video?.items[0]?.content,
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

export default Video;
