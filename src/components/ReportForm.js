'use client'

import { useState } from 'react';

import { sendFormData } from '../api/api'; // Import the API function to handle the form submission
import { LoaderCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { addReport } from '../data/data';

const ReportForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    // Patient Data
    patientName: '',
    patientAge: '',
    patientGender: '',

    // Values
    meanRadius: '',
    meanTexture: '',
    meanPerimeter: '',
    meanArea: '',
    meanSmoothness: '',
    meanCompactness: '',
    meanConcavity: '',
    meanConcavePoints: '',
    meanSymmetry: '',
    meanFractalDimension: '',
    radiusError: '',
    textureError: '',
    perimeterError: '',
    areaError: '',
    smoothnessError: '',
    compactnessError: '',
    concavityError: '',
    concavePointsError: '',
    symmetryError: '',
    fractalDimensionError: '',
    worstRadius: '',
    worstTexture: '',
    worstPerimeter: '',
    worstArea: '',
    worstSmoothness: '',
    worstCompactness: '',
    worstConcavity: '',
    worstConcavePoints: '',
    worstSymmetry: '',
    worstFractalDimension: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state before making a request

    try {
      // Destructure to remove patient fields from the data sent to the API
      const { patientName, patientAge, patientGender, ...numericData } = formData;

      // Send only the numeric fields to the backend
      const response = await sendFormData(numericData);
      // Call the API function with the form data
      console.log('Form submitted successfully:', response.data);

      // 2. Store the form data (plus prediction) in our in-memory array
      const newId = addReport({
        formData,
        prediction: response.prediction,
        accuracy: response.accuracy,
        createdAt: new Date().toISOString(),
      });

      // 3. Redirect to the newly created report detail page
      router.push(`/dashboard/saved-reports/${newId}`);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit the form. Please try again.');
    } finally {
      setLoading(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="mb-2 mt-4">
        <img className='opacity-50' src="/logo.png" alt="Logo" width={300} height={80} />
        <div className='border-t-4 border-dashed border-gray-700 my-4 lg:my-10'></div>
      </div>

      
      {/* Patient Data Section */}
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-xl font-semibold text-white mb-4 border-l-8 pl-4 border-bcdBlue ">Patient Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="patientName" className="text-white font-semibold text-sm mb-1">
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-bcdBlue"
              placeholder="Enter patient name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="patientAge" className="text-white font-semibold text-sm mb-1">
              Patient Age
            </label>
            <input
              type="number"
              id="patientAge"
              name="patientAge"
              value={formData.patientAge}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-bcdBlue"
              placeholder="Enter patient age"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="patientGender" className="text-white font-semibold text-sm mb-1">
              Patient Gender
            </label>
            <select
              id="patientGender"
              name="patientGender"
              value={formData.patientGender}
              onChange={handleChange}
              className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-bcdBlue"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      </div>

      <div className='border-t-4 border-dashed border-gray-700 my-4 lg:my-10'></div>

      {/* Values Section */}
      <div className="col-span-1 md:col-span-2 mt-6">
        <h2 className="text-xl font-semibold text-white mb-4 border-l-8 pl-4 border-bcdBlue ">Values</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {Object.keys(formData).map((key) =>
            !key.startsWith('patient') && (
              <div key={key} className="flex flex-col">
                <label
                  htmlFor={key}
                  className="text-white font-semibold text-sm mb-1"
                >
                  {key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <input
                  type="number"
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-bcdBlue"
                  placeholder={`Enter ${key}`}
                />
              </div>
            )
          )}
        </div>
      </div>


      {/* Error Message */}
      {error && (
        <div className="col-span-1 md:col-span-2 text-red-500 font-semibold mt-2">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <div className="col-span-1 md:col-span-2 flex justify-center">
        <button
          type="submit"
          className={`w-full lg:w-[50%] p-3 bg-bcdBlue text-white font-bold rounded-md hover:bg-bcdBlue-light focus:outline-none focus:ring focus:ring-bcdBlue-dark ${loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={loading}
        >
          {loading ? <span className='flex justify-center'><LoaderCircleIcon className='animate-spin mr-2' />Processing...</span> : 'Submit'}
        </button>
      </div>


    </form>
  );
};

export default ReportForm;
