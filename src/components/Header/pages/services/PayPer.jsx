import React from "react";
import image1 from "../../../../assets/New folder/ppc-1.jpg";

const PayPer = () => {
  return (
    <main className="mt-4 p-20 bg-blue-50">
      <header className="mt-8 text-center">
        <h1 className="text-xl font-bold text-gray-800 uppercase">
          Pay Per Click Advertising Services
        </h1>
        <hr className="border-black mt-4" />
      </header>

      <section className="mt-8">
        <p className=" text-gray-700 mb-2">
          PPC Advertising is on a roll these days. It is one of the most
          effective advertising strategies of the Internet world, which has
          spread its wings brilliantly! It is one of the most effective ways to
          reach your target audience, have business with them and get an
          increased ROI in return. What else can you ask for!
        </p>
        <p className=" text-gray-700">
          We at Web Infomatrix are bedecked to a dedicated, professional and
          qualified workforce that is especially linked with the department of
          PPC management only. Wow! A dedicated staff that works day and night
          just to make sure that your PPC advertisement turns into a huge
          success. That’s great! We don’t just believe in making promises, but
          fulfilling them as well.
        </p>
      </section>

      <hr className="border-black mt-4 mb-4" />

      <article>
        <h3 className="text-gray-800 text-xl font-bold text-start mb-6 uppercase justify-center flex">
          PPC Campaign Management
        </h3>
        <div className="flex flex-col items-start mt-4">
          {[
            "Every business has a different forte and offers various services",
            "That means the implementation of the right keywords plays a very important role in PPC Campaigns",
            "PPC professionals bid on keywords that match your products and services with radiance!",
            "PPC not only deals with effective keywords but should have a compelling Ad copy as well.",
            "We track PPC ROI on a regular basis and maintain our PPC and Google Adwords Campaigns in a professional manner.",
            "Our professionals monitor your campaigns on a daily basis. This is done to cope up with the highs and lows of the internet world!",
            "Strategy Building: Our aced team makes comprehensive strategies to improve the revenues, sales, and traffic to your site on a long-term basis",
            "At the same time, we create convincing Ad Campaigns for a perfect brand recall for you!",
            "The knowledge of ongoing marketing trends is essential to keep track of your target audience. We do exactly that!"
          ].map((text, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`linkability-${index}`}
                className="form-checkbox h-5 w-5 text-gray-600 focus:ring-blue-500"
              />
              <label htmlFor={`linkability-${index}`} className="ml-2 text-gray-700 text-sm">
                {text}
              </label>
            </div>
          ))}
        </div>
      </article>

      <section className="flex justify-center bg-gray-100">
        <img src={image1} alt="Pay per click advertising" className="border-transparent" />
      </section>

      <hr className="border-black mt-6 mb-6" />

      <section className="mt-8 text-start">
        <h1 className="text-xl font-bold text-gray-800 uppercase">
          Pay Per Click Advertising Services
        </h1>
      </section>

      <section className="mt-8">
        <p className=" text-gray-700">
          Pay-per-click marketing might seem easy to implement as just a
          colossal system of channels that advertisers must use for promotion.
          But it is actually a complex process and you need to work with a well
          known{" "}
          <a href="#" className="text-blue-600">
            digital marketing company{" "}
          </a>
          like Web Infomatrix to successfully implement{" "}
          <b>digital marketing.</b> <br /> <br />
          For genuine good quality digital marketing that will provide effective
          results, marketers need to find techniques that have an effect in
          successful implementation of digital marketing strategies.
        </p>
        <ul>
          <li className="text-gray-500 mt-4">
            &#x2022; Engagement marketing: it is basically a strategy of digital
            marketing that ensures you build important connections with
            potential and returning customers. When you draw in clients in
            advance, you increase brand awareness and it helps you become an
            industry leader.
          </li>
          <li className="text-gray-500 mt-4">
            &#x2022; Omni channel digital marketing: our <b> ppc agency</b> Web
            Infomatrix, can help your business actualize an omnichannel digital
            marketing technique. Advertisers can collect important data
            regarding target audience and make new strategies based on that. It
            increases client engagement for your business.
          </li>
        </ul>

        <p className="text-gray-600 mt-4">In the current scenario where most people have a solid digital presence, <b> digital marketing </b>is the key to reach success.</p>

        <p className="mt-4 text-gray-700">
          In a country like India where the digital space has grown over the years, <b> digital marketing </b> plays an important role in the success of a business. We are the best <a href="#" className="text-blue-600"> digital marketing agency </a>in India and our <b>digital marketing experts</b> have always successfully captured the attention of the Indian crowd in the digital space. Using our <a href="#" className="text-blue-600">digital marketing services </a> in India can prove to be a crucial decision that will impact your hold on the Indian crowd.
        </p>

        <h3 className=" text-gray-900 mt-4">Importance of digital marketing in India.</h3>
        <p className="text-gray-500 mt-4">1. <b>Preference</b> of consumers: if you implement digital marketing, it helps the business keep up with consumer tastes and their preferences.</p>
        <p className="text-gray-500 mt-4">2. <b>Competition:</b> implementation of digital marketing ensures severe competition among firms in similar industries. Proper use of digital marketing gives a business an edge over its competitors. Thus it also increases brand awareness</p>
        <p className="text-gray-500 mt-4">3. <b>Larger economy</b>: digital marketing maximizes the sale of any business. Thus it also increases its scale of production and with continued marketing it keeps on growing.</p>
        <p className="text-gray-500 mt-4">4. <b>Target users</b>: the target audience of a company expands when you use digital marketing for advertising and promotional purposes. Your business gets a wider consumer group.</p>
        <p className="text-gray-500 mt-4">5. <b>Optimized results</b>: you can monitor various plans and policies of your business when you implement digital marketing. So it helps in optimization of your strategies to get better results.</p>

        <h1 className="text-xl font-bold text-gray-800 mt-8">Benefit of digital marketing strategy</h1>

        <p className="text-gray-500 mt-4">
          Implementing digital marketing in India for promotional or advertising or any other purposes for brand development is beneficial. It can help you reach 26 crore people in India and help your business grow.
        </p>

        <h3 className=" text-gray-700 mt-4">The benefits of digital marketing is as follow:</h3>
        <ul>
          <li className="text-gray-500 mt-2">1. Cost effective</li>
          <li className="text-gray-500 mt-2">2. Easily monitored.</li>
          <li className="text-gray-500 mt-2">3.Access to a large target audience.</li>
          <li className="text-gray-500 mt-2">4. Rise to digital revolution.</li>
          <li className="text-gray-500 mt-2"> 5. Helps economic development of a country.</li>
        </ul>
<p className="text-gray-500 mt-4">In conclusion, you should get in touch with our <a href="#" className="text-blue-600">ppc firm</a> Web Infomatrix for accurate implementation of digital marketing in the Indian economy. It is important that digital marketing is properly used so that you get to scale the market of your business. It will bring in more clients and increase customer engagement with your business.</p>

<p className="text-gray-500 mt-8">So get in touch with us through call or visit our site for further details.</p>
      
      </section>
    </main>
  );
};

export default PayPer;
