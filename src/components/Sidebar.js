import { FilePlus, FileText, MapPin, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('');

  // Use the router pathname to update the active button when the page loads or refreshes
  useEffect(() => {
    if (!router.pathname) return; // Prevent errors if pathname is not available yet

    const currentRoute = router.pathname;
    if (currentRoute.includes('new-report')) {
      setActiveButton('new-report');
    } else if (currentRoute.includes('saved-reports')) {
      setActiveButton('saved-reports');
    } else if (currentRoute.includes('locate-hospitals')) {
      setActiveButton('locate-hospitals');
    } else if (currentRoute.includes('contact-us')) {
      setActiveButton('contact-us');
    } else {
      setActiveButton(' ');
    }
  }, [router.pathname]); // Add router.pathname as a dependency to run on path change

  return (
    <div className="lg:w-96 bg-gray-800 text-white left-0 p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <button
          className={`flex items-center space-x-4 w-full py-2 px-2 rounded-xl transition-all ease-in-out ${
            activeButton === 'new-report'
              ? 'bg-bcdBlue hover:bg-bcdBlue-light'
              : 'bg-gray-700 hover:bg-bcdBlue'
          }`}
          onClick={() => {
            setActiveButton('new-report');
            router.push('/dashboard/new-report');
          }}
        >
          <FilePlus className="text-white bg-white/30 p-3 rounded-xl" size={52} />
          <span className="hidden lg:block">New Report</span>
        </button>

        <button
          className={`flex items-center space-x-4 w-full py-2 px-2 rounded-xl transition-all ease-in-out ${
            activeButton === 'saved-reports'
              ? 'bg-bcdBlue hover:bg-bcdBlue-light'
              : 'bg-gray-700 hover:bg-bcdBlue'
          }`}
          onClick={() => {
            setActiveButton('saved-reports');
            router.push('/dashboard/saved-reports');
          }}
        >
          <FileText className="text-white bg-white/30 p-3 rounded-xl" size={52} />
          <span className="hidden lg:block">Saved Reports</span>
        </button>

        <button
          className={`flex items-center space-x-4 w-full py-2 px-2 rounded-xl transition-all ease-in-out ${
            activeButton === 'locate-hospitals'
              ? 'bg-bcdBlue hover:bg-bcdBlue-light'
              : 'bg-gray-700 hover:bg-bcdBlue'
          }`}
          onClick={() => {
            setActiveButton('locate-hospitals');
            router.push('/dashboard/locate-hospitals');
          }}
        >
          <MapPin className="text-white bg-white/30 p-3 rounded-xl" size={52} />
          <span className="hidden lg:block">Locate Hospitals</span>
        </button>

        <button
          className={`flex items-center space-x-4 w-full py-2 px-2 rounded-xl transition-all ease-in-out ${
            activeButton === 'contact-us'
              ? 'bg-bcdBlue hover:bg-bcdBlue-light'
              : 'bg-gray-700 hover:bg-bcdBlue'
          }`}
          onClick={() => {
            setActiveButton('contact-us');
            router.push('/dashboard/contact-us');
          }}
        >
          <Phone className="text-white bg-white/30 p-3 rounded-xl" size={52} />
          <span className="hidden lg:block">Contact Us</span>
        </button>
      </div>

      <div className="text-xs text-slate-600">
        <p>Group 179</p>
      </div>
    </div>
  );
};

export default Sidebar;
