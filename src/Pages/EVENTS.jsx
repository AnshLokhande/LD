import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { events } from '../Data'; // Make sure the path and events data are correct
import { useTheme } from '../App';
import { useRouter, useSearchParams } from 'next/navigation';

const Events = () => {
  const navigate = useNavigate();
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const { isDarkMode } = useTheme();

  // Randomly select a few popular events
  const popularEvents = events.slice(0, 2); // Adjust if needed

  const handleRegisterClick = (eventId) => {
    navigate(`/register/${eventId}`);
  };

  // Inline styles for square card layout
  const cardStyles = {
    position: 'relative',
    width: '100%',
    paddingTop: '100%', // Aspect ratio for square
    borderRadius: '12px', // Softer rounded corners for a modern look
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    boxShadow: isDarkMode
      ? '0 6px 12px rgba(0, 0, 0, 0.6)' // Deeper shadows for dark mode
      : '0 6px 12px rgba(0, 0, 0, 0.3)', // Lighter shadows for light mode
    border: isDarkMode ? '2px solid #3b82f6' : '2px solid #ec4899', // Accent border colors
  };
  
  const imageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px', // Match border-radius for consistency
  };
  
  const hoveredCardOverlay = {
    position: 'absolute',
    inset: 0,
    padding: '16px',
    backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    opacity: 1,
    zIndex: 10,
    transition: 'opacity 0.3s ease-in-out',
    borderRadius: '12px', // Match border-radius for consistency
  };
  
  return (
    <div className={`container mx-auto py-12 px-4 md:px-8 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-indigo-900 text-black'}`}>
  
      {/* Popular Events Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-100">Popular </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularEvents.map(event => (
            <div
              key={event.id}
              style={cardStyles}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              className="hover:scale-105 transition-transform duration-300"
            >
              <img src={event.imageUrl} alt={event.title} style={imageStyles} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px', background: 'rgba(0, 0, 0, 0.7)', width: '100%' }}>
                <h4 className="font-semibold text-base text-white">{event.title}</h4>
                <p className="text-xs text-gray-300">{event.date}</p>
                <p className="font-bold text-sm text-white mt-1">{event.price}</p>
              </div>
              {hoveredEvent === event.id && (
                <div style={hoveredCardOverlay}>
                  <h4 className="font-semibold text-lg">{event.title}</h4>
                  <p className="text-sm mt-1">{event.location}</p>
                  <p className="text-sm mt-2">{event.date} · {event.duration}</p>
                  <p className="text-sm mt-2">{event.description}</p>
                  <ul className="text-sm mt-2 space-y-1">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-500" /> {highlight}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleRegisterClick(event.id)}
                    className={`mt-4 py-2 px-4 w-full font-semibold rounded ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'} transition duration-300`}
                    style={{ fontSize: '0.875rem' }}
                  >
                    Register Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
  
      {/* All Events Section */}
      <section>
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-100">All Events</h2>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {events.map(event => (
              <div
                key={event.id}
                style={cardStyles}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                className="hover:scale-105 transition-transform duration-300"
              >
                <img src={event.imageUrl} alt={event.title} style={imageStyles} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px', background: 'rgba(0, 0, 0, 0.7)', width: '100%' }}>
                  <h4 className="font-semibold text-base text-white">{event.title}</h4>
                  <p className="text-xs text-gray-300">{event.date}</p>
                  <p className="font-bold text-sm text-white mt-1">{event.price}</p>
                </div>
                {hoveredEvent === event.id && (
                  <div style={hoveredCardOverlay}>
                    <h4 className="font-semibold text-lg">{event.title}</h4>
                    <p className="text-sm mt-1">{event.location}</p>
                    <p className="text-sm mt-2">{event.date} · {event.duration}</p>
                    <p className="text-sm mt-2">{event.description}</p>
                    <ul className="text-sm mt-2 space-y-1">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <FaCalendarAlt className="mr-2 text-blue-500" /> {highlight}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleRegisterClick(event.id)}
                      className={`mt-4 py-2 px-4 w-full font-semibold rounded ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'} transition duration-300`}
                      style={{ fontSize: '0.875rem' }}
                    >
                      Register Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No events found.</p>
        )}
      </section>
    </div>
  );
  
};

export default Events;
