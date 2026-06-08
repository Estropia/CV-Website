import './About.css';

function About() {
  return (
    <section id="about" className="about section reveal">
      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">
          Get to <span className="accent">Know</span> Me
        </h2>

        <div className="about__grid">
          {/* Left — Summary */}
          <div className="about__summary">
            <p>
              Front-End Developer with 2+ years building responsive web applications 
              using HTML5, CSS3, JavaScript, and Bootstrap. Currently leading a 
              full-stack Student Records Management System project while completing 
              my BS Information Technology degree.
            </p>
            <p>
              I help teams deliver quality user interfaces through both development 
              and QA testing experience.
            </p>
            <blockquote className="about__objective">
              To continuously improve my skills and gain industry experience as a
              developer, widening my horizon through real-world projects and
              collaboration.
            </blockquote>
          </div>

          {/* Right — Experience & Education */}
          <div className="about__details">
            <div className="about__card">
              <h3 className="about__card-title">
                <i className="fas fa-briefcase" aria-hidden="true" />
                Experience
              </h3>
              <div className="about__timeline">
                <div className="about__timeline-item">
                  <h4>Lead Developer</h4>
                  <span className="about__timeline-meta">
                    Student Records Management System (SRMS) Project — Jan 2026 – Present
                  </span>
                  <p>
                    Developing a full-stack web application with CSS and Bootstrap front-end, 
                    integrating Java Spring Boot APIs and MySQL 8 database. Wrote functional 
                    testing cases to validate input fields and form submissions, tracking bug rate improvements. 
                    Collaborated directly with client stakeholders to deliver functional specifications on schedule.
                  </p>
                </div>
                <div className="about__timeline-item">
                  <h4>Front-End Developer (Commission)</h4>
                  <span className="about__timeline-meta">
                    Ed-Firm Inc. — Sep 2022 – Sep 2022
                  </span>
                  <p>
                    Built a responsive internet service redirection landing page using HTML, CSS, 
                    and JavaScript with adaptive design for mobile and desktop. Collaborated directly 
                    with the client to gather functional requirements, ensuring a user-friendly layout.
                  </p>
                </div>
              </div>
            </div>

            <div className="about__card">
              <h3 className="about__card-title">
                <i className="fas fa-graduation-cap" aria-hidden="true" />
                Education
              </h3>
              <div className="about__timeline">
                <div className="about__timeline-item">
                  <h4>Bachelor of Science in Information Technology</h4>
                  <span className="about__timeline-meta">
                    University of Asia & The Pacific — 2023 – Present
                  </span>
                  <p style={{ fontSize: 'var(--font-small)', color: 'var(--text-secondary)', marginTop: 'var(--space-1)', lineHeight: '1.4' }}>
                    Expected Graduation: 2027<br />
                    Relevant Coursework: Web Development, Software Engineering, Database Systems<br />
                    Capstone Project: Leading development of Student Records Management System using Java Spring Boot and MySQL
                  </p>
                </div>
                <div className="about__timeline-item">
                  <h4>Senior High School Diploma</h4>
                  <span className="about__timeline-meta">
                    CIIT Senior High School, Inc. — 2021 – 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__cv">
          <a
            href={`${import.meta.env.BASE_URL}cv/Ferreras-Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="about__cv-btn"
            download="Mark-Ferreras-Resume.pdf"
          >
            <i className="fas fa-download" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
