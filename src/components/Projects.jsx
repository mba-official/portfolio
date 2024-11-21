import React from "react";

const Projects = () => {
  return (
    <>
      <div className="h-full py-20 flex items-center justify-center p-1 lg:py-12 overflow-hidden text-white">
        <div className="max-w-6xl w-full flex flex-col items-center justify-center">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold text-purple-400 mb-4">
              My Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-wrap gap-12 px-4 justify-center lg:px-0">
            {/* Project 1 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-pointer bg-white/50 rounded-md shadow-lg w-48">
              <img
                src="https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png"
                alt="Project 4"
                className="w-full h-40 rounded-md object-cover"
              />
              <h3 className="mt-0.5 text-lg font-bold text-black">Project 1</h3>
            </div>
            {/* Project 2 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-pointer bg-white/50 rounded-md shadow-lg w-48">
              <img
                src="https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png"
                alt="Project 4"
                className="w-full h-40 rounded-md object-cover"
              />
              <h3 className="mt-0.5 text-lg font-bold text-black">Project 2</h3>
            </div>
            {/* Project 3 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-pointer bg-white/50 rounded-md shadow-lg w-48">
              <img
                src="https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png"
                alt="Project 4"
                className="w-full h-40 rounded-md object-cover"
              />
              <h3 className="mt-0.5 text-lg font-bold text-black">Project 3</h3>
            </div>
            {/* Project 4 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-pointer bg-white/50 rounded-md shadow-lg w-48">
              <img
                src="https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png"
                alt="Project 4"
                className="w-full h-40 rounded-md object-cover"
              />
              <h3 className="mt-0.5 text-lg font-bold text-black">Project 4</h3>
            </div>
            {/* Project 5 */}
            <div className="flex flex-col items-center hover:scale-110 transition-all duration-300 hover:cursor-pointer bg-white/50 rounded-md shadow-lg w-48">
              <img
                src="https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png"
                alt="Project 4"
                className="w-full h-40 rounded-md object-cover"
              />
              <h3 className="mt-0.5 text-lg font-bold text-black ">Project 5</h3>
            </div>
          </div>
            <a href="£" className='hover:bg-purple-500 text-white mt-12 bg-gray-900/50 font-bold hover:-translate-x-1 duration-500 border-white border-2 px-6 py-2 rounded-md'>View More</a>
        </div>
      </div>
    </>
  );
};

export default Projects;
