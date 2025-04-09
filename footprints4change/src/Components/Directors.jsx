import React, { useState, useEffect } from "react";

import kanini from '../assets/kanini.jpeg';
import cath from '../assets/cath.png';
import JAVAN from '../assets/JAVAN.jpg';
import Jonah from '../assets/Jonah.png';

const staffData = [
  {
    name: "Joanne Kanini",
    position: "Executive Director",
    phone: "+254 700 767 655",
    email: "joannekanini@gmail.com",
    address: "Nairobi, Kenya",
    image: kanini,
    profile: "Joanne Kanini is a dynamic leader, mediator, and youth empowerment advocate dedicated to fostering peace and social transformation. As the Executive Director of Footprints for Change (F4C), she brings extensive experience in conflict resolution, civic engagement, and grassroots leadership development. With a deep passion for equipping young people with the skills and confidence to become change agents, Joanne has spearheaded impactful programs that promote peacebuilding, governance, and sustainable community development. Her expertise in experiential learning, mentorship, and advocacy has positioned F4C as a driving force for youth-led transformation across Africa."
  },
  {
    name: "Catherine Omondi",
    position: "Program Director",
    phone: "+254 703 296 098",
    email: "omondicate254@gmail.com",
    address: "Mombasa, Kenya",
    image: cath,
    profile: "Catherine is a dedicated community mobilizer and passionate advocate for youth empowerment. As a key figure at Footprints for Change, She plays an instrumental role in initiatives aimed at uplifting young people, particularly adolescent girls and young mum's Her commitment to mentorship and personal development is most evident through her leadership in the Glow as You Grow program. This transformative initiative, designed for girls aged 9 to 17 and for young mothers from age 14 to 22, she focuses on building self-confidence, leadership skills, and life skills. Through interactive workshops on personal growth, menstrual hygiene, and conflict resolution, Catherine empowers young girls to navigate challenges with resilience and purpose.  With years of experience in community outreach, Catherine is known for her empathetic approach, strong communication skills, and unwavering dedication to fostering safe, supportive spaces for girls to thrive. She believes that by equipping young people with the right tools, they can become confident, impactful leaders in their communities.  Catherine’s leadership and vision continue to inspire and shape the next generation of empowered young women."
  },
  {
    name: "Javan Oliech",
    position: "Program Lead",
    phone: "+254 746 018 500",
    email: "oj@footprints4change.org",
    address: "Nairobi, Kenya",
    image: JAVAN,
    profile: "Javan Oliech is a dedicated changemaker committed to youth empowerment, governance, and social transformation. As the Program Lead at Footprints4Change, he drives community-led initiatives that foster nonviolent civic engagement and systemic change. He has extensive experience in project management and coordination, including designing, planning, and implementing impactful programs. Passionate about amplifying youth voices, Javan has led transformative projects, from governance training to grassroots leadership development, equipping young people with the skills to influence change. Committed to continuous social transformation and community development, he champions inclusive, contextual, and innovative youth engagement, ensuring young p    eople are at the forefront of leadership and decision-making. His work bridges the gap between policy and community action, creating lasting impact."
  },
  {
    name: "Jonah Mwakima",
    position: "Program Lead",
    phone: "+254 702 762 214",
    email: "KongoiJonah@gmail.com",
    address: "Nairobi, Kenya",
    image: Jonah,
    profile: "Jonah Mwakima is a dedicated youth advocate and community leader with a deep passion for empowering young people. As the Program Lead at Footprints for Change, he spearheads initiatives that equip youth with the knowledge and skills needed to drive meaningful change. His vision is to see a dignified and equitable community, where young people are informed, engaged, and empowered to lead. Jonah leads Changing Generations, an online show that provides authentic, objective, and conflict-sensitive information on politics, youth development, and youth leadership. Designed for young people aged 16–35 years, the program fosters critical discussions, encourages civic engagement, and nurtures the next generation of changemakers. Committed to youth empowerment, Jonah continues to create impactful programs that inspire young leaders to shape a better future."
  }
];

function StaffCard({ staff }) {
  const [expanded, setExpanded] = useState(false);
  const [imgSrc, setImgSrc] = useState(staff.image);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = staff.image;
    img.onload = () => setImgLoaded(true);
    img.onerror = () => {
      setImgSrc('/default-avatar.png');
      setImgLoaded(true);
    };
  }, [staff.image]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl h-full flex flex-col">
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="relative w-32 h-32 mb-4">
            {imgLoaded ? (
              <img
                src={imgSrc}
                alt={staff.name}
                className="w-full h-full rounded-full object-cover border-4 border-[#2B256E]"
                style={{ objectPosition: 'center top' }}
              />
            ) : (
              <div className="w-full h-full rounded-full border-4 border-[#2B256E] bg-gray-100 animate-pulse"></div>
            )}
          </div>
          <h2 className="text-xl font-bold text-[#2B256E]">{staff.name}</h2>
          <p className="text-sm text-gray-600 mt-1 font-semibold">{staff.position}</p>
        </div>

        <div className="space-y-2 text-gray-700 text-sm mb-4">
          <p className="flex items-center">
            <span className="mr-2">📞</span>
            <span className="font-medium">{staff.phone}</span>
          </p>
          <p className="flex items-center">
            <span className="mr-2">📧</span>
            <a 
              href={`mailto:${staff.email}`} 
              className="text-blue-600 hover:underline break-all font-medium text-sm"
            >
              {staff.email}
            </a>
          </p>
          <p className="flex items-center">
            <span className="mr-2">📍</span>
            <span className="font-medium">{staff.address}</span>
          </p>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-auto">
          <h3 className="font-bold text-[#2B256E] text-md uppercase mb-2">Profile</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {expanded ? staff.profile : `${staff.profile.substring(0, 120)}...`}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#2B256E] font-semibold mt-2 hover:underline focus:outline-none text-sm"
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Staff() {
  return (
    <div className="bg-gray-50 py-12 pt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2B256E] mb-3">
            Our Staff
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The passionate individuals driving our mission forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staffData.map((staff, index) => (
            <StaffCard key={`staff-${index}`} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Staff;