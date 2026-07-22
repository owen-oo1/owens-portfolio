import './Projects.css';

const Projects_contents = (props) => {
  return (

    <div className="project-card reveal-scale delay-1">
        <div className="project-content">
        <div className="status animate-in">
            <span className="status-dot" />
            <span className="status-text">{props.status}</span>
        </div>
        <span className="project-label">{props.category}</span>
        <h3 className="project-title">{props.title}</h3>
        <div style = {{marginBottom: '1rem'}}><a href = '/projects'>Read More → </a></div>
        <div className="project-tags">
            {props.tags.map((tag) => (
            <span key={tag} className="skill-tag">{tag}</span>
            ))}
        </div>
        <a href= {props.href} className="project-btn btn-press">
            <span className="project-btn-front">View project</span>
            <span className="project-btn-shadow">View project</span>
        </a>
        </div>
        <div className="project-image">
        
        <img
            src={props.image}
            alt={props.alt}
            loading="lazy"
        />
        </div>
        
    </div>
    
  );
};

export default Projects_contents;
