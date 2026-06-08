import './Contact.css';

const CONTACTS = [
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    value: '+63 906 468 2408',
    href: 'tel:+639064682408',
  },
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'mark.ferreras@ciit.edu.ph',
    href: 'mailto:mark.ferreras@ciit.edu.ph',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Location',
    value: 'Taytay, Rizal, Philippines',
    href: null,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact section reveal">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">
          Get in <span className="accent">Touch</span>
        </h2>

        <div className="contact__grid">
          {CONTACTS.map((c) => {
            const inner = (
              <>
                <div className="contact__icon" aria-hidden="true">
                  <i className={c.icon} />
                </div>
                <h3>{c.label}</h3>
                <p>{c.value}</p>
              </>
            );

            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="contact__card contact__card--link"
                aria-label={`${c.label}: ${c.value}`}
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className="contact__card">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
