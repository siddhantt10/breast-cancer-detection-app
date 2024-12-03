// src/app/about.js
import Navbar from '../../components/Navbar'

const About = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg">
          We are Group 179, working on developing a system that detects breast cancer using machine learning.
        </p>
      </div>
    </div>
  )
}

export default About
