import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline, { TimelineItem } from '../components/Timeline';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Warehouse } from 'lucide-react';
const items: TimelineItem[] = [
  {
    status: 'Ongoing',
    statusTone: 'ongoing',
    date: '2023 — 2027',
    title: 'Bachelor of Science in Business Information Technology (BBIT)',
    subtitle: 'The cooperative University of Kenya',
    bullets: [
      'Theoretical foundations of computing as well as statistical methods of data analysis and decision making.',
      'Built a strong foundation in mathematical concepts relevant to statistics and computer science, such as linear algebra, calculus, and discrete mathematics.',
      'Broad introduction to the fundamentals of computer science including software, systems, data structures and algorithms, programming languages, machine architecture.',
      'Developed a strong foundation in business information systems, database management and software development principles.',
      'Developed a strong foundation in business information systems, database management and software development principles.',
      'Applied statistical and quantitative methods for data analysis, reporting and business decision-making.'
    ],
    tags: ['Statistics', 'Data Analysis', 'Programming', 'Mathematics', 'Research', 'Calculus', 'Linear Algebra', 'Business Analysis'],
  },
  {
    status: 'Ongoing',
    statusTone: 'ongoing',
    date: 'July 2026 — Dec 2026',
    title: 'Cyber Security Essential 1 and Introduction to Cyber Security',
    subtitle: 'Cisco Networking Academy',
    bullets: [
      'Fundamentals of cyber security, threat landscapes and defense principles.',
      'Hands-on labs covering network security, cryptography basics and secure system design.',
    ],
    tags: ['Cyber Security', 'Networking', 'Cryptography'],
  },
  {
    status: 'Ongoing',
    statusTone: 'ongoing',
    date: 'March 2026 — aug 2026',
    title: 'Data Engineering',
    subtitle: 'ALX Africa',
    bullets: [
      'Designed and implemented ETL pipelines to extract, transform and load data into PostgreSQL databases.',
      'Automated and scheduled data workflows using Apache Airflow for reliable pipeline execution',
      'Developed Python scripts for data ingestion, cleaning, transformation and validation.',
      'Wrote optimized SQL queries to support data extraction, aggregation and reporting requirements.',
      'Containerized data engineering workflows using Docker to ensure consistent and reproducible development environments.'
    ],
    tags: ['Python', 'Apache Airflow', 'Docker', 'ETL/ELT', 'CI/CD Data Pipelines', 'Data Warehousing/Lakes', 'Apache Spark'
]
  },
  {
    status: 'Completed',
    statusTone: 'completed',
    date: 'March 2025 — Dec 2025',
    title: 'Data Science',
    subtitle: 'ALX Africa',
    bullets: [
      'Performed exploratory data analysis (EDA) to uncover trends, patterns, and anomalies in real-world data.',
      'Performed data cleaning, transformation and exploratory analysis on real-world datasets using Python, Pandas and NumPy.',
      'Implemented and evaluated machine learning models using Scikit-learn, including classification and regression algorithms.',
      'Designed visual reports and dashboards to present insights and support evidence-based decision-making using SQL and data visualization tools.',
      'Created clear data visualizations and reports using Matplotlib and Seaborn to communicate insights effectively.'
    ],
    tags: ['Python', 'Jupyter', 'Statistics', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
  },
  {
    status: 'Completed',
    statusTone: 'completed',
    date: 'March 2025 — June 2025',
    title: 'Data Analytics',
    subtitle: 'ALX Africa',
    bullets: [
      'Cleaned and transformed raw data to improve data quality and readiness for analysis.',
      'Wrote SQL queries to extract, join, and aggregate data from relational databases.',
      'Built interactive Power BI dashboards and reports to monitor KPIs and business performance.',
      'Conducted exploratory data analysis to identify trends, patterns and actionable insights.',
      'Presented data-driven recommendations using visualizations and concise analytical reports.'
    ],
    tags: ['SQL', 'Power BI', 'Excel', 'Data Visualization', 'Business Analytics'
]
  },
  {
    status: 'Completed',
    statusTone: 'completed',
    date: 'Feb 2023 — Dec 2024',
    title: '100 Days of Web Development Bootcamp',
    subtitle: 'Udemy',
    bullets: [
      'Built responsive and accessible web applications using HTML5, CSS3, Flexbox, CSS Grid, Bootstrap and modern JavaScript.',
      'Developed full-stack applications with Node.js, Express, EJS, PostgreSQL and RESTful APIs, implementing complete CRUD functionality.',
      'Implemented secure authentication and authorization systems, applying best practices for user management, session handling and application security.',
      'Created dynamic, component-based user interfaces with React while integrating client-side and server-side technologies into cohesive applications.',
      'Applied Git and GitHub for version control, collaborative development and maintaining professional software development workflows.',
      'Explored decentralized application (dApp) development by integrating Web3 concepts and the Internet Computer (ICP) blockchain into modern web applications.',
      'Completed hands-on projects that strengthened problem-solving, debugging, deployment and full-stack software engineering skills through real-world development scenarios.'
    ],
    tags: ['HTML', 'CSS', 'FLEXBOX & GRID', 'Bootstrap', 'Javascript', 'Nodejs', 'JQuery', 'Express', 'Ejs', 'Git & Github', 'REST', 'PostegreSQL', 'Authentication & security', 
            'React', 'Web3', 'ICP Blockchain'
]
  },
];
const Education = () => {
  useScrollReveal();
  return (
    <>
      <Header />
      <main className="starfield-page">
        <span className="starfield-orb starfield-orb--right" aria-hidden="true" />
        <span className="starfield-orb starfield-orb--left" aria-hidden="true" />
        <div className="starfield-inner">
          <header className="starfield-header">
            <h1 className="starfield-title">Education</h1>
            <p className="starfield-subtitle">
              A record of the formal and self-directed learning that shaped how I think and build.
            </p>
          </header>
          <Timeline items={items} />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Education;
