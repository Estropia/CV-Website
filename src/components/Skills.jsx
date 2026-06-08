import './Skills.css';

const TECHNICAL_SKILLS = [
  {
    category: 'Frontend Technologies',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Mobile-first Design', 'Responsive Design Testing'],
  },
  {
    category: 'Quality Assurance',
    items: ['Manual Testing', 'Functional Testing', 'UI Testing', 'Component Testing', 'Bug Tracking'],
  },
  {
    category: 'Backend & Database',
    items: ['Java', 'Spring Boot', 'MySQL 8'],
  },
  {
    category: 'Development Tools',
    items: ['Git', 'GitHub', 'VSCode', 'Antigravity IDE'],
  },
  {
    category: 'Methodologies',
    items: ['Agile', 'Scrum Fundamentals'],
  },
];

const SOFT_SKILLS = [
  'Adaptability',
  'Teamwork',
  'Communication',
  'Time Management',
  'Resourcefulness',
  'Critical Thinking',
  'Creativity',
  'Open to Criticism',
];

function Skills() {
  return (
    <section id="skills" className="skills section reveal">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">
          What I <span className="accent">Work</span> With
        </h2>

        <div className="skills__grid">
          {/* Technical */}
          <div className="skills__card">
            <h3 className="skills__card-title">Technical Skills</h3>
            {TECHNICAL_SKILLS.map((group) => (
              <div key={group.category} className="skills__group">
                <h4 className="skills__group-label">{group.category}</h4>
                <div className="skills__tags">
                  {group.items.map((skill) => (
                    <span key={skill} className="skills__tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft */}
          <div className="skills__card">
            <h3 className="skills__card-title">Soft Skills</h3>
            <div className="skills__tags skills__tags--soft">
              {SOFT_SKILLS.map((skill) => (
                <span key={skill} className="skills__tag skills__tag--soft">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
