import React, { useContext } from "react";
import { InfoContext } from "../../../../context/InfoContext";
import Services from "../../Extra/Services";
import ContactForm from "../../Extra/ContactForm";
import image1 from "../../../../../assets/New folder/asset 4.jpeg";

const BrandReputation = () => {
  const { infoDetails } = useContext(InfoContext);

  const BrandReputation = infoDetails?.find(
    (item) => item?.items[0].title === "Brand Reputations"
  );

  return (
    <>
      {BrandReputation && (
        <div className="lg:p-44 text-gray-800 bg-gray-100 -mt-16 justify-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 lg:text-center">
            {BrandReputation?.items[0]?.title}
            &nbsp;Management - Your Keys to Success
          </h1>

          <div className="mb-8">
            <div
              className="mb-6 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: BrandReputation?.items[0]?.content,
              }}
            />
          </div>
        </div>
      )}
      <div className="lg:p-44 -mt-20">
        <Services />
        <img src={image1} alt="Online Reputation" />
        <ContactForm />
      </div>
    </>
  );
};

export default BrandReputation;
