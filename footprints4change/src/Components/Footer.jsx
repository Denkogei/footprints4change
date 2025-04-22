import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2B256E] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-sm leading-6">
              Footprints for Change (F4C) is dedicated to empowering young people to be leaders and peacebuilders.
            </p>
          </div>

          {/* Center Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
            <p className="text-sm">
              📍 <span className="font-semibold">Physical Address:</span> PVM3+PR7 Kwa Jose, Nairobi
            </p>
            <p className="text-sm">📧 info@footprints4change.org</p>
            <p className="text-sm">📞 +254 700 767 655</p>
          </div>

          {/* Right Section - Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/footprints4c/" className="text-white text-xl hover:text-gray-300" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://x.com/footprints4c" className="text-white text-xl hover:text-gray-300" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/footprints4c/" className="text-white text-xl hover:text-gray-300" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@footprints4c" className="text-white text-xl hover:text-gray-300" target="_blank">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

       {/* Bottom Section */}
        <div className="text-center text-sm mt-10 border-t border-gray-500 pt-4">
          <p>
            Copyright © {new Date().getFullYear()} Footprints for Change. All rights reserved. 
            <span className="ml-2">
              Made with <span className="text-red-500">❤️</span> by 
              <a 
                href="https://www.linkedin.com/in/dennis-kemboi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white font-medium ml-1">
                Dennis Kemboi
              </a>
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
