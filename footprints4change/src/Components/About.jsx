import React from "react";

const About = () => {
  const approach = [
    {
      title: "Investing in Youth",
      description: "We equip young people with leadership skills to drive social change.",
    },
    {
      title: "Inclusive Participation",
      description: "We remove structural barriers that limit youth engagement in governance.",
    },
    {
      title: "Grassroots Partnerships",
      description: "We collaborate with local organizations for sustainable community impact.",
    },
  ];

  const whatWeDo = [
    {
      title: "Leadership & Governance",
      description: "Engaging youth in governance and leadership roles.",
    },
    {
      title: "Peacebuilding",
      description: "Strengthening community-driven peace initiatives.",
    },
    {
      title: "Civic Engagement",
      description: "Advocating for nonviolent activism and systemic change.",
    },
  ];

  return (
    <div className="w-full bg-gray-100 text-gray-900 pt-[80px]">
      {/* Hero Section */}
      <section className="relative bg-[#2B256E] text-white text-center py-20 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Us</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Empowering young people to create change and build peaceful communities.
          </p>
        </div>
      </section>

      {/* Where We Work */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#1E293B] tracking-tight">Where We Work</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We work primarily in informal settlements, with our headquarters based in the heart of{" "}
          <strong>Mathare, Nairobi</strong>. We are committed to serving underserved and
          underprivileged communities through grassroots, youth-centered programming.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#1E293B] tracking-tight">Who We Are</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Footprints for Change (F4C) was founded in 2014 as a youth-led nonprofit organization
          committed to transforming communities. We empower young people with leadership skills
          and raise awareness about social injustices to create lasting change.
        </p>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#1E293B] text-center tracking-tight">Our Approach</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {approach.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center"
              >
                <h3 className="text-xl font-semibold text-[#1E293B]">{item.title}</h3>
                <p className="mt-3 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#1E293B] tracking-tight">What We Do</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whatWeDo.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-[#1E293B]">{item.title}</h3>
              <p className="mt-3 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
