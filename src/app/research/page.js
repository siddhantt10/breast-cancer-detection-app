// src/app/research.js
import Navbar from '../../components/Navbar'

const Research = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">Research</h1>
        <p className="text-lg">
          Learn about the latest research in breast cancer detection and the technology behind it.
        </p>
      </div>
    </div>
  )
}

export default Research
