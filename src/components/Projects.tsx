import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section section">
      <div className="projects-inner">
        <h2 className="projects-heading reveal">
          <span className="accent-text">Projects</span>
        </h2>
        <div className="project-card reveal-scale delay-1">
          <div className="project-content">
            <span className="project-label">Hardware & Software Project</span>
            <h3 className="project-title">
              WIFI/BT Powered Remote Car Mimicking Kenyan Matatu Culture
            </h3>
            <div className="project-tags">
              {['Arduino', 'C++/C', 'React', 'JavaScript', 'Python'].map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
            <a href="/projects/iot" className="project-btn btn-press">
              <span className="project-btn-front">View project</span>
              <span className="project-btn-shadow">View project</span>
            </a>
          </div>
          <div className="project-image">
            <img
              src="/images/car2.jpeg"
              alt="WiFi/BT powered remote car"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
