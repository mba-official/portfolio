import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="h-full py-20 flex items-center justify-center  p-4 lg:py-12 overflow-hidden text-white">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-purple-400 mb-4">
            Contact
          </h2>
          <p className="text-lg text-white font-bold">
          Have questions or want to work together? Reach out to us!
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-center gap-6">
          {/* Email */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-lg text-white font-semibold hover:text-purple-400">
              <a href="mailto:example@email.com">mbilaldevop@gmail.com</a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-600 bg-white p-2 rounded-md hover:scale-110 transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400 bg-white p-2 rounded-md hover:scale-110 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-3xl text-blue-700 bg-white p-2 rounded-md hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 bg-white p-2 rounded-md hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
