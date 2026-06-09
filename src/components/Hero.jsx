import './Hero.css';

function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top =
        target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__inner container">
        <div className="hero__content">
          <span className="hero__tag">// Front-End Developer &amp; Bug Tester</span>
          <h1 className="hero__name">
            Mark{' '}
            <span className="accent">Ferreras</span>
          </h1>
          <p className="hero__intro">
            3rd&nbsp;year BSIT student building clean, functional web
            experiences. I turn ideas into polished interfaces — and hunt
            bugs before they ship.
          </p>
          <a
            href="#portfolio"
            className="hero__cta"
            onClick={(e) => scrollTo(e, '#portfolio')}
          >
            View My Work
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </div>

        <div className="hero__image">
          <div className="hero__image-frame">
            <img
              src={`${import.meta.env.BASE_URL}images/profile-img.png`}
              alt="Mark Nielsen E. Ferreras"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
