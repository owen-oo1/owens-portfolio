import './Projects.css';
import Projects_contents from './projects_contents';

const Projects = () => {
  return (
    <section className="projects-section section">
      <div className="projects-inner">
        <h2 className="projects-heading reveal">
          <span className="accent-text">Projects</span>
        </h2>
        <Projects_contents 
          category = 'Hardware & Software Project'
          title = 'WIFI/BT Powered Remote Car Mimicking Kenyan Matatu Culture'
          tags = {['Arduino', 'C++/C', 'React', 'JavaScript', 'Python']}
          image = "/images/car2.jpeg"
          alt = "WiFi/BT powered remote car"
          href = "/projects/iot"
        />
        <Projects_contents 
          category = 'Full-Stack Web & Mobile Application'
          title = 'Smart Shopping List App for Retail Analytics'
          tags = {['TypeScript', 'PostgreSQL', 'HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'Express.js']}
          image = "/images/retail_main.jpeg"
          alt = "A man using a smart shopping list app in a supermarket"
          href = "/projects/retail"
        />
      </div>
    </section>
    
  );
};

export default Projects;
