import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
  useScrollReveal();

  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="contact-body">
          <div className="contact-info">
            <div className="contact-intro">
              <h1 className="contact-title reveal">Get in Touch</h1>
              <h3 className="contact-subtitle reveal delay-1">I'd like to hear from you</h3>
              <p className="reveal delay-2">
                If you have any inquiries or just want to connect, reach out by clicking the handles below.
              </p>
            </div>
            <div className="reveal delay-3">
              <SocialIcons />
            </div>
            <div className="contact-phone reveal delay-4">
              <h3>OR</h3>
              <p>
                <strong>Call:</strong><br />
                0769363495<br />
                0750612271
              </p>
            </div>
          </div>
          <div className="contact-image-col reveal-right">
            <img
              src="/images/profile_1.jpeg"
              alt="Owen in office"
              className="contact-photo"
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
