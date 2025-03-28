// /src/app/dashboard/saved-reports/page.js
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getReports } from '@/data/data';

export default function SavedReports() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        setReports(getReports());
    }, []);

    if (!reports.length) {
        return (
            <div className="p-4 text-white">
                <h1 className="text-xl font-bold mb-4">Saved Reports</h1>
                <p>No reports found. Try creating one!</p>
            </div>
        );
    }

    return (
        <div className="p-4 text-white">
            <h1 className="text-xl font-semibold text-white mb-4 border-l-8 pl-4 border-bcdBlue">Saved Reports</h1>
            <ul className="space-y-2">
                {reports.map((report) => (

                    <li key={report.id} className="animate-fadeInSlide bg-gray-700 p-3 px-4 rounded-md hover:bg-gray-800 an cursor-pointer max-w-lg transition-all ease-in-out">
                        <Link href={`/dashboard/saved-reports/${report.id}`} className="">
                            <div className='text-lg font-semibold text-bcdBlue'>{report.formData.patientName}</div>
                            <div className='text-sm font-light'>Age: {report.formData.patientAge}</div>
                            <div className='text-sm font-thin'>Prediction: {report.prediction}</div>
                            <div className='text-sm font-thin text-gray-300'>{report.createdAt}</div>
                        </Link>
                    </li>

                ))}
            </ul>
        </div>
    );
}
