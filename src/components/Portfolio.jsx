import { useState } from 'react';
import './Portfolio.css';

const SHS_PROJECTS = [
  {
    title: 'Election Website',
    desc: 'A website built for the 2022 Elections, presenting candidate information and election details.',
    img: `${import.meta.env.BASE_URL}images/election-img.png`,
    category: 'website',
    tools: 'HTML, CSS',
  },
  {
    title: 'School Website',
    desc: 'A promotional website for CIIT Senior High School, highlighting programs and campus information.',
    img: `${import.meta.env.BASE_URL}images/school-img.png`,
    category: 'website',
    tools: 'HTML, CSS',
  },
  {
    title: 'Motorcycle Promo Website',
    desc: 'A promotional landing page for a motorcycle brand, focusing on product showcase and visual appeal.',
    img: `${import.meta.env.BASE_URL}images/Motor-img.png`,
    category: 'website',
    tools: 'HTML, CSS',
  },
  {
    title: 'Student System',
    desc: 'A student management system with a graphical user interface built using Java Swing.',
    img: `${import.meta.env.BASE_URL}images/java-UI-img.png`,
    category: 'code',
    tools: 'Java, Java Swing',
  },
  {
    title: 'Cashier System',
    desc: 'A point-of-sale cashier system handling transactions and product management.',
    img: `${import.meta.env.BASE_URL}images/cashier-admin-img.png`,
    category: 'code',
    tools: 'C++',
  },
];

const CAPSTONE_STACK = [
  'HTML5',
  'CSS3',
  'Bootstrap 5',
  'JavaScript',
  'Java',
  'Spring Boot',
  'Hibernate',
  'MySQL 8',
  'Docker',
];

const FILTERS = ['all', 'website', 'code'];

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? SHS_PROJECTS
      : SHS_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="portfolio section reveal">
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">
          My <span className="accent">Work</span>
        </h2>

        {/* ---- Featured: Capstone ---- */}
        <article className="portfolio__featured">
          <div className="portfolio__featured-accent" aria-hidden="true" />
          <span className="portfolio__featured-badge">Featured Project</span>

          <div className="portfolio__featured-grid">
            <div className="portfolio__featured-image">
              <img
                src={`${import.meta.env.BASE_URL}images/capstone-project.png`}
                alt="Student Records Management System dashboard"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="portfolio__featured-content">
              <h3>Student Records Management System</h3>
              <p className="portfolio__featured-role">
                Lead Developer — Capstone Project
              </p>

              <div className="portfolio__featured-narrative">
                <div className="portfolio__narrative-block">
                  <h4>The Problem</h4>
                  <p>
                    Registrar offices managing student records manually —
                    scattered files, slow lookups, no centralized system for
                    organizing and retrieving data.
                  </p>
                </div>
                <div className="portfolio__narrative-block">
                  <h4>The Approach</h4>
                  <p>
                    Built a centralized web application that digitizes all
                    student records. Implemented file upload and download, batch
                    processing, full CRUD management, and search functionality
                    for registrar staff.
                  </p>
                </div>
                <div className="portfolio__narrative-block">
                  <h4>The Result</h4>
                  <p>
                    A complete records management system — faster lookups,
                    organized data, reliable batch file downloads, and a clean
                    interface for daily registrar operations.
                  </p>
                </div>
              </div>

              <div className="portfolio__featured-stack">
                {CAPSTONE_STACK.map((tech) => (
                  <span key={tech} className="portfolio__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/MarkFerreras/AnihanProject"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__featured-link"
              >
                <i className="fab fa-github" aria-hidden="true" />
                View Repository
              </a>
            </div>
          </div>
        </article>

        {/* ---- SHS Projects ---- */}
        <div className="portfolio__shs">
          <h3 className="portfolio__shs-title">Senior High School Projects</h3>

          <div className="portfolio__filters" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`portfolio__filter-btn${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="portfolio__grid">
            {filteredProjects.map((project) => (
              <article key={project.title} className="portfolio__card">
                <div className="portfolio__card-image">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="portfolio__card-overlay">
                    <h4>{project.title}</h4>
                    <p>{project.desc}</p>
                    <span className="portfolio__card-tools">{project.tools}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
