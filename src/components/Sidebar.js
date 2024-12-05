// components/Sidebar.js
import { FilePlus, FileText, MapPin, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';


const Sidebar = ({ onSelect }) => {

  return (
    <div className="lg:w-96 bg-gray-800 text-white left-0 p-4 flex flex-col justify-between">
      <div className=' flex flex-col gap-4 '>
        <button
          className="flex items-center space-x-4 w-full py-2 px-2 hover:bg-bcdBlue bg-gray-700 rounded-xl transition-all ease-in-out"
          onClick={() => onSelect('newReport')}
        >
          <FilePlus className="text-white bg-slate-600 p-3 rounded-xl" size={52}/>
          <span className='hidden lg:block'>New Report</span>
        </button>
        <button
          className="flex items-center space-x-4 w-full py-2 px-2 hover:bg-bcdBlue bg-gray-700 rounded-xl transition-all ease-in-out"
          onClick={() => onSelect('savedReports')}
        >
          <FileText className="text-white bg-slate-600 p-3 rounded-xl" size={52}/>
          <span className='hidden lg:block'>Saved Reports</span>
        </button>
        <button
          className="flex items-center space-x-4 w-full py-2 px-2 hover:bg-bcdBlue bg-gray-700 rounded-xl transition-all ease-in-out"
          onClick={() => onSelect('locateHospitals')}
        >
          <MapPin className="text-white bg-slate-600 p-3 rounded-xl" size={52}/>
          <span className='hidden lg:block'>Locate Hospitals</span>
        </button>
        <button
          className="flex items-center space-x-4 w-full py-2 px-2 hover:bg-bcdBlue bg-gray-700 rounded-xl transition-all ease-in-out"
          onClick={() => onSelect('contactUs')}
        >
          <Phone className="text-white bg-slate-600 p-3 rounded-xl" size={52}/>
          <span className='hidden lg:block'>Contact Us</span>
        </button>

      </div>
      <div className='text-xs text-slate-600'>
        <p>Group 179</p>
      </div>
    </div>
  );
};

export default Sidebar;
