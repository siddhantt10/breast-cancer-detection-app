// pages/dashboard.js
'use client'; // Ensure this runs on the client side

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';  // Importing the already existing Navbar component

export default function DashboardLayout({ children }) {
    return (
        <div className='flex flex-col bg-black '>
            <Navbar />
            <div className="flex mt-24">
                <Sidebar />
                <div className="bg-gray-600 p-4 w-full h-[89vh] lg:h-[87vh] overflow-y-auto">
                    <main className="flex-1 overflow-auto">{children}</main>
                </div>
            </div>
        </div>
    );
}


