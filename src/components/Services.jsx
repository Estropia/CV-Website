import './Services.css';

const SERVICES = [
  {
    icon: 'fas fa-newspaper',
    title: 'Blog Websites',
    description:
      'Clean, content-focused blog sites with modern layouts and easy navigation — built to keep readers engaged and coming back.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Informational Websites',
    description:
      'Professional, well-structured informational sites that communicate clearly and build credibility for your organization.',
  },
  {
    icon: 'fas fa-user-circle',
    title: 'Personal Websites',
    description:
      'Custom personal sites and portfolios that showcase your work and personality with a polished, professional feel.',
  },
];

function Services() {
  return (
    <section id="services" className="services section reveal">
      <div className="container">
        <span className="section-label">Services</span>
        <h2 className="section-title">
          What I <span className="accent">Offer</span>
        </h2>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <article key={i} className="services__card">
              <div className="services__icon" aria-hidden="true">
                <i className={service.icon} />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
