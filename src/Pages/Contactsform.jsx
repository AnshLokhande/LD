import React from 'react';
import pic from '../assets/pic.png';
import { useTheme } from '../App';

function Aboutus() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode ? ' text-white' : 'bg-gradient-to-b from-gray-100 to-white text-gray-900'} min-h-screen py-12 md:py-24`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in tracking-tight">
            Welcome to the Learning Destiny Community!
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 max-w-3xl mx-auto">
            Empowering learners, one step at a time with top-notch courses, resources, and community support.
          </p>
          <a
            href="/Cour"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full transition duration-300 mt-6 animate-bounce"
          >
            Explore More
          </a>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Popular Courses</h2>
            <p className="text-xl font-light max-w-2xl mx-auto">
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}>
              <h3 className="text-2xl font-bold mb-2">Python Advanced</h3>
              <p className="text-lg">
                Learn Python Advanced from Our Best Educators.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}>
              <h3 className="text-2xl font-bold mb-2">Deep Learning</h3>
              <p className="text-lg">
                Our experts provide personalized career coaching and mentorship to help you succeed in your desired field.
              </p>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300`}>
              <h3 className="text-2xl font-bold mb-2">React + Next.js </h3>
              <p className="text-lg">
                Discover exciting internship and freelancing opportunities to gain hands-on experience and build your portfolio.
              </p>
            </div>
          </div>
        </div>


        {/* Final Call-to-Action */}
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl mb-6">
            Ready to take the next step in your learning journey? Join us today!
          </p>
          <a
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-full transition duration-300"
          >
            Join Learning Destiny
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
