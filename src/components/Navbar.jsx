import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/alumni', label: 'Alumni' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <Shield className="brand-icon" />
            <span className="brand-text">
              <strong>66th Battalion</strong>
              <small>Indian Army</small>
            </span>
          </Link>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
