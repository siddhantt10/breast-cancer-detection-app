// src/app/locate.js
import Navbar from '../../components/Navbar'

const Locate = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">Locate Hospitals</h1>
        <p className="text-lg">
          Find nearby hospitals for breast cancer screening and treatment.
        </p>
      </div>
    </div>
  )
}

export default Locate
