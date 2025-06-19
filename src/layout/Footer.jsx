import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    const Media=[
    
            { label: "Facebook", icon: FaFacebook },
            { label: "Twitter", icon: FaTwitter },
            { label: "Instagram", icon: FaInstagram },
            { label: "YouTube", icon: FaYoutube },
       
    ]
    const Menu=[
        "Home", "POPI", "Opt In/Out", "Contact"
    ]
  return (
    <footer className="bg-[#AF1F37] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">SAVE WIZE</h2>
            <p>
              Your trusted insurance partner for comprehensive coverage at
              competitive rates.
            </p>
            {/* <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-black transition-colors"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white pb-2">
              Menu
            </h3>
            <ul className="space-y-3">
              {Menu.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-black transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white pb-2">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FaPhone className="mt-1 text-white" />
                <span>+27 51 140 0150</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="mt-1 text-white" />
                <span>info@savewise.co.za</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="mt-1 text-whtie" />
                <span>getquotes@savewise.co.za</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="mt-1 text-white" />
                <span>complaints@savewise.co.za</span>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 text-white" />
                <span>
                  Portswood Rd, Victoria & Alfred Waterfront, Cape Town, 8001
                </span>
              </li>
            </ul>
          </div>

          {/* Social Text Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white pb-2">
              Follow Us
            </h3>
            <div className="grid grid-cols-2 gap-4">
                { 
              Media.map(({ label, icon: Icon }, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center space-x-2 hover:text-black transition-colors"
                >
                  <Icon className="text-xl" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-6 border-t border-white text-center">
          <p>
            © {new Date().getFullYear()} SAVE WIZE (Pty) Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
