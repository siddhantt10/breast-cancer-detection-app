import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL; // Use environment variable for flexibility


// Function to send cancer data to the backend for prediction
export const sendFormData = async (formData) => {
  try {
    // Convert form data to the expected format: { features: [float, float, ..., float] }
    const formattedData = {
      features: Object.values(formData).map((value) => parseFloat(value)), // Convert values to float
    };

    const response = await axios.post(`${BASE_URL}/predict`, formattedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data)
    return response.data; // Return the prediction result
  } catch (error) {
    console.error('Error sending form data:', error);
    throw error.response?.data || error.message;
  }
};

// Fun endpoint for testing
export const fetchTesterBoi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tester-boi`);
    return response.data; // Return the fun response
  } catch (error) {
    console.error('Error fetching tester-boi:', error);
    throw error.response?.data || error.message;
  }
};
