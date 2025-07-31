import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Calendar, Users, ChevronRight, Star, Shield, Sword } from 'lucide-react';
import { battalionHonors, latestNews } from '../data/battalionData';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <motion.h1 
                className="hero-title"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                66th Battalion
                <span className="hero-subtitle">Courage • Honor • Victory</span>
              </motion.h1>
              <motion.p 
                className="hero-description"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Established in 1966, our battalion has served with distinction for over five decades,
                upholding the highest traditions of the Indian Army with unwavering dedication and valor.
              </motion.p>
              <motion.div 
                className="hero-actions"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/alumni" className="btn btn-primary">
                  <Users size={20} />
                  View Alumni
                  <ChevronRight size={16} />
                </Link>
                <button className="btn btn-secondary">
                  <Award size={20} />
                  Our Honors
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Battalion Stats */}
      <motion.section 
        className="section stats-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="stats-grid">
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-icon">
                <Calendar className="icon" />
              </div>
              <div className="stat-content">
                <h3>58+ Years</h3>
                <p>Of Distinguished Service</p>
              </div>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-icon">
                <Users className="icon" />
              </div>
              <div className="stat-content">
                <h3>2000+</h3>
                <p>Brave Officers Served</p>
              </div>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-icon">
                <Award className="icon" />
              </div>
              <div className="stat-content">
                <h3>145+</h3>
                <p>Gallantry Awards</p>
              </div>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-icon">
                <Shield className="icon" />
              </div>
              <div className="stat-content">
                <h3>12</h3>
                <p>Major Operations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Battalion Honors */}
      <motion.section 
        className="section honors-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2 className="section-title text-center" variants={itemVariants}>
            <Sword className="title-icon" />
            Battalion Honors & Achievements
          </motion.h2>
          <div className="honors-grid">
            {battalionHonors.map((honor) => (
              <motion.div 
                key={honor.id} 
                className="honor-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="honor-title">{honor.title}</h3>
                <div className="honor-awards">
                  {honor.awards.map((award, awardIndex) => (
                    <span key={awardIndex} className="award-badge">
                      <Star size={16} />
                      {award}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Latest News */}
      <motion.section 
        className="section news-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2 className="section-title text-center" variants={itemVariants}>
            Latest News & Updates
          </motion.h2>
          <div className="news-grid">
            {latestNews.map((news) => (
              <motion.article 
                key={news.id} 
                className="news-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="news-image">
                  <img src={news.image} alt={news.title} />
                </div>
                <div className="news-content">
                  <div className="news-date">
                    <Calendar size={16} />
                    {new Date(news.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-summary">{news.summary}</p>
                  <button className="read-more">
                    Read More
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
