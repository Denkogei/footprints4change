import React from "react";

const initiatives = [
  {
    title: "Kiota",
    goal: "Equip young leaders for community engagement.",
    activities: "Equip and empower the younger generation to engage in their communities as agents of peace and change, developing innovative solutions to the challenges they face. Impact: Reached over 2,000 youth.",
    impact: "Engaged over ?? youth in leadership development.",
  },
  {
    title: "Change Leaders",
    goal: "Empower youth to be civic leaders and agents of social transformation.",
    activities: "Empower youth to be civic leaders and agents of social transformation and peacebuilding within their communities.",
    impact: "Strengthened youth voices in governance processes.",
  },
  {
    title: "Urban Legends 254",
    goal: "Use sports to nurture cultures of peace and unity.",
    activities: "Promote cohesion and unity in Kenya through sports, nurturing cultures of peace and understanding among youth.",
    impact: "Enhanced social cohesion among diverse communities.",
  },
  {
    title: "Elimisha Vizazi",
    goal: "Sensitize communities on peace through youth-led events.",
    activities: "Sensitize communities on the importance of cultivating cultures of peace through inclusive, youth-led events.",
    impact: "Increased public discourse on peacebuilding.",
  },
  {
    title: "Changing Generations",
    goal: "Reinforce positive narratives for civic engagement and leadership.",
    activities: "Nurture an informed, accountable youth population for constructive and non-violent civic engagement, leadership, and peacebuilding by reinforcing positive narratives.",
    impact: "Promoted constructive and nonviolent engagement.",
  },
];

const Initiatives = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen pt-24 px-6 md:px-12 lg:px-24 text-gray-900" style={{ marginTop: "15px" }}>
      {/* Hero Section */}
      <section className="w-full bg-[#2B256E] text-white text-center py-16 rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Programs & Initiatives</h1>
        <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto">
          Empowering youth through leadership, peacebuilding, and advocacy.
        </p>
      </section>

      {/* Initiatives Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#2B256E] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-gray-800">{initiative.title}</h2>
            <p className="mt-3 text-gray-600"><strong>Goal:</strong> {initiative.goal}</p>
            <p className="mt-2 text-gray-600"><strong>Activities:</strong> {initiative.activities}</p>
            <p className="mt-2 text-gray-600"><strong>Impact:</strong> {initiative.impact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
