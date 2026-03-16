import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-name">Owen Ombuge</div>
          <p className="footer-copyright">© {new Date().getFullYear()}, Built and designed by Owen Ombuge</p>
        </div>
        <div className="footer-links-section">
          <div className="footer-heading">Links</div>
          <div className="footer-linkages">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-social-section">
          <div className="footer-heading">Get in touch</div>
          <SocialIcons dark />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
