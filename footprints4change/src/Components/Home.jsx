import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images
import img1 from "../assets/a.jpeg";
import img2 from "../assets/b.jpeg";
import img3 from "../assets/c.jpeg";
import img4 from "../assets/d.jpeg";
import img5 from "../assets/e.jpeg";
import afsc from "../assets/american.png";
import lpi from "../assets/life.jpg";
import gric from "../assets/grassroots.png";
import crvpf from "../assets/children.jpeg";
import logo from "/public/footprints.jpeg";

const Home = () => {
  const images = [img1, img2, img3, img4, img5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const donors = [
    { name: "American Friends Service Committee (AFSC)", logo: afsc },
    { name: "Life and Peace Institute (LPI)", logo: lpi },
    { name: "Grassroots Nest for Innovation and Change (GRIC)", logo: gric },
    { name: "Children Rights and Violence Prevention Fund (CRVPF)", logo: crvpf },
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-50">
     
      

      {/* Hero Section with Image Slider */}
      <div className="relative w-full h-[60vh]">
        <Slider {...settings} className="w-full h-full">
          {images.map((image, index) => (
            <div key={index} className="w-full h-[60vh]">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-40">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
          Footprints for Change
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light text-white max-w-2xl leading-relaxed">
          Changing Generations, one heart one mind at a time
          </p>
          <Link to="/contact">
            <button className="mt-8 bg-[#88C641] text-white px-8 py-3 text-lg rounded-full shadow-lg hover:bg-[#2B256E] transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Welcome Section with Purple Background */}
      <div className="bg-[#2B256E] py-16 px-6 md:px-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Footprints for Change</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            A youth-led organization committed to empowering young people as peace and change agents. 
            Together, we build peaceful and sustainable societies by equipping young generations to 
            take charge of their future.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-[#88C641] p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2B256E]">Mission Statement</h3>
            </div>
            <p className="mt-2 text-gray-700 text-md leading-relaxed">
              "To provide platforms and programs to awaken potential and strengthen 
              capacity for peacebuilding and sustainable development."
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-[#2B256E] p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2B256E]">Vision Statement</h3>
            </div>
            <p className="mt-2 text-gray-700 text-md leading-relaxed">
              "Building authentic and accountable grassroots youth-led engagement."
            </p>
          </div>
        </div>

        {/* Key Pillars */}
        <div className="mt-20">
          <h3 className="text-3xl font-extrabold text-[#2B256E] text-center">
            Our Key Pillars
          </h3>
          <div className="w-24 h-1 bg-[#88C641] mx-auto mt-4 mb-12"></div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-[#2B256E] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#2B256E]">Leadership & Governance</h4>
              <p className="mt-4 text-gray-700 text-md leading-relaxed">
                Equipping young people with leadership skills for responsible civic engagement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-[#88C641] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#2B256E]">Youth Engagement</h4>
              <p className="mt-4 text-gray-700 text-md leading-relaxed">
                Providing mentorship platforms to reshape youth mindsets and attitudes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-[#2B256E] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-[#2B256E]">Peacebuilding</h4>
              <p className="mt-4 text-gray-700 text-md leading-relaxed">
                Advocating for a culture of peace through community-led initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Donors Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-extrabold text-[#2B256E]">Our Partners & Donors</h3>
          <div className="w-24 h-1 bg-[#88C641] mx-auto mt-4 mb-12"></div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4 items-center">
            {donors.map((donor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <img src={donor.logo} alt={donor.name} className="w-full h-24 object-contain" />
                <p className="mt-4 text-gray-700 text-sm font-medium">{donor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;