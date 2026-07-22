import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/education', label: 'Education' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo">
          Owen Ombuge
        </Link>
        <div className="nav-right">
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
