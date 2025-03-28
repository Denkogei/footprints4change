import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-900 pt-[80px]">
      {/* Hero Section */}
      <section className="relative bg-[#1E293B] text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto">
          Empowering young people to create change and build peaceful communities.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-[#1E293B]">Who We Are</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Footprints for Change (F4C) was founded in 2014 as a youth-led nonprofit organization 
          committed to transforming communities. We empower young people with leadership skills 
          and raise awareness about social injustices to create lasting change.
        </p>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#1E293B] text-center">Our Approach</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Investing in Youth",
                description: "We equip young people with leadership skills to drive social change."
              },
              {
                title: "Inclusive Participation",
                description: "We remove structural barriers that limit youth engagement in governance."
              },
              {
                title: "Grassroots Partnerships",
                description: "We collaborate with local organizations for sustainable community impact."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 shadow-md rounded-lg text-center">
                <h3 className="text-xl font-semibold text-[#1E293B]">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-[#1E293B]">What We Do</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Leadership & Governance",
              description: "Engaging youth in governance and leadership roles."
            },
            {
              title: "Peacebuilding",
              description: "Strengthening community-driven peace initiatives."
            },
            {
              title: "Civic Engagement",
              description: "Advocating for nonviolent activism and systemic change."
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-[#1E293B]">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
