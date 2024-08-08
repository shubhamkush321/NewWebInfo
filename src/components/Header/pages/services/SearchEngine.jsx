import React, { useState, useEffect } from "react";
import image1 from "../../../../assets/New folder/asset 1.jpeg";
import image2 from "../../../../assets/New folder/asset 2.jpeg";
import image3 from "../../../../assets/New folder/asset 3.jpeg";
import image4 from "../../../../assets/New folder/asset 4.jpeg";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import ContactForm from "../ContactForm";


const images = [image1, image2, image3];

const SearchEngine = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);


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
    <div>
      <img
        src={images[currentIndex]}
        alt="Slider"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="p-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="-mt-20 text-xl font-semibold text-gray-800">
              Guaranteed #1 SEO Service Provider
            </h1>
          </div>
          <hr className="my-8" />
          <div className="mt-8">
            <p className="text-lg text-gray-700">
              SEO is one of <b>the best digital marketing strategies</b> that
              can be implemented for driving customers to a business through
              online platforms. It is important to consult <b>SEO experts</b>{" "}
              for proper implementation of SEO techniques. Effective keyword
              research and high-quality content are definitely important for
              good ranking in search engines. SEO boosts your chances to a new
              level and ensures that you get good rankings organically.
            </p>
          </div>
          <div className="mt-8">
            <p className="text-lg text-gray-700">
              Our{" "}
              <a href="/seo-company" className="text-blue-600 font-semibold">
                SEO Company
              </a>{" "}
              uses some effective strategies that help in driving results to
              maximize your chances of getting a better ranking in search
              engines and boosts the flow of traffic to your website/webpage.
            </p>
          </div>
          <hr />
          <div className="mt-8 text-center">
            <h2 className="text-xl font-bold text-gray-800">
              Organic White Hat SEO Company
            </h2>
          </div>
          <div className="mt-8">
            <ul className="list-disc pl-8">
              <li className="text-lg text-gray-700">
                Proper internal linking is beneficial for your business as it
                directly affects the ranking. Most of the websites with higher
                rankings on search engines use this technique in their pages. If
                you link lesser-known pages to popular pages, it will help
                crawlers to easily reach them and index them faster.
              </li>
              <li className="text-lg text-gray-700">
                If you have high-performing pages, it is necessary to link them
                to pages that need more recognition. With our{" "}
                <b>affordable SEO services</b>, you can easily implement this
                technique for your web page.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 text-center">
              A Watch on the Best Pages of Your Competitors
            </h3>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white rounded-md shadow-md p-4">
              <h4 className="text-lg font-bold text-gray-700 mb-2">Services</h4>
              <ul className="list-disc pl-8">
                <li className="text-gray-700">Keyword Addition</li>
                <li className="text-gray-700">
                  Competitive Analysis of Your Website
                </li>
                <li className="text-gray-700">SEO-Friendly Websites</li>
                <li className="text-gray-700">Social Media Optimization</li>
                <li className="text-gray-700">
                  Blog, Directory, and Forum Submission
                </li>
                <li className="text-gray-700">
                  Press Release and Classified Ads
                </li>
                <li className="text-gray-700">Content Development</li>
              </ul>
            </div>
            <div className="bg-white rounded-md shadow-md p-4">
              <h4 className="text-lg font-bold text-gray-700 mb-2">Benefits</h4>
              <ul className="list-disc pl-8">
                <li className="text-gray-700">Increased Organic Traffic</li>
                <li className="text-gray-700">Improved Website Ranking</li>
                <li className="text-gray-700">Enhanced Brand Visibility</li>
                <li className="text-gray-700">Higher Conversion Rates</li>
                <li className="text-gray-700">Improved User Experience</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800">
              Best SEO Keywords
            </h2> <br />
            <p className="text-lg text-gray-700">
              You should use the <b>best keywords</b> that your competitors are
              ranking on and put it on your website/webpage. It will help you to
              improve your search engine ranking.
              <p>
                <br />
                First of all, you need to find a competitor ranking high on a
                search engine. Then you must compare your performance with their
                using some <b>SEO tools</b>. It can be a hectic process so it is
                better to get an{" "}
                <a href="#" className="text-blue-500 font-semibold">
                  SEO agency
                </a>
                to do the work for you.{" "}
              </p>
              <br />
              We help you out with the overall process and optimize your page to
              rank higher on any search engines. It will improve the traffic
              flow to your website/webpage and help your business grow.
            </p>
            <h2 className="font-bold text-gray-800 mt-4 text-xl">Faster Website</h2>
            <p className="text-lg text-gray-700">
              <br />
              We are living in a world where people have less time for
              everything in life. Having a slow-loading website will have a
              negative impact on the users. It will affect the performance of
              your page. So you need to use some proper SEO techniques to ensure
              that your webpage is faster.
              <br />
              <br />
              Some of the techniques of increasing the loading speed includes
              using bold keywords, avoiding custom fonts, etc. Our SEO agency
              has experts who take care of it all to ensure that your page is
              not slow-loading.
              <br />
              <br />
              Get in touch with our{" "}
              <a href="#" className="text-blue-600">
                {" "}
                digital marketing company
              </a>{" "}
              so that you get <b> affordable SEO services </b> for your
              business. It will help in driving in more users to your web page
              and improve the performance of your business. A better ranking on
              any search engine definitely has a positive impact on the users
              and they are attracted to visit your website. So use our{" "}
              <a href="#" className="text-blue-400">
                {" "}
                SEO company{" "}
              </a>
              to make your business stand out in the search engines.
            </p>
          </div>
          <br />
          <div>
            <h2 className="text-xl font-bold text-gray-800"> 
              Grow Your Revenue With Targeted Industry-Specific SEO
            </h2>
            <br />
            <p className="text-lg text-gray-700">
              Customers who are looking for a product or service will almost
              always go to Google first. Before making a final decision, they’ll
              visit several websites, compare pricing, and read reviews. <br />
              <br />
              That’s why it’s so important to optimize your SEO so people can
              locate your site first.
              <br />
              <br />
              We’ve worked with clients from all around the country to improve
              their internet presence and grow their businesses:
            </p>
            <br />
            <ul className="text-gray-700">
              <li className=" font-semibold">1. Agencies</li>
              <li className="font-semibold">
                2. Dental Offices for Contractors
              </li>
              <li className="font-semibold">
                3. <a href="/E-commerce text-blue-400">E-commerce </a>\ Hotels
              </li>
              <li className="font-semibold">
                4. HVAC Service Providers
              </li>
              <li className="font-semibold">
                5. Lawyers’ offices
              </li>
              <li className="font-semibold">
                6. SAAS, as well as practically every other niche imaginable!
              </li>
            </ul>
            <br />
            <p className="text-lg text-gray-700">
              As you can see, regardless of your sector, we offer the tools and
              knowledge to help you attract more consumers and build your SEO in
              ways you never imagined possible. <br />
              <br />
              Contact us today to set up an SEO consultation. Let’s discuss what
              we can do for your company.{" "}
            </p>
          </div>
          <br />

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Reach More Local Customers With Targeted SEO
            </h2><br />
            <p className="text-lg text-gray-700">
              While optimizing your website for national searches sounds
              wonderful, your biggest competitor is the company a few doors
              down. In order to succeed, you must set yourself apart from
              others. <br /> <br />
              We specialize in <b> local SEO services </b>to help you optimize
              your websites with customised keywords and content that your
              clients demand. <br /> <br />
              Our <b>SEO professionals</b> will get your business included in
              local directories, improve your Google business page, construct
              location-specific service pages, and do everything else that the
              search engines look for!
              <br /> <br />
              We’re an SEO firm that can help you stay one step ahead of the
              competition while also making your business more accessible to
              local customers.
            </p>
          </div>
          <br />

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Custom SEO Strategies to Increase Your Traffic
            </h2><br />
            <p className="text-lg text-gray-700">
              We think that no two firms, even those in the same industry, are
              the same. This is why we create unique, creative{" "}
              <b>digital marketing strategies</b> for each of our clients.
              <br />
              <br />
              The <b>SEO professionals</b> at Web Infomatrix will design a
              strategy that is specific to your company’s demands. We’ll work
              with you to highlight the areas you want to emphasize and improve
              the aspects of your strategy that are in need of improvement.
            </p>
          </div>

          <br />

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Your Digital Marketing Solution That Isn’t Hands-On
            </h2> <br />
            <p className="text-lg text-gray-700">
              Why should you put your digital marketing in the hands of The Web
              Infomatrix? We have the experience, competence, and, most
              importantly, a proven track record to back up our claims. <br />{" "}
              <br />
              You can choose which of our services you want to use, or you can
              enrol in our Web Infomatrix X managed SEO programme to put your
              digital marketing on autopilot. <br /> <br />
              Our managed SEO services are tailored to companies like yours, and
              we have the expertise to help you succeed!
            </p>
          </div>

          <br />

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              SEO Packages To Fit Your Budget
            </h2> <br />
            <p className="text-lg text-gray-700">
              All of our strategies are custom-made to meet the demands of
              certain businesses. Please contact us to discuss your
              requirements, and we’ll be pleased to provide you with a pricing
              estimate. <br /> <br />
              Our <b>SEO experts</b> are completely dedicated to providing
              quality service and measurable outcomes. As a result, we provide a
              100 percent satisfaction guarantee to all of our customers.
              <br />
              <br />
              Dissatisfied with some of our work? Send us your complaints and
              we’ll do everything we can to make things right!
            </p>
          </div>

          <br />

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Search Engine Optimization Can Help In The Growth Of The Company.
            </h2>{" "}
            <br />
            <h2 className="text-l font-bold text-gray-800">
              Professional Assistance Will Get You More Traffic, Clicks, And
              Conversions
            </h2>
            <br />
            <p className="text-lg text-gray-700">
              We assist you in analysing and optimizing your company’s website
              at a{" "}
              <a href="#" className="text-blue-400">
                {" "}
                web design firm
              </a>
              . But we don’t stop there; we make certain that your investment is
              represented in your Google ranking and monthly search reports. We
              provide a money-back guarantee.
            </p>
          </div>
          <br />
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              A Free Seo Audit From A Top Seo Firm
            </h2>
            <br />
            <p className="text-lg text-gray-700">
              Missing tags (page titles, headings, and meta descriptions),
              broken links, an XML sitemap, <b>mobile-friendliness,</b>{" "}
              structured data markup, speed score, crawl faults, and much more
              are all included in our free reports.
            </p>
            <br />
            <h2 className="text-xl text-black">Seo Agency</h2>
            <br />
            <p className="text-lg text-gray-700">
              What are the names of your local competitors? And what are others
              in your neighborhood searching for on Google? We provide detailed
              responses to these inquiries. Furthermore, our <b>SEO experts</b>{" "}
              will be at your side to help you understand the facts and SEO
              goals.
            </p>
            <br />
            <h2 className="text-xl text-black">SEO Audits</h2>
            <br />
            <p className="text-lg text-gray-700">
              We provide
              <a href="#" className="text-blue-500 font-semibold">
                free SEO audits
              </a>{" "}
              so you can see how your website is doing right now. We have years
              of experience as a leading SEO business increasing SEO rankings
              and bringing clients to the top of Google’s search results
            </p>
            <br />
            <h2 className="text-xl text-black">
              Keyword Research & Analysis
            </h2>{" "}
            <br />
            <p className="text-lg text-gray-700">
              We are an SEO business that is data-driven. As a result, we’ve
              honed our skills in using Google Analytics & Search Console, Bing
              Webmaster, keyword density research, and a variety of other tools
              and processes to find the most relevant terms in your area. In
              addition, our team members are adept in incorporating such
              information into our website architecture process.
            </p>
            <br />
            <h2 className="text-xl text-black">Mobile SEO</h2>
            <br />
            <p className="text-lg text-gray-700">
              When it comes to viewing websites, an increasing number of
              consumers rely only on their mobile devices. Don’t allow your
              company’s website to fall behind–all of our WordPress sites are
              fully responsive.
            </p>
            <br />
            <h2 className="text-xl text-black">Link Building</h2>
            <br />
            <p className="text-lg text-gray-700">
              The number of “backlinks” or “inbound links” your website has
              influences how search engines rank it. High-quality backlinks
              signal to search engines that you are a legitimate company worth
              trusting, and your{" "}
              <a href="#" className="text-blue-500 font-semibold">
                organic SEO{" "}
              </a>{" "}
              rating rises as a result.
            </p>
            <br />
            <h2 className="text-xl text-black">
              Traffic Analysis & Monthly SEO Reporting
            </h2>
            <br />
            <p className="text-lg text-gray-700">
              Are you curious about the status of your website? Our{" "}
              <a href="#" className="text-blue-500 font-semibold">
                SEO firm
              </a>{" "}
              can assist you in determining the traffic and marketing
              effectiveness of your website. Furthermore, we provide monthly SEO
              reports so that you can track your ranking and visitor growth.
            </p>
            <br />
            <h2 className="text-xl text-black">Conversion Optimization</h2>
            <br />
            <p className="text-lg text-gray-700">
              We ensure that your website visitors will interact with it,
              resulting in an increase in leads, clicks, subscribers, sales, and
              overall clients. We will offer the essential conversions for your
              business growth through our work designing and improving landing
              pages.
            </p>
            <br />
            <h2 className="text-xl text-black">Content Creation</h2>
            <br />
            <p className="text-lg text-gray-700">
              We can assist you in creating material that is both user-friendly
              and search engine-friendly. Article production and submission to
              top sites, blog creation and submission to top blogs, press
              release preparation and submission, and social bookmarking
              submission are just a few of the content development services we
              offer.
            </p>
          </div>
