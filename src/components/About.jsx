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
            About Us
          </h2>
          <p className="text-xl font-normal leading-relaxed mb-6">
            Welcome to our platform! We are dedicated to providing exceptional
            services that bring value to our users. Our mission is to create
            innovative solutions, foster meaningful connections, and help our
            community achieve their goals with confidence.
          </p>
          <p className="text-xl font-normal leading-relaxed">
            With a passionate team and a commitment to excellence, we strive to
            deliver results that exceed expectations. Join us on this journey,
            and let's make a difference together!
          </p>

        </div>
      </div>
    </div>
    </>
  );
};

export default About;
