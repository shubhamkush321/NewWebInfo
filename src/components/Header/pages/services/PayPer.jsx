import React, { useState, useContext } from "react";
import Image from "../../../../assets/New folder/ppc-1.jpg";
import { InfoContext } from "../../../context/InfoContext";

const PayPer = () => {
  const { infoDetails } = useContext(InfoContext);

  const payPerData = infoDetails?.find(
    (item) => item?.items[0].title === "PayPer"
  );

  return (
    <>
      {payPerData && (
        <div className="p-10 bg-gray-100 text-gray-800 mt-40">
          <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">
            {payPerData?.items[0]?.title}
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Header</h2>
            <div
              className="mb-6 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: payPerData?.items[0]?.content,
              }}
            />
            <ul className="list-disc list-inside mb-6 pl-5">
              <li className="flex items-center mb-2 text-gray-700">
                <input type="checkbox" readOnly className="mr-2" />
                tenkjnkd
              </li>
            </ul>
            <ul className="list-disc list-inside mb-6 pl-5">
              <li className="mb-2 text-gray-700">new</li>
            </ul>
            <div className="flex justify-center mb-8">
              <img
                src={Image}
                className="w-full lg:w-2/3 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PayPer;
