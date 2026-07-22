import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline, { TimelineItem } from '../components/Timeline';
import { useScrollReveal } from '../hooks/useScrollReveal';
const NaivasDetails = () => (
  <div className="project-detail">
    <p><em>Turning Everyday Shopping into Actionable Insights</em></p>
    <p><em>(A functional website has already been built using Node.js and supporting web technologies to demonstrate the concept.)</em></p>
    <h4>The Problem</h4>
    <p>
      Every day, hundreds of customers enter our stores with a simple hope — a list of what they need — yet many leave empty-handed.
      A customer walks in with a handwritten shopping list, picks a few items, looks frustrated and eventually leaves without buying.
      That moment isn't just a lost sale. It's a message: the item wasn't on the shelf, the customer couldn't get help in time, or the store didn't anticipate what customers actually wanted.
    </p>
    <p>
      Spread this across more than 50 branches and these small moments add up to massive invisible losses. This led me to one powerful realization:
    </p>
    <blockquote className="project-quote">
      Customers already know what they want — we just aren't capturing that information.
    </blockquote>
    <h4>Why It Matters</h4>
    <p>
      This Shopping List App is not just a digital list. It's a <strong>direct communication channel</strong> between customers and Naivas — a mini-CRM
      designed to convert customer intentions into real data that empowers decision-making. It solves three major retail problems:
    </p>
    <ul>
      <li><strong>Stock inaccuracies</strong> — know what people want before the shelf runs empty.</li>
      <li><strong>Staff inefficiencies</strong> — identify when stock was in the store but not replenished.</li>
      <li><strong>Customer preference blindness</strong> — see what items customers are consistently searching for.</li>
    </ul>
    <h4>What the App Offers</h4>
    <p><strong>For Customers:</strong> a clean way to create shopping lists, real prices to help them budget, an in-store checklist and a comment section for missing or out-of-stock items.</p>
    <p><strong>For Naivas:</strong> demand prediction, replenishment insights, dead-stock identification and trend analysis (health trends, seasonal demands, dietary choices, brand shifts) — turning branch managers into proactive decision-makers.</p>
    <h4>Technical Approach</h4>
    <p><strong>Frontend:</strong> React.js for web, React Native planned for mobile — lightweight components communicating via secure REST APIs.</p>
    <p><strong>Backend:</strong> Node.js + Express with a layered design (Routes → Controllers → Services → Database) for clean, maintainable, scalable code.</p>
    <p><strong>Database:</strong> PostgreSQL / MySQL — every table optimized for analytics, not just CRUD.</p>
    <p><strong>Security:</strong> JWT auth (access + refresh), BCrypt password hashing, CORS policies, rate limiting, validation middleware and role-based access.</p>
    <p><strong>Analytics:</strong> Phase 1 — SQL queries and Power BI dashboards for branch managers and inventory teams. Phase 2 — Python ML models to forecast demand, detect inefficiencies and predict stock-outs before they happen.</p>
    <h4>The Bigger Picture</h4>
    <p>
      A bridge between customer and retailer — a way to finally "hear" what customers need before they even step into the store.
      Reduces lost sales, improves loyalty, enhances operational efficiency and reinforces Naivas as a modern, data-driven retailer.
    </p>
  </div>
);

const MatCulture = () => (
  <div className = 'project-detail'>
    <h4>From Matatu Culture to Smart Mobility</h4>
    <p>
      inspired by the creativity and vibrant identity of Kenyan matatu culture, I set out to build a remote-controlled car that combines local design aesthetics with modern IoT technology. 
      This project explores how Wi-Fi and Bluetooth communication can be used to create an interactive smart vehicle while celebrating a uniquely Kenyan cultural icon.
      This project is not only a personal engineering challenge but also a long-term business idea aimed at creating opportunities for young Kenyan innovators. My goal is to develop affordable 
      IoT-powered remote cars inspired by matatu culture, build a team of talented young engineers and designers and use a dedicated website and digital platforms to market, showcase and eventually sell the products.
    </p>
    <h4>Technologies</h4>
  </div>
);

const CliApp = () => (
  <div className = 'project-detail'>
    <h4>Why This Project</h4>
    <p>
      This project was developed to demonstrate how modern cybersecurity principles can be applied in a lightweight terminal environment. The application enables users to exchange encrypted messages through a command-line interface, with a strong emphasis on confidentiality, integrity and controlled access. Messages are encrypted before transmission, 
      user credentials are securely hashed and communication sessions are authenticated to reduce the risk of unauthorized access. Beyond simple text messaging, the project explores key aspects of secure software engineering, including public/private key management, encrypted message storage, tamper detection using integrity checks and secure 
      socket-based communication between multiple users. The CLI design keeps the application resource-efficient and suitable for environments where graphical interfaces may be unavailable or unnecessary. Through this project, I gained hands-on experience with Python socket programming, cryptographic libraries, authentication workflows, 
      and the challenges of designing secure communication systems. It also strengthened my understanding of common attack vectors such as replay attacks, credential theft and man-in-the-middle interception and how defensive techniques can be incorporated into application design. I plan to continue expanding the platform with features such as 
      encrypted file sharing, group messaging, session key rotation, audit logging and a web-based management dashboard. My long-term vision is to turn this into a learning and collaboration platform that helps students and young developers gain practical experience in cybersecurity, cryptography and secure application development while contributing to open-source security tools.
    </p>
    <h4>Technologies</h4>
  </div>
);

const items: TimelineItem[] = [
  {
    status: '95% Complete',
    statusTone: 'completed',
    date: '2025 — Current',
    title: 'Naivas Customer Relationship & Shopping List App',
    subtitle: 'A mini-CRM that turns customer shopping intent into actionable retail insights',
    extra: <NaivasDetails />,
    tags: ['Node.js', 'Express', 'React', 'PostgreSQL', 'JWT', 'Power BI', 'Python', 'ML'],
  },
  {
    status: 'Ongoing',
    statusTone: 'ongoing',
    date: '2026',
    title: 'WIFI/BT Powered Remote Car — Kenyan Matatu Culture',
    subtitle: 'Hardware & software project blending IoT with local culture',
    extra: <MatCulture />,
    bullets: [
      'Configuring wireless communication between a mobile device and an ESP32.',
      'Controlling DC motors using PWM signals',
      'Managing power distribution for motors and microcontrollers',
      'Debugging hardware and software integration issues',
    ],
    tags: ['Arduino', 'C/C++', 'React', 'JavaScript', 'Python', 'ESP32', 'Bluetooth', 'WIFI', 'IOT'],
  },
  {
    status: 'Ongoing',
    statusTone: 'ongoing',
    date: '2026',
    title: 'Secure CLI Messaging Application',
    subtitle: 'A security-focused command-line messaging platform designed to explore practical cryptography, authentication and secure network communication.',
    extra: <CliApp />,
    tags: ['Python', 'Cybersecurity', 'Cryptography', 'Socket Programming', 'CLI', 'Encryption', 'Authentication'
]
  },
];
const Projects = () => {
  useScrollReveal();
  return (
    <>
      <Header />
      <main className="starfield-page">
        <span className="starfield-orb starfield-orb--right" aria-hidden="true" />
        <span className="starfield-orb starfield-orb--left" aria-hidden="true" />
        <div className="starfield-inner">
          <header className="starfield-header">
            <h1 className="starfield-title">Projects</h1>
            <p className="starfield-subtitle">
              Things I've built — from hardware experiments to full-stack products designed to solve real problems.
            </p>
          </header>
          <Timeline items={items} />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Projects;
