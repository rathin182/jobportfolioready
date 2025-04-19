import React from 'react';
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoIosGitMerge } from "react-icons/io";

const Skills = () => {

  const iconMap = {
    IoLogoJavascript: IoLogoJavascript,
    FaNodeJs: FaNodeJs,
    SiExpress: SiExpress,
    IoLogoReact: IoLogoReact,
    SiMongodb: SiMongodb,
    RiTailwindCssFill: RiTailwindCssFill,
    IoIosGitMerge: IoIosGitMerge,
  };

  const SkillsItems = [
    { id: "IoLogoJavascript", label: "JavaScript" },
    { id: "FaNodeJs", label: "Node.js" },
    { id: "SiExpress", label: "Express.js" },
    { id: "IoLogoReact", label: "React.js" },
    { id: "SiMongodb", label: "MongoDB" },
    { id: "RiTailwindCssFill", label: "Tailwind CSS" },
    { id: "IoIosGitMerge", label: "Git" },
  ];

  return (
    <div id='skills' className='w-full p-5'>
      {/* Use grid layout with 2 columns for small screens, 4 for tablet, and 7 for large screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {SkillsItems.map((item) => {
          const Icon = iconMap[item.id]; // Dynamically get the correct icon
          return (
            <div key={item.id} className="flex flex-col md:flex-row items-center gap-2">
              <div className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl">
                <Icon />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-center cursor-pointer">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
