import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";

const ECommercePpc = () => {
  const { infoDetails } = useContext(InfoContext);

  const ECommercePpcData = infoDetails?.find(
    (item) => item?.items[0].title === "Ecommerce PPC"
  );

  return (
    <>
      {ECommercePpcData && (
        <div className="lg:p-44 text-gray-800 bg-gray-100 -mt-20 justify-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 lg:text-center uppercase">
            {ECommercePpcData?.items[0]?.title}
            &nbsp;
          </h1>
          <hr className="border-gray-500 mb-4" />
          <div className="mb-8">
            <div
              className="mb-6 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: ECommercePpcData?.items[0]?.content,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ECommercePpc;
