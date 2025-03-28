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
    <div className="w-full overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-[50vh]">
        <Slider {...settings} className="w-full h-full">
          {images.map((image, index) => (
            <div key={index} className="w-full h-[50vh]">
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
          <h1 className="text-xl md:text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Welcome to Footprints for Change
          </h1>
          <p className="mt-3 text-sm md:text-base font-light text-white max-w-2xl leading-relaxed">
            Changing Generations, One Heart, One Mind at a Time
          </p>
          <Link to="/contact">
            <button className="mt-4 bg-[#88C641] text-white px-5 py-2 text-sm md:text-base rounded-full shadow-lg hover:bg-[#2B256E] transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 px-6 md:px-16 max-w-5xl mx-auto">
        {/* Welcome Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#2B256E]">
            Welcome to Footprints for Change
          </h2>
          <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            A youth-led organization committed to empowering young people as peace and change agents. 
            Together, we build peaceful and sustainable societies by equipping young generations to 
            take charge of their future.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#2B256E]">Mission Statement</h3>
            <p className="mt-2 text-gray-700 text-md leading-relaxed">
              "To provide platforms and programs to awaken potential and strengthen 
              capacity for peacebuilding and sustainable development."
            </p>
          </div>
          <div className="bg-[#F3F4F6] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#2B256E]">Vision Statement</h3>
            <p className="mt-2 text-gray-700 text-md leading-relaxed">
              "Building authentic and accountable grassroots youth-led engagement."
            </p>
          </div>
        </div>

        {/* Key Pillars */}
        <div className="mt-12">
          <h3 className="text-2xl font-extrabold text-[#2B256E] text-center">
            Our Key Pillars
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-[#E5E7EB] rounded-lg shadow-md text-center">
              <h4 className="text-lg font-semibold text-[#2B256E]">Leadership & Governance</h4>
              <p className="mt-2 text-gray-700 text-md leading-relaxed">
                Equipping young people with leadership skills for responsible civic engagement.
              </p>
            </div>
            <div className="p-6 bg-[#E5E7EB] rounded-lg shadow-md text-center">
              <h4 className="text-lg font-semibold text-[#2B256E]">Youth Engagement</h4>
              <p className="mt-2 text-gray-700 text-md leading-relaxed">
                Providing mentorship platforms to reshape youth mindsets and attitudes.
              </p>
            </div>
            <div className="p-6 bg-[#E5E7EB] rounded-lg shadow-md text-center">
              <h4 className="text-lg font-semibold text-[#2B256E]">Peacebuilding</h4>
              <p className="mt-2 text-gray-700 text-md leading-relaxed">
                Advocating for a culture of peace through community-led initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Donors Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-extrabold text-[#2B256E]">Donors We’ve Worked With</h3>
          <div className="mt-6 grid gap-6 grid-cols-2 md:grid-cols-4 items-center">
            {donors.map((donor, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={donor.logo} alt={donor.name} className="w-32 h-32 object-contain" />
                <p className="mt-2 text-gray-700 text-sm font-medium">{donor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