<br />
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              RANK HIGH IN GOOGLE WITH SEO-SEARCH ENGINE OPTIMIZATION
            </h2>
            <br />
            <p className="text-lg text-gray-700">
              A successful website requires SEO (search engine optimization). If
              you wish to boost the SEO of your website, this SEO article can
              help. It contains some of Google’s most essential recommendations
              for developers and designers who want to enhance how websites get
              found, indexed, and ranked.
              <br />
              <br />
              You may locate local clients that are looking for your services
              and products by using SEO and targeting. Search Engine
              Optimization (SEO) is a term that refers to how well a website
              performs. your website will rank better in search engine results
              for those keywords. We use cutting-edge technology to ensure
              favorable outcomes. <br />
              we use a number of different components and techniques.
            </p>
            <br />
          </div>

          <ul className="text-gray-700">
            <li className="font-bold">
              1.Search Engine Optimization Consultation
            </li>
            <li className="font-bold">2.Benchmarking for SEO</li>
            <li className="font-bold">3.Keyword Research for SEO</li>
            <li className="font-bold">
              4.On-site optimization and SEO implementation
            </li>
            <li className="font-bold">
              5.Off-Site Execution and SEO Implementation
            </li>
            <li className="font-bold">
              6. Ongoing Search Engine Optimization and Continuous Improvement
            </li>
            <li className="font-bold">7.SEO tracking and monitoring</li>
          </ul> <br />

          <div>
            <h2 className="text-xl font-bold text-black">
              SEO CONSULTATIONS
            </h2><br />
            <p className="text-lg text-gray-700">
              The initial stage in Search Engine Optimization is to assess a
              website and define a future plan
            </p>
