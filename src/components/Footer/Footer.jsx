import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/asset 0.png";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Social Media */}
          <div className="w-full md:w-1/4 mb-6">
            <img src={Logo} alt="Web Infomatrix" className="h-16 mb-4" />
            <p className="mb-2">Follow Us</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Office Address Delhi */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="font-bold mb-2">Office Address Delhi</h4>
            <p>B-68, 40 FT Road, Chanakya Place, Opposite C-1 Janakpuri, New Delhi -110059</p>
            <p>Phone: 9212306116, 8860646116</p>
            <p>Email: info@webinfomatrix.com</p>
          </div>

          {/* Office Address Hyderabad */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="font-bold mb-2">Office Address Hyderabad</h4>
            <p>301, Fortune Sapphire, Road No 3, Ram Reddy Colony, Old Bowenpally, Hyderabad, Telangana 500011</p>
            <p>Phone: 9212306116, 8860646116</p>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="font-bold mb-2">Contact</h4>
            <p><FontAwesomeIcon icon={faPhone} /> +91 9212306116, +91 8860646116</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@webinfomatrix.com</p>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="flex flex-wrap justify-between">
          {/* Our Services */}
          <div className="w-full md:w-1/5 mb-6">
            <h4 className="font-bold mb-2">Our Services</h4>
            <ul>
              <li>Website Development</li>
              <li>Website Designing</li>
              <li>Affiliate Marketing</li>
              <li>Content Marketing</li>
              <li>Email Marketing</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing (SMM)</li>
              <li>Pay Per Click (PPC) Marketing</li>
              <li>Online Reputation Management (ORM)</li>
            </ul>
          </div>

          {/* Our Global Presence */}
          <div className="w-full md:w-1/5 mb-6">
            <h4 className="font-bold mb-2">Our Global Presence</h4>
            <ul>
              <li>United States</li>
              <li>Australia</li>
              <li>India</li>
              <li>England</li>
              <li>Canada</li>
              <li>France</li>
              <li>Germany</li>
              <li>Russia</li>
              <li>Italy</li>
            </ul>
          </div>

          {/* Our Local Presence */}
          <div className="w-full md:w-1/5 mb-6">
            <h4 className="font-bold mb-2">Our Local Presence</h4>
            <ul>
              <li>Delhi NCR</li>
              <li>Gurgaon</li>
              <li>Mumbai</li>
              <li>Pune</li>
              <li>Chennai</li>
              <li>Bangalore</li>
              <li>Ludhiana</li>
              <li>Ahmedabad</li>
              <li>Hyderabad</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full md:w-1/5 mb-6">
            <h4 className="font-bold mb-2">Resources</h4>
            <ul>
              <li>Sitemap</li>
              <li>RSS Feed</li>
              <li>SEO Blog</li>
              <li>Top SEO Site Lists</li>
              <li>Free Website Analysis</li>
              <li>About Us</li>
              <li>What We Do</li>
              <li>Web Tools</li>
              <li>Whois Checker</li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full md:w-1/5 mb-6">
            <h4 className="font-bold mb-2">Support</h4>
            <ul>
              <li>Career</li>
              <li>Job Board</li>
              <li>Digital Marketing Training</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
