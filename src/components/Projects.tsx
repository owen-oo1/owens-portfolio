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
          status = 'Active development'
          category = 'Hardware & Software Project'
          title = 'WIFI/BT Powered Remote Car Mimicking Kenyan Matatu Culture'
          tags = {['Arduino', 'C++/C', 'React', 'JavaScript', 'Python']}
          image = "/images/car2.jpeg"
          alt = "WiFi/BT powered remote car"
          href = "https://github.com/owen-oo1/"
        />
        <Projects_contents 
          status = 'Current'
          category = 'Full-Stack Web & Mobile Application'
          title = 'Smart Shopping List App for Retail Analytics'
          tags = {['TypeScript', 'PostgreSQL', 'HTML', 'JavaScript', 'CSS', 'Tailwind CSS', 'Express.js']}
          image = "/images/retail_main.jpeg"
          alt = "A screen of a message cli app"
          href = "https://github.com/owen-oo1/naivas-shopping-list-app"
        />
        <Projects_contents 
          status = 'Planned'
          category = '<> Backend'
          title = 'Highly Secured CLI Based Messaging App'
          tags = {['Python', 'Cybersecurity', 'Cryptography', 'Socket Programming', 'CLI', 'Encryption', 'Authentication', 'Linux']}
          image = "/images/cli.jpeg"
          alt = "A man using a smart shopping list app in a supermarket"
          href = "https://github.com/owen-oo1/"
        />
      </div>
    </section>
    
  );
};

export default Projects;
