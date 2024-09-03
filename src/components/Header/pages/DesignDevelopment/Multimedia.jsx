import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";

const Multimedia = () => {
  const { infoDetails } = useContext(InfoContext);

  const MultimediaData = infoDetails?.find(
    (item) => item?.items[0].title === "Multimedia Designing"
  );

  return (
    <>
      {MultimediaData && (
        <div className="lg:p-44 text-gray-800 bg-gray-100 -mt-20 justify-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 lg:text-center uppercase">
            {MultimediaData?.items[0]?.title}
            &nbsp; Services
          </h1>
          <hr className="border-gray-500 mb-4" />
          <div className="mb-8">
            <div
              className="mb-6 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: MultimediaData?.items[0]?.content,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Multimedia;
