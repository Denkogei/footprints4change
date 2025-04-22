import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Removed ChevronDown import
import logo from "../assets/footprints.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 h-20 flex items-center border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="text-[#2B256E] font-bold text-xl uppercase tracking-tight hover:text-[#88C641] transition-colors duration-300">
            Footprints for Change
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-[#2B256E] hover:text-[#88C641] font-medium text-lg transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88C641] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/initiatives" 
            className="text-[#2B256E] hover:text-[#88C641] font-medium text-lg transition-colors duration-200 relative group"
          >
            Initiatives
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88C641] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/about" 
            className="text-[#2B256E] hover:text-[#88C641] font-medium text-lg transition-colors duration-200 relative group"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88C641] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* Staff Link (Desktop) */}
          <Link 
            to="/staff" 
            className="text-[#2B256E] hover:text-[#88C641] font-medium text-lg transition-colors duration-200 relative group"
          >
            Staff
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88C641] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/get-involved" 
            className="text-[#2B256E] hover:text-[#88C641] font-medium text-lg transition-colors duration-200 relative group"
          >
            Get Involved
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88C641] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/contact" 
            className="text-[#2B256E] hover:text-[#88C641] font-medium text-lg transition-colors duration-200 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88C641] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/donate" 
            className="bg-[#88C641] hover:bg-[#2B256E] text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
            className="p-2 rounded-md text-[#2B256E] hover:text-[#88C641] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <Link 
            to="/" 
            className="text-xl font-bold text-[#2B256E]"
            onClick={() => setIsOpen(false)}
          >
            Footprints for Change
          </Link>
          <button 
            onClick={() => setIsOpen(false)} 
            aria-label="Close menu"
            className="p-2 rounded-md text-[#2B256E] hover:text-[#88C641] transition-colors"
          >
            <X size={28} />
          </button>
        </div>
        
        <div className="flex flex-col space-y-1 p-4">
          <Link 
            to="/" 
            className="text-[#2B256E] hover:bg-gray-50 px-4 py-3 rounded-lg text-lg font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            to="/initiatives" 
            className="text-[#2B256E] hover:bg-gray-50 px-4 py-3 rounded-lg text-lg font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Initiatives
          </Link>
          
          <Link 
            to="/about" 
            className="text-[#2B256E] hover:bg-gray-50 px-4 py-3 rounded-lg text-lg font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          
          {/* Staff Link in Mobile */}
          <Link 
            to="/staff" 
            className="text-[#2B256E] hover:bg-gray-50 px-4 py-3 rounded-lg text-lg font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Staff
          </Link>
          
          <Link 
            to="/get-involved" 
            className="text-[#2B256E] hover:bg-gray-50 px-4 py-3 rounded-lg text-lg font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get Involved
          </Link>
          
          <Link 
            to="/contact" 
            className="text-[#2B256E] hover:bg-gray-50 px-4 py-3 rounded-lg text-lg font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          
          <Link
            to="/donate"
            className="bg-[#88C641] hover:bg-[#2B256E] text-white font-medium px-4 py-3 rounded-lg text-center mt-4 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
