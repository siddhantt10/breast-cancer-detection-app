// src/app/dashboard.js
import Navbar from '../../components/Navbar'

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <p className="text-lg">
          Welcome to your personalized dashboard where you can manage your breast cancer detection data.
        </p>
      </div>
    </div>
  )
}

export default Dashboard