<br />
            <h2 className="text-md font-bold text-black">
              #1 Examine the Existing Website
            </h2>
            <p className="text-lg text-gray-700">
              Every website has a domain name, which has a good or negative
              past. If your domain is newly new, it will have no previous
              history. The age of your domain, its trust and authority, the size
              of your website, and its historical content all have a role in how
              you presently rank in search and how tough it will be to increase
              your SEO rating in the future.
            </p>
<br />
            <h2 className="text-md font-bold text-black">
              #2 Examine Your Competitors
            </h2>
            <p className="text-lg text-gray-700">
              In search engine optimization, ranking does not happen in a
              vacuum. Ranking takes place in a competitive atmosphere, where
              you’re competing with other websites in your industry.
            </p>
<br />
            <h2 className="text-md font-bold text-black">
              #3 Take a look at the branding that goes along with it (Internet
              footprint)
            </h2><br />
            <p className="text-lg text-gray-700">
              On the internet, how well-known is your company’s branding (name,
              contact information)? Is your company’s name or website listed in
              every online directory? Is your business or website on every
              social media platform? Do other supporting websites, such as
              associations, trade groups, and partner websites, mention and link
              to your brand or website?
            </p>

            <br />
            <h2 className="text-xl font-bold text-black">
              SEO BENCHMARKING
            </h2>
            <p className="text-lg text-gray-700">
              To know where you are and where you have been, you must first
              understand where you are… <br /> <br /> Simply said, a benchmark
              is a starting point. We need to develop some benchmarks for where
              a website is right now. This encompasses both on-site and off-site
              optimization. Traffic, search engine ranking, site structure, and
              content are all factors.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-8">
      <img src={image4} className="w-screen p-4" />
      </div>
      {/* cards */}

       <div className="container mx-auto px-4">
        <hr className="border-black my-8"/>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        SEO Engagement Models
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-32 -mt-10">
        <div className="bg-white rounded-lg shadow-md p-4 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <FaEarthAfrica  className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO PLANS</h3>
          <p className="text-gray-700 flex justify-center">
          At Web Infomatrix, we concentrate on a number of factors when it comes to local SEO. When it comes to SEO
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <FaHandshake  className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO CONSULTING</h3>
          <p className="text-gray-700">
          At Web Infomatrix, we provide a wide range of SEO services to help your company rank higher in search results.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <IoIosSettings   className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO RANKING</h3>
          <p className="text-gray-700 flex justify-center">
          By focusing your SEO on certain keyword phrases that are relevant and targeted toward your small business's services or products.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <FaBagShopping  className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO TRAFFIC</h3>
          <p className="text-gray-700">
          When it comes to our websites, we all desire more traffic. The SEO services of Web Infomatrix can help your website rank higher
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <IoBookSharp  className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO ADVISORY</h3>
          <p className="text-gray-700 flex justify-center">
          We may start tracking development from month to month, quarter to quarter, or year to year after we know how the website is functioning from an analytical and statistical aspect.
          </p>
        </div>
      </div>
    </div>
    

      {/* cards */}
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Why Choose Web Infomatrix Local SEO Services ?
      </h2>
      <div className="grid grid-cols-1 gap-4 p-20">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            We deliver consistent results and ROI at an affordable price range.
          </h3>
          <p className="text-gray-600 text-base">
            Our team of experts is committed to providing you with the best possible results. We use proven strategies and cutting-edge
            technology to help you achieve your business goals.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Implement ethical measures to keep you away from any trouble in future.
          </h3>
          <p className="text-gray-600 text-base">
            We believe in ethical practices and will never do anything that could jeopardize your website or your online reputation. We
            are transparent and honest in our dealings with you.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            We believe that every client is different from another! No two clients and their needs are alike and that is why we endeavor
            customized packages.
          </h3>
          <p className="text-gray-600 text-base">
            We understand that every business is unique and has its own specific needs. We will work with you to develop a custom SEO
            strategy that is tailored to your business goals.
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 mt-10 text-gray-500">
        Looking forward for your alliance with us!
      </h2>
      <h2 className="text-gray-500 text-3xl font-bold text-center  mt-6 -mb-10">
        FAQ
      </h2>
     
      <div className="grid grid-cols-1 gap-4 p-16">
      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question1')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
            What sort of businesses do you work with?
          </h3>
          {isOpen.question1 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question1 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Webinfomatrix  works with businesses large and small. We connect each project with the right professionals who have ample experience working on companies at each scale and specialization. This ensures that the right people are working on each project. Whether you’re a small business looking to reach your local audience or a large, multinational brand looking to launch a new product in numerous markets, we have digital marketing experts who have the experience and passion required to make your marketing campaign a success.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question2')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
            What services does Webinfomatrix provide?
          </h3>
          {isOpen.question2 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question2 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">We are an award-winning Webinfomatrix  that has made notable strides in both organic and paid search markets. The specific services we provide are in our top navigation, comprised of six major areas: search engine optimization, pay per click, social media, reputation management, web development, and marketing automation. We help businesses find an audience online, reach that audience with a powerful message, and turn that engagement into a meaningful relationship for long-term benefit. Most businesses need a combined approach to digital marketing. To learn more about how we can help you grow your brand online, reach out to us. We can provide you with a thorough analysis of the services you’ll see the most value out of and the expectations you can have from a custom digital marketing campaign.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question3')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          What is your pricing model?
          </h3>
          {isOpen.question3 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question3 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Each project we work on is specific to the business we are working with. As a result, we do not use a standardized pricing model. Each campaign is tailored to the business we are working with based on what they are looking to achieve and how we can get them there. If you’re interested in getting a custom quote that will produce value and make sense to you in the long-term, please give us a call or fill out our contact form. One of our sales representatives will learn more about your business and provide you with your own custom quote.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question4')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          Do you work with other agencies?
          </h3>
          {isOpen.question4 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question4 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">We often help other agencies with projects that are either larger or more specialized than they are used to handling on their own. If you’re offering digital marketing services and have clients requiring solutions you’re not equipped to handle, please reach out to our business development team.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question5')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          What locations do you service and what are your hours of operation?
          </h3>
          {isOpen.question5 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question5 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Webinfomatrix  is headquartered in the United States of America, but has a presence in the United Kingdom, Australia, India, and other countries as seen on our “contact us” page. We have physical offices around the world and are interested in helping businesses reach both their local and international audiences.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question6')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          What competitive advantage does Webinfomatrix offer its clients?
          </h3>
          {isOpen.question6 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question6 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Most other marketing agencies only offer a fraction of what Webinfomatrix can give their clients. Webinfomatrix is a one-stop shop for SEO, PPC, social media marketing, reputation management, web development, and more, providing businesses with a single entity to cover all of their needs. Our internal structure enables our teams to work together to produce exceptional results for our clients, building a bridge between each of our services.</p>
        </div>
      </div>

<h3 className="text-2xl font-bold mb-2 text-gray-800 m-6 ">Search Engine Optimization</h3>


      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question7')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How is your SEO service unique to those offered by other agencies?
          </h3>
          {isOpen.question7 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question7 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">From the start, our SEO professionals will perform a deep analysis of your business to understand the market you’re competing in and the specific practices your competitors engage in online. We choose the keywords for your campaign, the structure of your website, and the channels we focus on for off-page optimization based on the results of this analysis. Our research-oriented method ensures that results are consistently achieved rather than taking a “one-size-fits-all” approach. You can expect your SEO campaign to be a long-term investment, often requiring 3–6 months before seeing a return. What sets us apart from the competition is the long-term results we achieve. Instead of getting your name ranked and then subsequently losing it, we work to establish your brand as an authority, encouraging search engines to consistently feature your pages at the top of the results.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question8')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How does Webinfomatrix charge for SEO services?
          </h3>
          {isOpen.question8 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question8 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Each campaign is different. Two companies of similar size in similar industries are still going to have vastly different approaches to achieve similar results. We strive to personalize each campaign to the unique objectives and challenges our clients face in getting their website ranked in the search results provided by the major search engines. We can provide your business with a custom quote that outlines the costs, the time commitment from Webinfomatrix, and when your brand will begin seeing the results of our hard work and dedication to your SEO campaign</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question9')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How do I know if I am the right fit for Webinfomatrix SEO services?
          </h3>
          {isOpen.question9 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question9 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">If you’re looking to increase your organic traffic and have a lasting impact from your most competitive keywords,  Webinfomatrix is right for you. Search engine optimization requires long-term commitment and effort to make it work and to make those results last. Some SEO companies opt to use short-term strategies to get a high placement for a quick fee, but in nearly all of these cases, the placements don’t last. As major search engines adjust their algorithms to combat link schemes, these strategies don’t create lasting results and end up creating more of a headache for clients. We focus on building for the long-term.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-2 text-gray-800 m-6 ">Pay Per Click Management</h3>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question10')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How is your PPC service unique to those offered by other agencies?
          </h3>
          {isOpen.question10 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question10 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">When we take on a pay-per-click project, we dedicate ourselves to the continued maintenance and adjustment of the campaign to get the most value. Our PPC experts are not fond of the idea of setting up a campaign and letting it do its own thing; we are constantly tracking and monitoring how the campaign is performing in both the short-term and the long-term. Each of our campaigns is rigorously evaluated to get the most value for every keyword, landing page, and ad placement to ensure that we are reaching the right audience with the right approach.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question11')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How does Webinfomatrix charge for PPC services?
          </h3>
          {isOpen.question11 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question11 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Each project has different requirements and goals, and as a result we don’t have a standardized pricing structure. We make the costs associated with each project understood upfront with no hidden fees or agendas. To get a customized quote for your pay-per-click campaign, please contact us directly. You’re never obligated until you’re ready to start your PPC campaign.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question12')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How do I know if I am the right fit for Webinfomatrix PPC services?
          </h3>
          {isOpen.question12 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question12 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Meaningful marketing takes time. We take on pay-per-click projects for businesses that are looking for long-term growth instead of a short-term fix to their marketing anxiety. Webinfomatrix is not a provider of wholesale marketing solutions. We are passionate about each project and work to continually improve every campaign in terms of performance.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-2 text-gray-800 m-6 ">Social Media</h3>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question13')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How is your social media service unique to those offered by other agencies?
          </h3>
          {isOpen.question13 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question13 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">When we take on a social media project for a client, we invest ourselves in their social presence. Each project is an opportunity to test the skills our professionals have been developing for years. We take the time to research each brand we represent to understand who they are, what sets them apart from their competition, and who their core audience is. We then identify the best methods of communicating with that audience through social media in order to drive the right type of engagement, leading to the highest possible sales conversions for their campaign.</p>
        </div>
      </div>


      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question14')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How does Webinfomatrix charge for social media services?
          </h3>
          {isOpen.question14 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question14 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Each project is a unique challenge and therefore requires an initial analysis to determine the right route to take. We provide a free quote for all potential projects to clearly define what it is that Digital Marketing Agency will be doing and at what cost. Since each project is different, we are unable to provide a standardized method for pricing. We’ll outline exactly what the campaign will cost and in what time period.</p>
        </div>
      </div>


      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question15')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How do I know if I am the right fit for Webinfomatrix social media services?
          </h3>
          {isOpen.question15 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question15 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">We work with businesses that want to achieve long-term success in social media rather than short-term campaigns meant to simply increase numbers. For social media to work, it requires dedication from both the brand name being represented and the team working to make social media work. We are dedicated to the long-term success of each social media campaign we tackle, and we want our clients to be as dedicated to taking advantage of those results. If you’re looking for a wholesale social media service or just want to inflate your presence on social media, Webinfomatrix  might not be the right fit for you. However, if you’re looking to make social media work for you, Webinfomatrix  is the right choice.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-2 text-gray-800 m-6 ">Reputation Management</h3>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question16')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How is your reputation management service unique to those offered by other agencies?
          </h3>
          {isOpen.question16 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question16 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Reputation and brand management have grown to be a major aspect of online marketing as search engines and social media give more authority to feedback, ratings, and reviews. Webinfomatrix considers reputation and brand management to be both an offensive and defensive service. We don’t stop with just social media, Yelp, and a few other sources. Webinfomatrix  is proactive in consistently widening our scope as different platforms become more influential.</p>
        </div>
      </div>


      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question17')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How does Webinfomatrix charge for reputation management services?
          </h3>
          {isOpen.question17 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question17 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Reputation management is generally billed on an hourly rate. It may be possible that unused hours are credited toward future work within a contract agreement.</p>
        </div>
      </div>


      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question18')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How do I know if I am the right fit for Webinfomatrix reputation management services?
          </h3>
          {isOpen.question18 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question18 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Reputation and brand management is specific to your business and may possibly include individuals within your company. Webinfomatrix will perform some background work and evaluate how our services may best help.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-2 text-gray-800 m-6">Web Design & Development</h3>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question19')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
            How are your web design and development services unique to those offered by other agencies?
          </h3>
          {isOpen.question19 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question19 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Your website is often your potential client’s first impression. We understand the importance of that first impression and guarantee the work that we do. Each website is built from the ground up based on your unique requirements and objectives. Before we take on a project, we want to understand the project in addition to what you want to achieve with that website. Our approach to building the website will be laid out with timelines and any requirements from you at the start of the campaign to make the design and/or development process as seamless as possible. We meet our deadlines and exceed expectations.</p>
        </div>
      </div>


      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question20')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How does Webinfomatrix charge for web design and development services?
          </h3>
          {isOpen.question20 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question20 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Website design and development are completely customized at Webinfomatrix. A detailed proposal including design, development milestones, and payment terms will be presented prior to any work being done</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question21')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How do I know if I am the right fit for Webinfomatrix web design and development services?
          </h3>
          {isOpen.question21 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question21 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">You’re a great fit if you’re looking to build something for the long-term. We’re not interested in wholesale design and development. Each website is built to your unique requirements and specifications to give you the right website from the start. If you’re looking for a unique solution to your design and development woes, we are the right fit.</p>
        </div>
      </div>

<h3 className="text-2xl font-bold mb-2 text-gray-800 m-6">Marketing Automation</h3>
      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question22')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How are your marketing automation services unique to those offered by other agencies?
          </h3>
          {isOpen.question22 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question22 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Each marketing automation campaign we build is a long-term solution rather than a quick trap for your leads. We build a campaign that is designed to entice your prospective clients with engaging marketing messages based on how they have interacted with your brand across a wide variety of media. The platform used and the approach taken are based on your goals and objectives. We build campaigns to give you the best fighting chance at converting every prospect into a paying customer.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question23')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How does Webinfomatrix charge for marketing automation services?
          </h3>
          {isOpen.question23 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question23 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">Marketing automations are customized services. A detailed proposal including design, development milestones, and payment terms will be presented prior to any work being done.</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
        <div onClick={() => toggleOpen('question24')} className="flex items-center justify-between">
          <h3 className="text-xl font-bold mb-2 text-gray-600">
          How do I know if I am the right fit for Webinfomatrix marketing automation services?
          </h3>
          {isOpen.question24 ? <IoMdRemove /> : <IoMdAdd />}
        </div>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isOpen.question24 ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="mt-4 text-gray-600">If you’re looking for a quick and easy solution, Webinfomatrix  will probably not be your best bet. If you’re looking for an engaging and exhaustive strategy to get the absolute best value out of your marketing dollar, Webinfomatrix  is ready to build a powerful campaign designed to give you every chance you need to convert a prospective buyer into a paying customer.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Forms */}
<ContactForm/>
    </div>
  
  );
};

export default SearchEngine;
