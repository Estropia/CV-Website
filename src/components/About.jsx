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
              A friendly, hard-working programmer currently pursuing a BS in
              Information Technology. I specialize in front-end development and
              bug testing — building web experiences that work right and look
              clean. Proficient with C++, Java, JavaScript, and SQL. Comfortable
              adapting to different environments and teams.
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
                  <h4>Landing Page Commission</h4>
                  <span className="about__timeline-meta">
                    ED-FIRM INC. — September 2022
                  </span>
                  <p>
                    Developed a landing page for the company, used as a fallback
                    page for customers with overdue internet service payments.
                    Delivered on time — the client approved and deployed it
                    company-wide.
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
                  <h4>CIIT Senior High School, Inc.</h4>
                  <span className="about__timeline-meta">2021 — Present</span>
                </div>
                <div className="about__timeline-item">
                  <h4>Siena College of Taytay</h4>
                  <span className="about__timeline-meta">2017 — 2021</span>
                </div>
                <div className="about__timeline-item">
                  <h4>Philippians Montessori School Inc.</h4>
                  <span className="about__timeline-meta">2014 — 2017</span>
                </div>
                <div className="about__timeline-item">
                  <h4>Young St. John Integrated School</h4>
                  <span className="about__timeline-meta">2011 — 2014</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__cv">
          <a
            href="https://drive.google.com/file/d/1JGXIJAF5xEKHHBa4usuUXhiU_7eOmQVq/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="about__cv-btn"
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
