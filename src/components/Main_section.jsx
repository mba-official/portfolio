import React from 'react'
import ProfilePic from '../assets/picc.jpeg'; //Import Profile Pic
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaGithub, } from 'react-icons/fa'; // Import icons

export const Main_section = () => {
    return (
        <div className=''>
            <div className='flex flex-col lg:flex-row items-center justify-around py-4 bg-transparent gap-20'>
                <div className="content text-center lg:text-left">
                    <h1 className='text-4xl text-white font-bold tracking-wider mb-4'>Hi👋 I'm <span className='text-purple-400'>BILAL</span></h1>
                    <h3 className='text-xl text-white font-medium mb-6'>Full Stack Web Developer</h3>
                    <button className='hover:bg-purple-500 text-white font-bold hover:-translate-x-1 duration-500 bg-transparent border-purple-500 border-2 px-6 py-2 rounded-md mb-4'>Resume</button>

                </div>
                <div className="pic flex flex-col lg:items-start lg:flex-row space-y-1 lg:space-y-2 gap-4 items-center">
                    <img src={ProfilePic} alt="" className='h-48 rounded-lg shadow-purple-500/50 hover:cursor-cell hover:shadow-xl hover:shadow-purple-400/50 transition-all duration-500' />
                    <ul className="lg:space-y-3 space-x-4 flex flex-row lg:flex-col lg:space-x-0 items-center lg:items-start">
                        <a href="$"><li>
                            <FaLinkedinIn size={34} className='text-blue-600 bg-white p-1 rounded-md hover:cursor-pointer hover:translate-x-1 duration-500' /> {/* LinkedIn Icon */}
                        </li></a>
                        <a href="£"><li>
                            <FaInstagram size={34} className='text-pink-600 bg-white p-1 rounded-md hover:cursor-pointer hover:translate-x-1 duration-500 ' /> {/* Facebook Icon */}
                        </li></a>
                        <a href="£"><li>
                            <FaWhatsapp size={34} className='text-green-700 bg-white p-1 rounded-md hover:cursor-pointer hover:translate-x-1 duration-500' /> {/* Facebook Icon */}
                        </li></a>
                        <a href="£"><li>
                            <FaGithub size={34} className='text-gray-700 bg-white p-1 rounded-md hover:cursor-pointer hover:translate-x-1 duration-500' /> {/* Facebook Icon */}
                        </li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main_section;
