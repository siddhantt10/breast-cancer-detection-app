// src/app/locate.js
import Navbar from '../../components/Navbar'
import Map from '../../components/Map'

const Locate = () => {
  return (
    <div className="bg-[url('/pattern.svg')] bg-cover bg-opacity-60 text-white">
      <Navbar />
      <div className="mx-auto text-center max-w-screen-md pt-24 min-h-screen p-4 animate-fadeInSlide">
        <Map />
      </div>
    </div>
  )
}

export default Locate
