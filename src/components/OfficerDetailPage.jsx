import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Award, 
  Clock, 
  Star,
  Shield,
  User,
  Trophy
} from 'lucide-react';
import { allOfficersData } from '../data/battalionData';

const OfficerDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [officer, setOfficer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find officer by ID across all years
    let foundOfficer = null;
    for (const year in allOfficersData) {
      foundOfficer = allOfficersData[year].find(o => o.id === parseInt(id));
      if (foundOfficer) break;
    }
    
    setOfficer(foundOfficer);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <Shield className="spinner-icon" />
          <p>Loading officer details...</p>
        </div>
      </div>
    );
  }

  if (!officer) {
    return (
      <div className="officer-not-found">
        <div className="container">
          <div className="not-found-content">
            <User size={64} />
            <h2>Officer Not Found</h2>
            <p>The requested officer profile could not be found.</p>
            <Link to="/alumni" className="btn btn-primary">
              <ArrowLeft size={20} />
              Back to Alumni
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateServiceYears = (servingPeriod) => {
    const [start, end] = servingPeriod.split('-');
    return parseInt(end) - parseInt(start);
  };

  return (
    <motion.div 
      className="officer-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.section 
        className="officer-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <button 
            onClick={() => navigate(-1)}
            className="back-button"
          >
            <ArrowLeft size={20} />
            Back to Alumni
          </button>
          
          <div className="officer-header-content">
            <div className="officer-photo-section">
              <div className="officer-photo">
                <img 
                  src={officer.profilePicture} 
                  alt={officer.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/4a5d23/ffffff?text=No+Photo';
                  }}
                />
                <div className="rank-overlay">
                  <Star size={20} />
                  {officer.rank}
                </div>
              </div>
            </div>
            
            <div className="officer-basic-info">
              <h1 className="officer-name">{officer.name}</h1>
              <p className="officer-description">{officer.description}</p>
              
              <div className="quick-stats">
                <div className="quick-stat">
                  <Calendar className="stat-icon" />
                  <div>
                    <span className="stat-label">Service Period</span>
                    <span className="stat-value">{officer.servingPeriod}</span>
                  </div>
                </div>
                <div className="quick-stat">
                  <Clock className="stat-icon" />
                  <div>
                    <span className="stat-label">Years of Service</span>
                    <span className="stat-value">{calculateServiceYears(officer.servingPeriod)} Years</span>
                  </div>
                </div>
                <div className="quick-stat">
                  <Award className="stat-icon" />
                  <div>
                    <span className="stat-label">Awards & Honors</span>
                    <span className="stat-value">{officer.laurels?.length || 0} Awards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Detailed Information */}
      <motion.section 
        className="officer-details"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container">
          <div className="details-grid">
            {/* Personal Information */}
            <div className="detail-card">
              <h3 className="detail-card-title">
                <User className="card-icon" />
                Personal Information
              </h3>
              <div className="detail-items">
                <div className="detail-item">
                  <span className="item-label">Full Name:</span>
                  <span className="item-value">{officer.name}</span>
                </div>
                <div className="detail-item">
                  <span className="item-label">Rank:</span>
                  <span className="item-value rank-highlight">{officer.rank}</span>
                </div>
                <div className="detail-item">
                  <span className="item-label">Date of Birth:</span>
                  <span className="item-value">{formatDate(officer.birthDate)}</span>
                </div>
                <div className="detail-item">
                  <span className="item-label">Birth Place:</span>
                  <span className="item-value">
                    <MapPin size={16} />
                    {officer.birthPlace}
                  </span>
                </div>
              </div>
            </div>

            {/* Service Record */}
            <div className="detail-card">
              <h3 className="detail-card-title">
                <Shield className="card-icon" />
                Service Record
              </h3>
              <div className="detail-items">
                <div className="detail-item">
                  <span className="item-label">Date of Induction:</span>
                  <span className="item-value">{formatDate(officer.inductionDate)}</span>
                </div>
                <div className="detail-item">
                  <span className="item-label">Service Period:</span>
                  <span className="item-value">{officer.servingPeriod}</span>
                </div>
                <div className="detail-item">
                  <span className="item-label">Years of Service:</span>
                  <span className="item-value service-years">
                    {calculateServiceYears(officer.servingPeriod)} Years
                  </span>
                </div>
              </div>
            </div>

            {/* Awards and Laurels */}
            <div className="detail-card awards-card">
              <h3 className="detail-card-title">
                <Trophy className="card-icon" />
                Awards & Laurels
              </h3>
              {officer.laurels && officer.laurels.length > 0 ? (
                <div className="awards-list">
                  {officer.laurels.map((award, index) => (
                    <motion.div 
                      key={index}
                      className="award-item"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Star className="award-icon" />
                      <span className="award-name">{award}</span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="no-awards">No awards information available.</p>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="officer-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container">
          <div className="cta-content">
            <h3>Honor Their Service</h3>
            <p>Learn more about other distinguished officers who have served our battalion with honor.</p>
            <Link to="/alumni" className="btn btn-primary">
              View All Alumni
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default OfficerDetailPage;
