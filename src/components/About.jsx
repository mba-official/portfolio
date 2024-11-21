import React from "react";
import ProfilePic from '../assets/picc.jpeg'

const About = () => {
  return (
    <>
      <div className="h-full py-20 flex items-center justify-center p-1 lg:py-20 overflow-hidden text-white ">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-around lg:items-start ">
          <img src={ProfilePic} alt="" className='h-72 rounded-lg transform scale-x-[-1] shadow-purple-500/50 hover:cursor-cell hover:shadow-xl hover:shadow-purple-400/50 transition-all duration-500' />
          {/* Right Section: Content */}
          <div className="lg:w-2/3 w-full p-6 lg:p-0">
            <h2 className="text-5xl font-extrabold text-purple-400 mb-4">
              About
            </h2>
            <p className="text-xl font-normal leading-relaxed mb-6">
              I'm a freelance web developer focused on creating high-quality, user-friendly websites. With skills in HTML5, CSS3, JavaScript, React, and Node.js, I deliver responsive, interactive web solutions.
            </p>
            <p className="text-xl font-normal leading-relaxed">
              Whether it's building a new website or enhancing an existing one, I'm here to bring your vision to life with modern technologies like React, TailwindCSS, and Bootstrap.
            </p>
            <p className="text-xl font-normal leading-relaxed">
              Let's connect and create something great together!
            </p>


          </div>
        </div>
      </div>
    </>
  );
};

export default About;
