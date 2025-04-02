// src/app/about.js
import Navbar from '../../components/Navbar'
import { Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-[url('/pattern.svg')] bg-cover bg-opacity-60 text-white">
      <Navbar />
      <div className="sm:flex items-center max-w-screen-xl pt-24 animate-fadeInSlide">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image src="https://i.Imageur.com/WbQnbas.png" alt='som'/>
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About<span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text animate-gradientFlow inline-block ml-3">Group 179</span>
            </h2>
            <p className="text-gray-300">
              We are Final year Students of VIT Bhopal University, From Computer Science Department. We are a team of developers and designers who are passionate about creating a better future with the help of technology. This project is a part of our final year Capstone project.
            </p>
          </div>
        </div>
      </div>
      <div className="px-10 lg:px-20 py-8 lg:p-10 bg-slate-100">
        <div className="text-center mb-8">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            THE TEAM
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Meet Our <span className="text-indigo-600">Team</span>
          </h3>
        </div>


        <div className="flex flex-wrap gap-2 md:gap-8 lg:gap-10 justify-center items-center mb-10">

          <div className="text-center hover:shadow-lg bg-white p-4 rounded-xl w-40 transition-all ease-in-out">
            <p><Image className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://i.pinimg.com/736x/a1/93/f0/a193f0417deece40e7f5a7b99fc81789.jpg"/></p>

            <p className="text-gray-900 font-semibold">Siddhant<br/>Patel</p>
            <p className="text-gray-500 uppercase text-sm">21BCE10511</p>

            <div className="my-4 flex justify-center gap-4 items-center">
              <a href="https://www.linkedin.com/in/siddhantt10/" target="_blank" >
                <Linkedin strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out' />
              </a>
              <a href='https://www.github.com/siddhantt10/' target="_blank">
                <Github strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
              <a href='mailto:siddpatel1010@gmail.com' target="_blank">
                <Mail  strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
            </div>

          </div>

          <div className="text-center hover:shadow-lg bg-white p-4 rounded-xl w-40 transition-all ease-in-out">
            <p><Image className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://i.pinimg.com/736x/a1/93/f0/a193f0417deece40e7f5a7b99fc81789.jpg"/></p>

            <p className="text-gray-900 font-semibold">Shreyansh Kumar Singh </p>
            <p className="text-gray-500 uppercase text-sm">21BCE10848</p>

            <div className="my-4 flex justify-center gap-4 items-center">
              <a href="https://www.linkedin.com/in/siddhantt10/" target="_blank" >
                <Linkedin strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out' />
              </a>
              <a href='https://www.github.com/siddhantt10/' target="_blank">
                <Github strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
              <a href='mailto:siddpatel1010@gmail.com' target="_blank">
                <Mail  strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
            </div>

          </div>

          <div className="text-center hover:shadow-lg bg-white p-4 rounded-xl w-40 transition-all ease-in-out">
            <p><Image className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://i.pinimg.com/736x/a1/93/f0/a193f0417deece40e7f5a7b99fc81789.jpg"/></p>

            <p className="text-gray-900 font-semibold">Utkarsh<br/>Verma</p>
            <p className="text-gray-500 uppercase text-sm">21BCE10269</p>

            <div className="my-4 flex justify-center gap-4 items-center">
              <a href="https://www.linkedin.com/in/siddhantt10/" target="_blank" >
                <Linkedin strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out' />
              </a>
              <a href='https://www.github.com/siddhantt10/' target="_blank">
                <Github strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
              <a href='mailto:siddpatel1010@gmail.com' target="_blank">
                <Mail  strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
            </div>

          </div>

          <div className="text-center hover:shadow-lg bg-white p-4 rounded-xl w-40 transition-all ease-in-out">
            <p><Image className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://i.pinimg.com/736x/a1/93/f0/a193f0417deece40e7f5a7b99fc81789.jpg"/></p>

            <p className="text-gray-900 font-semibold">Jagrati Mathpal</p>
            <p className="text-gray-500 uppercase text-sm">21BCE10407</p>

            <div className="my-4 flex justify-center gap-4 items-center">
              <a href="https://www.linkedin.com/in/siddhantt10/" target="_blank" >
                <Linkedin strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out' />
              </a>
              <a href='https://www.github.com/siddhantt10/' target="_blank">
                <Github strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
              <a href='mailto:siddpatel1010@gmail.com' target="_blank">
                <Mail  strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
            </div>

          </div>

          <div className="text-center hover:shadow-lg bg-white p-4 rounded-xl w-40 transition-all ease-in-out">
            <p><Image className="mb-3 rounded-xl mx-auto h-32 w-32" src="https://i.pinimg.com/736x/a1/93/f0/a193f0417deece40e7f5a7b99fc81789.jpg"/></p>

            <p className="text-gray-900 font-semibold">Mayank Saxena</p>
            <p className="text-gray-500 uppercase text-sm">21BCE10801</p>

            <div className="my-4 flex justify-center gap-4 items-center">
              <a href="https://www.linkedin.com/in/siddhantt10/" target="_blank" >
                <Linkedin strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out' />
              </a>
              <a href='https://www.github.com/siddhantt10/' target="_blank">
                <Github strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
              <a href='mailto:siddpatel1010@gmail.com' target="_blank">
                <Mail  strokeWidth={1.5} className='hover:text-bcdBlue text-black transition-all ease-in-out'/>
              </a>
            </div>

          </div>

          

        </div>

      </div>
    </div>
  )
}

export default About
