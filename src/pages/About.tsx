import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  useScrollReveal();

  return (
    <>
      <Header />
      <main className="about-page">
        <div className="about-body">
          <h1 className="about-title reveal">
            Tech helps me transform the world to a better place.
          </h1>
          <a href="/public/documents/owens_cv.pdf" className="cv-btn btn-press reveal delay-1">
            Download my CV
          </a>

          <h3 className="about-subtitle reveal">My tech growth journey</h3>
          <p className="reveal delay-1">
            Born in a humble African family where talents and career are rarely recognised at an early 
            age due to inadequate resources, inhibited an early realisation of my passion in tech. <strong>My
            tech journey started with hands on projects in animation</strong>. My friend, Jason, and I saw many 
            students struggling in comprehending set books thus animation was what sparked on our brains
            as the solution. Animation opened my interest in programming as I needed automation in animation 
            which needed programming skills. Python became my first language.
          </p>
          <p className="reveal delay-2">
            The love I had in physics made me explore IoT (Internet of Things) in depth. 
            <strong> I learnt Arduino, microcontrollers and electronics</strong>. Doing hands on projects and competing in science 
            congress made me yearn for more and more in the world of tech. I also explored the field of cyber security
            and data. <strong>My professional focus has been in software development, data space and cyber security to date</strong>.
          </p>

          <h3 className="about-subtitle reveal">Owen the developer</h3>
          <p className="reveal delay-1">
            <strong>A self-taught and formally trained developer with a strong sense of purpose and persistence</strong>. 
            My journey began with curiosity and limited resources, which taught me to be resourceful, 
            disciplined, and highly adaptive. 
          </p>
          <p className="reveal delay-2">
            <strong>I approach development as both an art and a craft</strong> — balancing logic, structure, and creativity 
            to bring ideas to life. I am particularly drawn to projects that blend hardware and software, 
            automation, and data-driven systems that solve real problems.
          </p>
          <p className="reveal delay-3">
            <strong>I believe in continuous learning and building from first principles</strong>. 
            Whether it's experimenting with microcontrollers, coding an inventory system, 
            or diving into data science, I focus on understanding the <strong>"why" behind the "how."</strong>
          </p>
          <p className="reveal delay-4">
            As a developer, <strong>I value clean, efficient code, clear communication, and integrity in my work</strong>. 
            I'm not afraid to start from scratch, learn through failure, or stay up late perfecting something that 
            matters.
          </p>

          <h3 className="about-subtitle reveal">Owen as a person</h3>
          <p className="reveal delay-1">
            I am someone who believes in growth through perseverance. I was raised in a humble background 
            that taught me responsibility early and shaped my mindset of self-reliance and gratitude. 
            Every challenge I've faced — from working night shifts to studying and learning on my own — has 
            strengthened my belief that consistency beats talent. 
          </p>
          <p className="reveal delay-2">
            I am naturally introverted, reflective, and focused, but I open up through creativity — 
            whether in code, design, or drawing. I find peace in building things that have meaning, 
            learning something new every day, and helping others when I can.
          </p>
          <p className="reveal delay-3">
            I am driven by curiosity and a quiet ambition to change my life and those around me through 
            technology. My journey isn't just about success; it's about progress, discipline, and becoming the 
            kind of person who can create opportunities where none seem to exist.
          </p>
          <p className="reveal delay-4">
            I believe in working hard, staying humble, and constantly improving — 
            both as a developer and as a person.
          </p>
          <p className="about-cta reveal delay-5">
            <strong>Built from persistence, powered by purpose.<br />Reach out! Let's connect, collaborate and build together.</strong>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
