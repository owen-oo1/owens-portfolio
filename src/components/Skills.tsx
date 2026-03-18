import { Link } from "react-router-dom";
import './Skills.css';

const skills = [
  { name: 'PowerBI', category: 'Analytics' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'React', category: 'Frontend' },
  { name: 'C/C++', category: 'IoT' },
  { name: 'JavaScript', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend/Analytics' },
  { name: 'Machine Learning', category: 'AI' },
  { name: 'REST', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Shopify', category: 'CMS' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Next.js', category: 'Hybrid' },
  { name: 'Typescript', category: 'Hybrid' }
];

const Skills = () => {
  return (
    <section className="skills-section section">
      <div className="skills-inner">
        <div className="skills-grid">
          <div className="skills-image-col reveal-left">
            <img
              src="/images/pic19.jpg"
              alt="Owen Ombuge"
              className="skills-photo"
              loading="lazy"
            />
          </div>
          <div className="skills-content-col">
            <h2 className="skills-heading reveal">
              My <span className="accent-text">Skills</span>
            </h2>
            <div className="skills-tags reveal delay-1">
              {skills.map((skill) => (
                <span key={skill.name} className="skill-tag" title={skill.category}>
                  {skill.name}
                </span>
              ))}
            </div>
            <h3 className="skills-lead reveal delay-2">I turn ideas into code and data into insights.</h3>
            <p className="reveal delay-3">
              My journey in tech started in high school. My friend (Jason) and I decided 
              to learn and afterwards create an animation using Blender 3D on a set book (Blossoms of The Savannah).
              In the process of learning animation we explored the big tech realm and that's when we discovered 
              that there's a lot we didn't know and were eager to explore.
            </p>
            <Link to="/about" className="read-more-link reveal delay-4">
              Keep reading about me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
