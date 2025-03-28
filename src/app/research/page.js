// src/app/research.js
import Navbar from '../../components/Navbar'

const Research = () => {
  return (

    <div className="">
      <Navbar />
      <div className="pt-24 relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto p-6">
          {/* Page Header */}
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-wide">
              Research & Resources
            </h1>
            <p className="text-lg text-gray-300 mt-4">
              Explore cutting-edge research and studies that power our system.
            </p>
          </header>

          {/* Research Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 backdrop-blur-sm bg-opacity-80 p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-3">
                Various Types and Management of Breast Cancer
              </h2>
              <p className="text-gray-300 text-base mb-4">
                An in-depth look at various types and management strategies for breast cancer.
              </p>
              <a
                href="https://journals.lww.com/japtr/fulltext/2010/01020/various_types_and_management_of_breast_cancer__an.3.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
              >
                Read More
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 backdrop-blur-sm bg-opacity-80 p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-3">
                Understanding Breast Cancer Risk Assessment Tools
              </h2>
              <p className="text-gray-300 text-base mb-4">
                Insights into modern approaches for assessing breast cancer risk and prevention.
              </p>
              <a
                href="https://www.cancer.gov/news-events/cancer-currents-blog/2024/understanding-breast-cancer-risk-assessment-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
              >
                Read More
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 backdrop-blur-sm bg-opacity-80 p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-white mb-3">
                Advances in Breast Cancer Research - JAMA
              </h2>
              <p className="text-gray-300 text-base mb-4">
                A comprehensive analysis of breakthrough research in breast cancer diagnosis and treatment.
              </p>
              <a
                href="https://jamanetwork.com/journals/jama/fullarticle/2721180"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research
