import React from "react";
import { useState } from "react";
import image1 from "../../../../assets/New folder/asset 1.png";
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import ContactForm from "../ContactForm";
import Testimonial from "../Testimonial/Testimonial";

const Social = () => {
  const [isOpen, setIsOpen] = useState({
    question1: false,
    question2: false,
  });

  const toggleOpen = (question) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };
  return (
    <div className="container mx-auto p-20">
      <h3 className="text-gray-800 text-2xl font-bold text-center mb-4">
        Outsource Social Media Marketing Services
      </h3>
      <hr className="border-black" />

      <div className="flex">
        <p className="text-gray-800 mt-10 text-start">
          We at Web Infomatrix have a dedicated team of Social Media
          Optimization Services. Social media marketing is an integral part of
          digital marketing. There has always been a lot of discussion related
          to the role of social media marketing in increasing brand awareness.
          Our digital marketing agency has experience in providing social media
          marketing services in an optimized manner.{" "}
          <hr className="border-black mt-2" />
        </p>
        <img src={image1} className=" rounded-lg" />
      </div>
      <p className="text-gray-800 mt-4">
        It has proven to increase brand awareness with an ever-increasing number
        of individuals using social media. Successful brands usually have good
        social media presence and apply effective social media marketing
        techniques for increasing brand awareness. Our experts implement this
        technique to generate quality customers for our clients on a regular
        basis.
      </p>
      <h4 className="text-gray-800 text-xl font-bold text-start mt-12 mb-4">
        Social Media Marketing for a Successful Business Start-Up
      </h4>
      <p className="text-gray-800 mt-4">
        Social media marketing is the use of social media platforms to link your
        business to your customers. Using social media marketing, you can
        communicate your idea with your customers and increase sales.
      </p>
      <p className="text-gray-600 mt-4">
        Social media marketing mainly involves posting engaging content on
        social media platforms like Instagram, Facebook, etc. It helps you gain
        the trust of your followers and you can influence them to spread good
        words about you.
      </p>
      <p className="text-gray-600 mt-4">
        Our digital marketing company Web Infomatrix provides affordable social
        media marketing services. You should be aware of the importance of
        social media marketing when you choose to implement it for your
        business.
      </p>
      {/* Importance */}
      <h4 className="text-gray-800 text-xl font-bold text-start mt-12 mb-4">
        Importance of social media marketing
      </h4>
      <p className="text-gray-800">
        1. <b>Cost-effective:</b> advertising your business in social media
        saves cost as compared to traditional marketing
      </p>
      <p className="text-gray-800">
        2. <b>Customer loyalty:</b> ayour customers can easily find you if you
        have a social media presence. Social media marketing is a great way of
        proving your loyalty among your customers. As a result, they connect
        with you on a deeper level and become loyal customers of your brand.
      </p>
      <p className="text-gray-800">
        3. <b>SEO Rank::</b> it is not enough to just update your websites and
        blogs to get a good search engine rank. To get a good score in the
        marketing society, you need to implement social media marketing.
      </p>
      <p className="text-gray-800">
        4. <b>Increased traffic:</b> if you have a social media presence and
        implement all the rules of proper social media marketing, then you will
        see an increased footfall on your website.
      </p>
      <p className="text-gray-800 mt-6">
        Thus, without social media, it has become impossible for businesses to
        influence people. You need social media marketing to provide power to
        your business for growth.
      </p>

      {/* Strategy */}
      <h3 className="text-gray-800 text-2xl font-bold text-center mt-12">
        Social media strategy
      </h3>
      <p className="text-gray-700 mt-2">
        It can be defined as the ways and protocols to spread awareness
        regarding a business. It involves the usage of a collection of tools so
        as to use social media platforms for company sales. You can also engage
        followers and create smooth communication when you use a social media
        marketing strategy.
      </p>
      <p className="text-gray-700 mt-4">
        The importance of social media marketing strategy are:
      </p>
      <p className="text-gray-700 mt-4">1. Better branding of the company.</p>
      <p className="text-gray-700 mt-4">2. Good exposure to sales and leads</p>
      <p className="text-gray-700 mt-4">
        3. Increased approach towards website traffic.
      </p>
      <p className="text-gray-700 mt-4">4. Less marketing cost.</p>
      <p className="text-gray-700 mt-4">5. Improved SEO.</p>
      <p className="text-gray-700 mt-4">
        6. Improved customer interests and reviews.
      </p>
      <p className="text-gray-700 mt-4">7. Good start-up foundation.</p>
      <p className="text-gray-700 mt-4">
        Thus to have access to all these features and advantages, you should get
        in touch with a{" "}
        <a href="#" className="text-blue-600 font-semibold">
          social media marketing company{" "}
        </a>{" "}
        like Web Infomatrix to help your business grow accurately.
      </p>
      <h3 className="text-gray-800 text-xl font-bold text-start mt-10">
        Proposal: Social media strategy
      </h3>

      <p className="text-gray-800 mt-4">
        A social media strategy proposal is a document containing ideas that you
        present to your clients. It consists of the ways in which your{" "}
        <a href="#" className="text-blue-600 font-semibold">
          {" "}
          social media marketing agency{" "}
        </a>
        will make strategies to meet the goals of the clients. If you follow a
        unique set of strategies for each and every company then it will
        increase customer satisfaction and help the business grow.
      </p>

      <ul className="text-gray-800 mt-4">
        But creating a good proposal is not an easy process and you need to know
        certain tips to do it accurately. The tips are as follow:
        <li className="text-gray-800 mt-2">
          &#x2022; Include the goal of your company.
        </li>
        <li className="text-gray-800 mt-2">
          &#x2022; Include the challenges that the company is facing and the
          duration of the same should also be mentioned
        </li>
        <li className="text-gray-800 mt-2">
          &#x2022; Goals and challenges that the company has already overcome.
        </li>
        <li className="text-gray-800 mt-2">
          &#x2022; Explain the use of social media.
        </li>
        <li className="text-gray-800 mt-2">
          &#x2022; Mention social media goals.
        </li>
        <li className="text-gray-800 mt-2">&#x2022; Include the budget.</li>
        <li className="text-gray-800 mt-2">
          &#x2022; Mentions an approximate time period required to fulfill the
          goals.
        </li>
        <li className="text-gray-800 mt-2">
          &#x2022; Include past social media experiences.{" "}
        </li>
      </ul>
      <p className="text-gray-800 mt-4">
        It must now be clear why you need a social media marketing strategy.
        With a social media marketing proposal, you can win the trust of your
        client.
      </p>
      <hr className="border-gray-800 mt-6"/>
      <h3 className="text-gray-800 text-xl font-bold text-start mb-6">Conclusion</h3>
<div className="flex flex-col items-start mt-4">
  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      id="linkability-1"
      className="form-checkbox h-5 w-5 text-gray-600 focus:ring-blue-500"
    />
    <label htmlFor="linkability-1" className="ml-2 text-gray-700 text-sm">
      Increases your linkability
    </label>
  </div>

  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      id="linkability-1"
      className="form-checkbox h-5 w-5 text-gray-600 focus:ring-blue-500"
    />
    <label htmlFor="linkability-1" className="ml-2 text-gray-700 text-sm">  
Make tagging and book marketing easy and extremely beneficial
    </label>
  </div>
  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      id="linkability-1"
      className="form-checkbox h-5 w-5 text-gray-600 focus:ring-blue-500"
    />
    <label htmlFor="linkability-1" className="ml-2 text-gray-700 text-sm">  
Inbound links to endeavor success
    </label>
  </div>

  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      id="linkability-1"
      className="form-checkbox h-5 w-5 text-gray-600 focus:ring-blue-500"
    />
    <label htmlFor="linkability-1" className="ml-2 text-gray-700 text-sm">
    Submitting relevant content to different sites make sure that it travels distance and catch your target audience on a global level
    </label>
  </div>

  <div className="flex items-center">
    <input
      type="checkbox"
      id="linkability-2"
      className="form-checkbox h-5 w-5 text-gray-600 focus:ring-blue-500"
    />
    <label htmlFor="linkability-2" className="ml-2 text-gray-700 text-sm">    
Build ways that the fans and users of a particular brand or company are automatically engaged in promoting it and the success ratio is really high
    </label>
  </div>
</div>

<hr className="border-gray-800 mt-4"/>
<h1 className="text-gray-800 text-2xl font-bold mt-4 text-center mb-6">Social Media Marketing Strategy</h1>
<hr className="border-gray-800 mt-4"/>

<h3 className="text-gray-800 text-xl font-bold text-start mb-6">What is the role of social media in increasing brand awareness?</h3>
  <p className="text-gray-800 mt-2">&#x2022; <b> Commitment empowerment:</b> our <b> social media marketing company</b> ensures that your business has a marketing strategy where you can draw in customers at each phase of their excursions with your business. Through discussions, retargeting, etc, you can make customers engage with your brand on social media. </p>
  <p className="text-gray-800 mt-2">&#x2022; <b>Effective content:</b> our <b> social media marketing strategy</b> should include posting informative content regarding your business on social media. It will allow your customer to get a detailed idea of your product and services. As a result your client base will increase and make it easier for individuals to discover you.</p>
   <p className="text-gray-800 mt-2">&#x2022; <b>Client association: </b> you should build healthy client connections through social media marketing. As a result, your brand awareness will increase and boost deals for your business. Moreover, different supporters or guests can also get familiar with your business and it will help you build trust with your clients</p>
   <p className="text-gray-800 mt-4">Thus, you must understand that <b>social media marketing</b> definitely plays a big role in <b>increasing your brand awareness </b>in the digital age. But it is not an easy task to increase brand awareness using <b>social media marketing.</b> You will need to work with a social <b>media marketing company</b> like <b>Web Infomatrix</b> to ensure that you get effective results </p>

   <h3 className="text-gray-800 text-xl font-bold text-start mb-6 mt-6">Why choose us as your social media marketing agency?</h3>

   <p className="text-gray-800 mt-3">Web Infomatrix is a <b>digital marketing </b>company where many different services including social media marketing are provided. If you are starting a business start-up then you should most definitely get in touch with us for a proper social media marketing strategy. With that, you can make your business grow and reach a wide range of audiences</p>

   <p className="text-gray-800 mt-4">We have been providing <b>social media services</b> for many years now. Our company has <b>social media marketing experts </b>who guide your company to get the best services and enhance brand awareness. Social media has emerged as an integral part of ensuring that you can reach potential customers and build a trusted relationship with them.</p>

 <p className="text-gray-800 mt-4">Get in touch with us to get the <b>best social media marketing services in India.</b> Visit our website or call us to get further details.</p>

<h3 className="text-gray-800 text-xl font-bold text-start mb-6 mt-6">FAQ</h3>

<p className="text-gray-800 mt-2 font-semibold">Have Doubts? All Your SMO Questions Are Answered Here</p>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question2')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            What services does Webinfomatrix provide?
          </h3>
          {isOpen.question2 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question2 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">We are an award-winning Webinfomatrix  that has made notable strides in both organic and paid search markets. The specific services we provide are in our top navigation, comprised of six major areas: search engine optimization, pay per click, social media, reputation management, web development, and marketing automation. We help businesses find an audience online, reach that audience with a powerful message, and turn that engagement into a meaningful relationship for long-term benefit. Most businesses need a combined approach to digital marketing. To learn more about how we can help you grow your brand online, reach out to us. We can provide you with a thorough analysis of the services you’ll see the most value out of and the expectations you can have from a custom digital marketing campaign.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question1')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
          WHAT IS AN EDUCATIONAL INSTITUTION’S SOCIAL MEDIA MARKETING?
          </h3>
          {isOpen.question1 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question1 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">Educational institutions can use social media marketing in the same way that any other business may. It’s a way to reach out to existing and potential educational product or service consumers with customized information, referrals, and strong brand relationships.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question3')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
          WHY DO YOU NEED A MOBILE-FRIENDLY WEBSITE FOR YOUR EDUCATIONAL PRODUCT OR INSTITUTION?
          </h3>
          {isOpen.question3 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question3 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">Because most web information is accessible via mobile devices, anyone hoping to launch a new educational product or service cannot afford not to have a mobile-friendly website with an optimized landing page.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question4')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
          HOW MIGHT INTERNET REVIEWS BE USED TO PROMOTE EDUCATION?
          </h3>
          {isOpen.question4 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question4 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">Online reviews offer an excellent opportunity to discover and fix any flaws with the product or service early on, showcase your brand’s strengths and competitive advantages, strengthen relationships with existing consumers, and demonstrate to future customers how much you care.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question5')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
          HOW MAY VIDEO CONTENT BE USED TO SELL EDUCATIONAL SERVICES?
          </h3>
          {isOpen.question5 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question5 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">Pay attention to your audience; they’ll tell you what kind of video material to make and where to put it. Keep an eye on engagement data like the number of views, average view duration, audience retention, re-watches, subscription growth, peak live viewers, click-through rate, average completion rate, and other audience engagement KPIs using analytics tools like Google Analytics.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question6')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
          IS IT POSSIBLE TO MAKE MY SCHOOL’S MARKETING MORE COST-EFFECTIVE, AND IF SO, HOW?
          </h3>
          {isOpen.question6 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question6 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">For your school, there are a variety of low-cost options. You can use techniques like bringing referrals, SEO material, content marketing, e-mail marketing, press releases and news, and social media marketing to draw attention to your schools. It would be best if you made an effort to be seen as much as possible. It doesn’t matter if it’s online or offline. Participating in tradeshows and information fairs can also help you market your institution more successfully.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question7')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
          HOW CAN I BOOST THE NUMBER OF STUDENTS ENROLLED IN MY EDUCATIONAL INSTITUTION?
          </h3>
          {isOpen.question7 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question7 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">Every educational institution requires a unique marketing strategy. Before embarking on a marketing campaign, it is critical to understand the student’s mindset. You must remain at the student’s location and answer his career-related inquiries. You must also ensure that your content marketing provides answers to all of the students’ questions. This will enhance your institution’s engagement as well as enrolment.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question8')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
          HOW MIGHT A BRANDING AGENCY ASSIST MY ORGANIZATION IN IMPROVING ITS SEO?
          </h3>
          {isOpen.question8 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question8 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">To raise your brand’s online presence, you must improve your SEO. You should concentrate on the material you will present on your website and other online platforms. SEO aids in the growth of organic traffic to your website. As a result, your educational institution’s enrollment numbers rise. To boost your SERP, a brand marketing firm like SEO Tech Experts evaluates and focuses on all areas of SEO improvement.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question9')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
          DO YOU THINK MY INSTITUTION’S MARKETING TEAM IS MISSING SOMETHING? COULD YOU PROVIDE ME WITH SOME ADDITIONAL INFORMATION?
          </h3>
          {isOpen.question9 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question9 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">Your educational institution may have the best marketing team. However, you should make sure that your marketing team is always coming up with new marketing strategies. When necessary information is not provided, or content quality is not up to par, a gap can arise between institutions and students (or students’ parents). There has been some confusion. The marketing department must provide regular updates and marketing activities. Visit our website for additional professional assistance.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question10')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
          WHICH FORM OF CONTENT MARKETING AIDS IN THE GENERATION OF NEW LEADS FOR ME?
          </h3>
          {isOpen.question10 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question10 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-700">It’s fashionable to generate new leads through good content marketing. It will help if you improve the effectiveness and appeal of your material. It’s up to you to make it appealing. A brand marketing firm can assist you in improving the effectiveness of your content marketing to improve your SEO. This increases your website’s organic traffic. It will also help you in increasing brand engagement</p>
        </div>
      </div>
      <ContactForm/>
      <div>
      <Testimonial/>
      </div>
    </div>
  );
};
export default Social;
