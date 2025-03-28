import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/footprints.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [membersDropdown, setMembersDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-auto sm:h-20" />
          <span className="text-[#2B256E] font-bold text-lg sm:text-xl uppercase tracking-wide hover:text-[#88C641] transition">
            Footprints for Change
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-[#2B256E] hover:text-[#88C641]">Home</Link>
          <Link to="/initiatives" className="text-[#2B256E] hover:text-[#88C641]">Initiatives</Link>
          <Link to="/about" className="text-[#2B256E] hover:text-[#88C641]">About Us</Link>

          {/* Members Dropdown (Desktop) */}
          <div className="relative group">
            <button className="flex items-center text-[#2B256E] hover:text-[#88C641]">
              Our Team <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/members/directors" className="block px-4 py-2 text-sm text-[#2B256E] hover:bg-gray-100">Directors</Link>
              <Link to="/members/staff" className="block px-4 py-2 text-sm text-[#2B256E] hover:bg-gray-100">Staff</Link>
            </div>
          </div>
          <Link to="/get-involved" className="text-[#2B256E] hover:text-[#88C641]">Get Involved</Link>
          <Link to="/contact" className="text-[#2B256E] hover:text-[#88C641]">Contact Us</Link>
          <button className="bg-[#88C641] text-white px-4 py-2 rounded-md hover:bg-[#2B256E] transition">
            Donate
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-white z-10 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="text-lg font-bold text-[#2B256E]">
            Footprints for Change
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Link to="/" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>About Us</Link>
          
          {/* Members Dropdown in Mobile */}
          <div>
            <button
              onClick={() => setMembersDropdown(!membersDropdown)}
              className="flex items-center justify-between w-full text-left text-[#2B256E] hover:text-[#88C641] focus:outline-none"
            >
              Our Team <ChevronDown size={16} className={`${membersDropdown ? "rotate-180" : ""} ml-1 transition-transform`} />
            </button>
            {membersDropdown && (
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/members/directors" className="block text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Directors</Link>
                <Link to="/members/staff" className="block text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Staff</Link>
              </div>
            )}
          </div>
          <Link to="/get-involved" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Get Involved</Link>
          <Link to="/contact" className="text-[#2B256E] hover:text-[#88C641]" onClick={() => setIsOpen(false)}>Contact Us</Link>
          
          <button
            className="bg-[#88C641] text-white px-4 py-2 rounded-md hover:bg-[#2B256E] transition"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
