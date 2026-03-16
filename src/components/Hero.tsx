import SocialIcons from './SocialIcons';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-status animate-in">
          <span className="status-dot" />
          Available for new projects
        </div>
        <h1 className="hero-title animate-in animate-delay-1">
          <span>Hi,</span>
          <span>I'm</span>
          <span>Owen</span>
          <span className="hero-divider">|</span>
          <span className="hero-accent">Software</span>
          <span className="hero-accent">Engineer</span>
        </h1>
        <div className="animate-in animate-delay-2">
          <SocialIcons dark />
        </div>
        <p className="hero-tagline animate-in animate-delay-3">
          Code 👨‍💻. Build 🛠️. Solve 🧠. Passionate developer and data enthusiast 📈 delivering real 
          world impact through practical tech innovation
        </p>
      </div>
    </section>
  );
};

export default Hero;
