import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { events } from './Data'; // Make sure the path and events data are correct
import { useTheme } from './App';

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
    height: '100%',
    objectFit: 'cover',
  };

  const hoveredCardOverlay = {
    position: 'absolute',
    inset: 0,
    padding: '16px',
    backgroundColor: isDarkMode ? '#1f2937' : '#fff',
    opacity: 1,
    zIndex: 10,
    transition: 'opacity 0.3s ease-in-out',
    borderRadius: '8px',
  };

  return (
    <div className={`container mx-auto py-12 px-4 md:px-8 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'}`}>
      
      {/* Popular Events Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-8 text-center">feff </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularEvents.map(event => (
            <div
              key={event.id}
              style={cardStyles}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <img src={event.imageUrl} alt={event.title} style={imageStyles} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px', background: 'rgba(0, 0, 0, 0.8)', width: '100%' }}>
                <h4 className="font-semibold text-sm text-white">{event.title}</h4>
                <p className="text-xs text-gray-300">{event.date}</p>
                <p className="font-bold text-sm text-white mt-1">{event.price}</p>
              </div>
              {hoveredEvent === event.id && (
                <div style={hoveredCardOverlay}>
                  <h4 className="font-semibold text-sm">{event.title}</h4>
                  <p className="text-xs mt-1">{event.location}</p>
                  <p className="text-xs mt-2">{event.date} · {event.duration}</p>
                  <p className="text-xs mt-2">{event.description}</p>
                  <ul className="text-xs mt-2">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center mt-0">
                        <FaCalendarAlt className="mr-1 text-blue-500" /> {highlight}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleRegisterClick(event.id)}
                    className={`mt-4 py-2 px-4 w-full font-semibold rounded ${isDarkMode ? 'bg-white text-black hover:bg-blue-600' : 'bg-black text-white hover:bg-blue-600'} transition duration-300`}
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
        <h2 className="text-4xl font-bold mb-8 text-center">All Events</h2>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {events.map(event => (
              <div
                key={event.id}
                style={cardStyles}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <img src={event.imageUrl} alt={event.title} style={imageStyles} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px', background: 'rgba(0, 0, 0, 0.8)', width: '100%' }}>
                  <h4 className="font-semibold text-sm text-white">{event.title}</h4>
                  <p className="text-xs text-gray-300">{event.date}</p>
                  <p className="font-bold text-sm text-white mt-1">{event.price}</p>
                </div>
                {hoveredEvent === event.id && (
                  <div style={hoveredCardOverlay}>
                    <h4 className="font-semibold text-sm">{event.title}</h4>
                    <p className="text-xs mt-1">{event.location}</p>
                    <p className="text-xs mt-2">{event.date} · {event.duration}</p>
                    <p className="text-xs mt-2">{event.description}</p>
                    <ul className="text-xs mt-2">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center mt-0">
                          <FaCalendarAlt className="mr-1 text-blue-500" /> {highlight}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleRegisterClick(event.id)}
                      className={`mt-4 py-2 px-4 w-full font-semibold rounded ${isDarkMode ? 'bg-white text-black hover:bg-blue-600' : 'bg-black text-white hover:bg-blue-600'} transition duration-300`}
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
