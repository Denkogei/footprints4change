import React from "react";
import { Link } from 'react-router-dom';


const GetInvolved = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center pt-36">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0E3048] mb-8">
          Get Involved
        </h2>

        {/* Volunteer Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-8 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-[#2B256E] mb-4">
            Volunteer
          </h3>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Become a mentor, facilitator, or peace ambassador.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#88C641] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#2B256E] transition duration-300 shadow-md hover:shadow-lg"
          >
            Apply Now
          </Link>
        </div>

        {/* Partnership Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-[#2B256E] mb-4">
            Partner With Us
          </h3>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Collaborate with us to support youth-led initiatives.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#88C641] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#2B256E] transition duration-300 shadow-md hover:shadow-lg"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
};
export default GetInvolved;
