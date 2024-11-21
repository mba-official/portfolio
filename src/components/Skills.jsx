import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaBootstrap } from "react-icons/fa";
import { DiMongodb, } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";



const Skills = () => {
  return (
    <>
      <div className="h-full py-20 flex items-center justify-center p-1 lg:py-12 overflow-hidden text-white">
        <div className="max-w-6xl w-full flex flex-col items-center justify-center">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold text-purple-400 mb-4">
            Skills & Abilities 
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-12 px-4 justify-center lg:px-0">
            {/* Skill 1 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-cell">
              <FaHtml5 className="text-8xl text-orange-600 bg-white rounded-md p-2" />
              <h3 className="mt-4 text-lg font-semibold">HTML5</h3>
            </div>

            {/* Skill 2 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-cell">
              <FaCss3Alt className="text-8xl text-blue-600 bg-white rounded-md p-2" />
              <h3 className="mt-4 text-lg font-semibold">CSS3</h3>
            </div>

            {/* Skill 3 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-cell">
              <FaJsSquare className="text-8xl text-yellow-600 bg-white rounded-md p-2" />
              <h3 className="mt-4 text-lg font-semibold">JavaScript</h3>
            </div>

            {/* Skill 4 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-cell">
              <FaReact className="text-8xl text-blue-600 bg-white rounded-md p-2" />
              <h3 className="mt-4 text-lg font-semibold">React</h3>
            </div>

            {/* Skill 5 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-cell">
              <FaNodeJs className="text-8xl text-green-600 bg-white rounded-md p-2" />
              <h3 className="mt-4 text-lg font-semibold">Node.js</h3>
            </div>

            {/* Skill 6 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-cell">
              <DiMongodb className="text-8xl text-green-600 bg-white rounded-md p-2" />
              <h3 className="mt-4 text-lg font-semibold">MongoDB</h3>
            </div>
            {/* Skill 6 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-cell">
              <FaBootstrap className="text-8xl text-purple-600 bg-white rounded-md p-2" />
              <h3 className="mt-4 text-lg font-semibold">Bootstrap</h3>
            </div>
            {/* Skill 6 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-cell">
              <TbBrandTailwind className="text-8xl text-blue-600 bg-white rounded-md p-2" />
              <h3 className="mt-4 text-lg font-semibold">TailwindCSS</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
