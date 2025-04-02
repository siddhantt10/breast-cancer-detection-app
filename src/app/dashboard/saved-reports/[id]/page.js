'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getReportById } from '@/data/data';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SavedReportDetail() {
    const params = useParams();
    const reportId = params.id;

    const [report, setReport] = useState(null);

    useEffect(() => {
        const foundReport = getReportById(Number(reportId));
        setReport(foundReport);
    }, [reportId]);

    if (!report) {
        return (
            <div className="p-8 text-white">
                <h1 className="text-2xl font-bold">Report not found</h1>
            </div>
        );
    }

    // Destructuring for convenience
    const {
        patientName,
        patientAge,
        patientGender,
        ...numericData
    } = report.formData;

    return (
        <div className=" animate-fadeInSlide max-w-4xl p-2 lg:p-6 md:p-4 bg-gray-800 text-white rounded-lg shadow-md m-2">
            {/* Header / Title */}
            <div className="mb-6 mt-4">
                <Image className='opacity-50' src="/logo.png" alt="Logo" width={300} height={80} />
            </div>

            <div className='border-t-4 border-dashed border-gray-600 my-10'></div>

            {/* Patient Details */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-4 border-l-8 pl-4 border-bcdBlue">Patient Details</h2>
                <div className='flex flex-col gap-4 px-6'>
                    <div className="flex lg:gap-20 flex-wrap gap-4 md:gap-12">
                        <div>
                            <p className="font-extralight text-bcdBlue text-sm">Name:</p>
                            <p className='text-xl font-bold'>{patientName || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="font-extralight text-bcdBlue text-sm">Age:</p>
                            <p className='text-xl font-bold'>{patientAge || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="font-extralight text-bcdBlue text-sm">Gender:</p>
                            <p className='text-xl font-bold'>{patientGender || 'N/A'}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="font-extralight text-bcdBlue text-sm">Date Created:</p>
                            <p className='font-extralight text-sm'>{report.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-t-4 border-dashed border-gray-600 my-10'></div>

            {/* Prediction Report */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-4 border-l-8 pl-4 border-bcdBlue">Prediction Report</h2>
                <div className='flex lg:gap-20 flex-wrap gap-4 md:gap-12 px-6'>
                    <div>
                        <p className="font-extralight text-bcdBlue text-sm">Prediction:</p>
                        <p
                            className={
                                report.prediction.toLowerCase() === 'malignant'
                                    ? 'text-red-400 text-xl font-bold'
                                    : 'text-green-400 text-xl font-bold'
                            }
                        >
                            {report.prediction}
                        </p>
                    </div>
                    <div>
                        <p className="font-extralight text-bcdBlue text-sm ">Model Accuracy:</p>
                        <p className='text-xl font-bold'>
                            {report.accuracy
                                ? `${report.accuracy}%`
                                : 'N/A'}
                        </p>
                    </div>
                </div>
            </div>

            <div className='border-t-4 border-dashed border-gray-600 my-10'></div>

            {/* Description */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-4 border-l-8 pl-4 border-bcdBlue">Description</h2>
                {report.prediction.toLowerCase() === 'malignant' ? (
                    <p className="text-gray-300 px-6">
                        A <strong>malignant</strong> tumor is cancerous and may spread to
                        other parts of the body if not treated promptly. It’s crucial to
                        consult with a medical professional for further evaluation,
                        treatment plans, and regular follow-up.
                    </p>
                ) : (
                    <p className="text-gray-300 px-6">
                        A <strong>benign</strong> tumor is generally non-cancerous and
                        unlikely to spread. However, it's still important to follow up with
                        a healthcare provider for monitoring and to ensure proper care.
                    </p>
                )}
                <p className="text-sm text-gray-400 mt-4 px-6">
                    <strong>Disclaimer:</strong> This report is generated based on
                    predictive modeling and is <em>not</em> a medical diagnosis. Always
                    consult a licensed physician or qualified health provider for
                    accurate, personalized medical advice.
                </p>
                <Link href="/dashboard/locate-hospitals" legacyBehavior>
                    <button className='text-bcdBlue rounded-md hover:text-bcdBlue/40 transition-all ease-in-out hover:cursor-pointer flex gap-2 mt-6 px-6 animate-pulse'>
                        Locate Nearby Hospitals/Experts <ChevronRight />
                    </button>
                </Link>
            </div>

            <div className='border-t-4 border-dashed border-gray-600 my-10'></div>

            {/* Form Data */}
            <div className="">
                <h2 className="text-xl font-semibold text-white mb-4 border-l-8 pl-4 border-bcdBlue">Form Data</h2>
                <div className="list-disc list-inside text-gray-300 text-sm flex flex-wrap items-center gap-2 px-6">
                    {/* Convert numericData back into key-value pairs for display */}
                    {Object.entries(numericData).map(([key, value]) => (
                        <p key={key}>
                            <span className="font-medium">{key}: </span><span className='font-light'>{value}, </span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
