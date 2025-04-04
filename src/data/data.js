// /src/data/data.js

// In-memory array to store report objects

let reports = [
    {
      id: 0,
      formData: {
        // Patient Data
        patientName: 'John Doe',
        patientAge: '45',
        patientGender: 'Male',
  
        // Values
        meanRadius: '14.3',
        meanTexture: '19.2',
        meanPerimeter: '90.6',
        meanArea: '600.3',
        meanSmoothness: '0.089',
        meanCompactness: '0.12',
        meanConcavity: '0.05',
        meanConcavePoints: '0.04',
        meanSymmetry: '0.16',
        meanFractalDimension: '0.07',
        radiusError: '0.3',
        textureError: '1.2',
        perimeterError: '3.4',
        areaError: '45.3',
        smoothnessError: '0.006',
        compactnessError: '0.025',
        concavityError: '0.018',
        concavePointsError: '0.010',
        symmetryError: '0.025',
        fractalDimensionError: '0.003',
        worstRadius: '15.2',
        worstTexture: '23.5',
        worstPerimeter: '98.6',
        worstArea: '700.1',
        worstSmoothness: '0.124',
        worstCompactness: '0.143',
        worstConcavity: '0.087',
        worstConcavePoints: '0.053',
        worstSymmetry: '0.197',
        worstFractalDimension: '0.078',
      },
      prediction: 'Malignant',
      accuracy: 96,
      createdAt: '2025-03-27T12:00:00Z',
    },
    {
      id: 1,
      formData: {
        // Patient Data
        patientName: 'Jane Smith',
        patientAge: '52',
        patientGender: 'Female',
  
        // Values
        meanRadius: '12.6',
        meanTexture: '18.1',
        meanPerimeter: '82.4',
        meanArea: '480.7',
        meanSmoothness: '0.094',
        meanCompactness: '0.10',
        meanConcavity: '0.03',
        meanConcavePoints: '0.03',
        meanSymmetry: '0.15',
        meanFractalDimension: '0.06',
        radiusError: '0.25',
        textureError: '1.0',
        perimeterError: '3.0',
        areaError: '38.2',
        smoothnessError: '0.005',
        compactnessError: '0.020',
        concavityError: '0.015',
        concavePointsError: '0.009',
        symmetryError: '0.020',
        fractalDimensionError: '0.002',
        worstRadius: '14.1',
        worstTexture: '22.3',
        worstPerimeter: '88.5',
        worstArea: '560.0',
        worstSmoothness: '0.110',
        worstCompactness: '0.130',
        worstConcavity: '0.070',
        worstConcavePoints: '0.040',
        worstSymmetry: '0.185',
        worstFractalDimension: '0.072',
      },
      prediction: 'Benign',
      accuracy: 96,
      createdAt: '2025-03-27T13:15:00Z',
    },
    {
      id: 2,
      formData: {
        // Patient Data
        patientName: 'Alice Cooper',
        patientAge: '39',
        patientGender: 'Female',
  
        // Values
        meanRadius: '13.5',
        meanTexture: '17.4',
        meanPerimeter: '85.3',
        meanArea: '520.2',
        meanSmoothness: '0.090',
        meanCompactness: '0.13',
        meanConcavity: '0.07',
        meanConcavePoints: '0.05',
        meanSymmetry: '0.18',
        meanFractalDimension: '0.08',
        radiusError: '0.28',
        textureError: '1.1',
        perimeterError: '2.9',
        areaError: '42.5',
        smoothnessError: '0.007',
        compactnessError: '0.022',
        concavityError: '0.016',
        concavePointsError: '0.011',
        symmetryError: '0.022',
        fractalDimensionError: '0.003',
        worstRadius: '14.9',
        worstTexture: '21.8',
        worstPerimeter: '92.0',
        worstArea: '610.4',
        worstSmoothness: '0.119',
        worstCompactness: '0.140',
        worstConcavity: '0.082',
        worstConcavePoints: '0.045',
        worstSymmetry: '0.190',
        worstFractalDimension: '0.075',
      },
      prediction: 'Malignant',
      accuracy: 96,
      createdAt: '2025-03-27T14:00:00Z',
    },
  ];

/**
 * Returns the entire reports array.
 */
export function getReports() {
  return reports;
}

/**
 * Adds a new report to the reports array.
 * @param {object} report - The report object (including form data and any additional info).
 * @returns {number} The newly assigned ID of the report.
 */
export function addReport(report) {
  // The ID is simply the next index in the array.
  // Alternatively, you could generate a random ID or use a timestamp.
  const newId = reports.length;
  reports.push({ id: newId, ...report });
  return newId;
}

/**
 * Retrieves a single report by its ID.
 * @param {number} id
 * @returns {object | null} The report object or null if not found.
 */
export function getReportById(id) {
  return reports[id] || null;
}
