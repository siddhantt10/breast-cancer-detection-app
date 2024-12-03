// components/Navbar.js
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-gray-800 text-white">
      <div className="text-lg font-semibold"><Link href="/" legacyBehavior>BREAST CANCER Detection System</Link></div>
      <div className="space-x-6">
        <Link href="/about" legacyBehavior><a className="hover:text-blue-400">About Us</a></Link>
        <Link href="/locate" legacyBehavior><a className="hover:text-blue-400">Locate Hospitals</a></Link>
        <Link href="/research" legacyBehavior><a className="hover:text-blue-400">Research</a></Link>
        <Link href="/contact" legacyBehavior><a className="hover:text-blue-400">Contact</a></Link>
        <Link href="/dashboard" legacyBehavior><a className="hover:text-blue-400 bg-blue-500 px-4 py-2 rounded-md">Dashboard</a></Link>
      </div>
    </nav>
  )
}

export default Navbar
