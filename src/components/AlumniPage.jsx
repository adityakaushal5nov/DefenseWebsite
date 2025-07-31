import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Calendar, ChevronDown, Star, Award } from 'lucide-react';
import { allOfficersData } from '../data/battalionData';

const AlumniPage = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [officers, setOfficers] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const years = Object.keys(allOfficersData).sort((a, b) => b - a);

  useEffect(() => {
    setOfficers(allOfficersData[selectedYear] || []);
  }, [selectedYear]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="alumni-page">
      {/* Header Section */}
      <motion.section 
        className="alumni-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="alumni-header-content">
            <div className="header-text">
              <h1 className="alumni-title">
                <Users className="title-icon" />
                Battalion Alumni
              </h1>
              <p className="alumni-description">
                Honoring the brave officers who have served with distinction in our battalion since 1966.
                Each officer represents the values of courage, honor, and dedication that define our legacy.
              </p>
            </div>
            <div className="year-selector">
              <label htmlFor="year-select" className="year-label">
                <Calendar size={20} />
                Select Year
              </label>
              <div className="dropdown-container">
                <button
                  className={`year-dropdown ${isDropdownOpen ? 'open' : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedYear}
                  <ChevronDown size={20} />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {years.map((year) => (
                        <button
                          key={year}
                          className={`dropdown-item ${year === selectedYear ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedYear(year);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {year}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Officers Grid */}
      <motion.section 
        className="officers-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedYear}
      >
        <div className="container">
          <div className="officers-count">
            <h2>
              Officers from {selectedYear} 
              <span className="count-badge">
                {officers.length} {officers.length === 1 ? 'Officer' : 'Officers'}
              </span>
            </h2>
          </div>
          
          {officers.length > 0 ? (
            <div className="officers-grid">
              {officers.map((officer) => (
                <motion.div
                  key={officer.id}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="officer-card"
                >
                  <Link to={`/officer/${officer.id}`} className="officer-link">
                    <div className="officer-image">
                      <img 
                        src={officer.profilePicture} 
                        alt={officer.name}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x300/4a5d23/ffffff?text=No+Photo';
                        }}
                      />
                      <div className="rank-badge">
                        <Star size={16} />
                        {officer.rank}
                      </div>
                    </div>
                    <div className="officer-info">
                      <h3 className="officer-name">{officer.name}</h3>
                      <div className="officer-details">
                        <div className="detail-item">
                          <Calendar size={16} />
                          <span>Inducted: {new Date(officer.inductionDate).getFullYear()}</span>
                        </div>
                        {officer.laurels && officer.laurels.length > 0 && (
                          <div className="detail-item">
                            <Award size={16} />
                            <span>{officer.laurels.length} Awards</span>
                          </div>
                        )}
                      </div>
                      <div className="view-profile">
                        View Profile →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="no-officers"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Users size={64} />
              <h3>No officers found for {selectedYear}</h3>
              <p>Please select a different year to view alumni records.</p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default AlumniPage;
