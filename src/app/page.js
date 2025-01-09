// src/app/page.js
import { ChevronRight} from 'lucide-react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Steps from '../components/Steps'

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="flex items-center justify-center lg:justify-start h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/home-bg.png)' }}>
        <div className="text-center p-8 rounded-lg lg:text-left lg:ml-12">
          <h1 className="text-xl mb-4">We are</h1>
          <h2 className="text-4xl lg:text-6xl  font-bold mb-6">
            Building A model <br /> That detects 
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text animate-gradientFlow inline-block ml-3">
              <p>Breast Cancer.</p>
            </span>



          </h2>
          <Link href='/research' legacyBehavior>
          <button className="lg:ml-0 ml-auto mr-auto hover:bg-bcdBlue border-solid border-[1px] border-white/40 hover:border-white/10 transition-all ease-in-out  py-2 px-4 lg:w-64 rounded-md text-left flex justify-between" >
            Explore<ChevronRight color="#ffffff" />
          </button>
          </Link>
        </div>
      </div>
      <div className="bg-[#CDD6E3] text-white py-20 flex flex-col text-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradientFlow inline-block shadow-md shadow-bcdBlue/40 rounded-md p-2 px-4 w-60 ml-auto mr-auto">Group 179</div>
        <div className="text-2xl mt-8 text-black">Creating A better future with the <br/>help of Technology.</div>
      </div>
      <div className='flex justify-center bg-gray-100'>
       <Steps /> 
      </div>
      
    </div>
  )
}

export default Home
