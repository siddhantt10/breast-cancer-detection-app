// src/app/contact.js
import Navbar from '../../components/Navbar'

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg">
          Reach out to us for any inquiries or collaborations related to our breast cancer detection system.
        </p>
      </div>
    </div>
  )
}

export default Contact

