// src/app/page.js
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
        <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">We are</h1>
          <h2 className="text-4xl font-bold text-blue-400 mb-6">
            Building A model <br /> That detects <span className="text-white">Breast Cancer.</span>
          </h2>
          <button className="bg-bcdBlue text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Explore
          </button>
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-lg">Group 179</p>
        <p className="text-sm">Creating A better future with the help of Technology.</p>
      </footer>
    </div>
  )
}

export default Home
