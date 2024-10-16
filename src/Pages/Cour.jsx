import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';
import { courses } from '../Data'; // Ensure this path is correct
import { useTheme } from '../App';

const Cour = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const { isDarkMode } = useTheme();

  // Randomly select 4 popular courses
  const popularCourses = courses.slice(0, 4); // Adjust if needed

  // Filter courses based on the search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery) ||
    course.description.toLowerCase().includes(searchQuery)
  );

  const handleEnrollClick = (courseId) => {
    navigate(`/enroll/${courseId}`);
  };

  // Inline styles for square card layout
  const cardStyles = {
    position: 'relative',
    width: '100%',
    paddingTop: '50%', // Aspect ratio for square
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    boxShadow: isDarkMode
      ? '0 4px 10px rgba(0, 0, 0, 0.5)'
      : '0 4px 10px rgba(0, 0, 0, 0.2)',
    border: isDarkMode ? '2px solid #ec4899' : '2px solid #3b82f6',
  };

  const imageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
    objectFit: 'cover',
  };

  const hoveredCardOverlay = {
    position: 'absolute',
    inset: 0,
    padding: '16px',
    backgroundColor: isDarkMode ? '#1f2937' : '#fff',
    opacity: 1,
    zIndex: 10,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const hiddenOverlay = {
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: -1,
  };

  return (
    <div className={`container mx-auto py-12 px-4 md:px-8 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-blue text-black'}`}>
      
      {/* Popular Courses Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-8 text-center">Popular </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularCourses.map(course => (
            <div
              key={course.id}
              style={cardStyles}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <img src={course.imageUrl} alt={course.title} style={imageStyles} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px', background: 'rgba(0, 0, 0, 0.8)', width: '100%' }}>
                <h4 className="font-semibold text-sm text-white">{course.title}</h4>
                <p className="text-xs text-gray-300">{course.instructor}</p>
                <p className="font-bold text-sm text-white mt-1">{course.price}</p>
              </div>
              <div
                style={hoveredCourse === course.id ? hoveredCardOverlay : hiddenOverlay}
              >
                <h4 className="font-semibold text-sm">{course.title}</h4>
                <p className="text-xs mt-1">{course.lastUpdated}</p>
                <p className="text-xs mt-2">{course.duration} total hours · {course.lectureCount} lectures · All Levels</p>
                <p className="text-xs mt-2">{course.description}</p>
                <ul className="text-xs mt-2">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center mt-0">
                      <FaPlayCircle className="mr-1 text-blue-500" /> {highlight}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleEnrollClick(course.id)}
                  className={`mt-4 py-2 px-4 w-full font-semibold rounded ${isDarkMode ? 'bg-white text-black hover:bg-blue-600' : 'bg-black text-white hover:bg-blue-600'} transition duration-300`}
                  style={{ fontSize: '0.875rem' }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Courses Section */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-center">All Courses</h2>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                style={cardStyles}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <img src={course.imageUrl} alt={course.title} style={imageStyles} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px', background: 'rgba(0, 0, 0, 0.8)', width: '100%' }}>
                  <h4 className="font-semibold text-sm text-white">{course.title}</h4>
                  <p className="text-xs text-gray-300">{course.instructor}</p>
                  <p className="font-bold text-sm text-white mt-1">{course.price}</p>
                </div>
                <div
                  style={hoveredCourse === course.id ? hoveredCardOverlay : hiddenOverlay}
                >
                  <h4 className="font-semibold text-sm">{course.title}</h4>
                  <p className="text-xs mt-1">{course.lastUpdated}</p>
                  <p className="text-xs mt-2">{course.duration} total hours · {course.lectureCount} lectures · All Levels</p>
                  <p className="text-xs mt-2">{course.description}</p>
                  <ul className="text-xs mt-2">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center mt-0">
                        <FaPlayCircle className="mr-1 text-blue-500" /> {highlight}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleEnrollClick(course.id)}
                    className={`mt-4 py-2 px-4 w-full font-semibold rounded ${isDarkMode ? 'bg-white text-black hover:bg-blue-600' : 'bg-black text-white hover:bg-blue-600'} transition duration-300`}
                    style={{ fontSize: '0.875rem' }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No courses found matching your search.</p>
        )}
      </section>
    </div>
  );
};

export default Cour;


