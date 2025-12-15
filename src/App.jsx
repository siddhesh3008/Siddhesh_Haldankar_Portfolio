import { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faBars, faTimes, faMapMarkerAlt, faCode, faServer, faLayerGroup, faCubes, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const palette = {
  light: { label: 'Light', icon: '☀️' },
  dark: { label: 'Dark', icon: '🌙' }
};

const skills = [
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C', logo: '/images/c-logo.png' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' }
];

const services = [
  {
    title: 'Frontend Development',
    desc: 'Responsive, performant web applications with React and modern JavaScript',
    icon: faCode,
    number: '01'
  },
  {
    title: 'Backend Development',
    desc: 'Scalable REST APIs and microservices with Java, Spring Boot',
    icon: faServer,
    number: '02'
  },
  {
    title: 'Full-Stack Solutions',
    desc: 'End-to-end application development from database to deployment',
    icon: faLayerGroup,
    number: '03'
  },
  {
    title: 'Blockchain Integration',
    desc: 'Smart contract development and decentralized application solutions',
    icon: faCubes,
    number: '04'
  }
];

const projects = [
  {
    title: 'Online Food Ordering System',
    desc: 'Full-stack platform with JWT authentication, React UI, Spring Boot backend, and SQL database.',
    tech: ['Spring Boot', 'React', 'Tailwind', 'JWT', 'REST API', 'SQL'],
    link: 'https://github.com/siddhesh3008/Spring-Boot_Food-Ordering-System',
    image: '/images/food-ordering.png',
    category: 'Full-Stack'
  },
  {
    title: 'Student System Management WebApp',
    desc: 'Layered architecture web application with Spring Boot backend and React frontend interface.',
    tech: ['Spring Boot', 'React', 'REST', 'MySQL'],
    link: 'https://github.com/siddhesh3008/StudentSystemFullStackApp',
    image: '/images/student-system.png',
    category: 'Full-Stack'
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather application with location-based forecasts using OpenWeatherMap API integration.',
    tech: ['JavaScript', 'API', 'UI'],
    link: 'https://github.com/siddhesh3008/weather-app',
    image: '/images/weather-app.png',
    category: 'Web App'
  },
  {
    title: 'Enotes & Password Manager',
    desc: 'Secure Django application for encrypted note-taking and credential storage with authentication.',
    tech: ["Python", "Django", "Security", "SQLite"],
    link: 'https://github.com/siddhesh3008/enotes-password-manager',
    image: '/images/enotes.png',
    category: 'Web App'
  },
  {
    title: 'Scientific Calculator',
    desc: 'Java Swing desktop calculator with advanced scientific functions and intuitive user interface.',
    tech: ['Java', 'Swing', 'UI'],
    link: 'https://github.com/siddhesh3008/Scientific-Calculator',
    image: '/images/scientific-calculator.png',
    category: 'Desktop App'
  },
  {
    title: 'Flight Management System',
    desc: 'C++ desktop application managing flight bookings, route scheduling, and customer complaint handling.',
    tech: ['C++', 'Data Structures'],
    link: 'https://github.com/siddhesh3008/flight-management-system',
    image: '/images/flight-management-system.png',
    category: 'Desktop App'
  },
  {
    title: 'Voice Assistant',
    desc: 'Intelligent Python voice assistant with speech recognition, natural language processing, and API.',
    tech: ['Python', 'Speech Recognition', 'NLP', 'API'],
    link: 'https://github.com/siddhesh3008/voice-assistant',
    image: '/images/voice-assistant.png',
    category: 'AI/ML'
  }
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddhesh-haldankar' },
  { label: 'GitHub', href: 'https://github.com/siddhesh3008' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1EhvHLRUu-XIChpo0j5dRv8JHjBydH64y/view?usp=sharing' }
];

const heroLogo = '/images/hero_illustration.png';
const portraitUrl = '/images/hero__image.png';

const ProjectCard = ({ project, index }) => (
  <a className="card" href={project.link} target="_blank" rel="noreferrer">
    <div
      className="project-media"
      style={{
        boxShadow: index % 2 === 0 ? 'inset 0 0 0 1px rgba(124,58,237,0.12)' : undefined
      }}
    >
      {project.image ? (
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
      ) : (
        <span className="pill">View GitHub</span>
      )}
    </div>
    <div className="project-title">{project.title}</div>
    <div className="project-desc">{project.desc}</div>
    <div className="tag-row">
      {project.tech.map((t) => (
        <span key={t} className="pill tech-badge">
          {t}
        </span>
      ))}
    </div>
  </a>
);

function App() {
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle body class when menu opens/closes
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => document.body.classList.remove("menu-open");
  }, [mobileMenuOpen]);

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroHeadline = useMemo(
    () => 'Building scalable web applications with clean code and exceptional user experiences. Let\'s turn your ideas into reality.',
    []
  );

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const data = new FormData(e.target);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    setTimeout(() => {
      setFormStatus('success');
      e.target.reset(); // Clear the form fields
      setTimeout(() => {
        window.location.href = `mailto:siddhesh.haldankar30@gmail.com?subject=${subject}&body=${body}`;
        setFormStatus(''); // Reset form status after redirect
      }, 1000);
    }, 500);
  };

  return (
    <div className="page">

      <header>
        <div className="brand">Siddhesh Haldankar</div>
        <div className="topbar-right">
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <button className="nav-close" onClick={toggleMobileMenu} aria-label="Close menu">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <a href="#home" onClick={handleNavClick}>Home</a>
            <a href="#about" onClick={handleNavClick}>About</a>
            <a href="#skills" onClick={handleNavClick}>Skills</a>
            <a href="#services" onClick={handleNavClick}>Services</a>
            <a href="#projects" onClick={handleNavClick}>Projects</a>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </nav>
          <button
            className="toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span>{palette[theme].icon}</span>
          </button>
          <button
            className="hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </header>
      {mobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu}></div>}

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-text">
            <h1>Hi, I'm Siddhesh Haldankar</h1>
            <h2>Full-Stack Developer | Java • Spring Boot • React</h2>
            <p>{heroHeadline}</p>
            <div className="achievement-badges">
              <div className="badge-item">
                <span className="badge-icon">🚀</span>
                <span className="badge-text">7+ Projects</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">💼</span>
                <span className="badge-text">Full-Stack Expert</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">⭐</span>
                <span className="badge-text">Clean Code</span>
              </div>
            </div>
            <div className="hero-cta">
              <a className="btn primary" href="#projects">
                Explore Projects
              </a>
              <a className="btn secondary" href="#contact">
                Let's Connect
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <img src={heroLogo} alt="Professional developer workspace illustration" fetchpriority="high" decoding="async" />
          </div>
        </section>

        <section className="section about" id="about">
          <div className="portrait">
            <img src={portraitUrl} alt="Siddhesh portrait" loading="eager" decoding="async" />
          </div>
          <div className="bio">
            <h3>About Me</h3>
            <p>
              Hi! I’m Siddhesh M. Haldankar, a passionate Full-Stack Developer with a strong foundation in Java, Spring Boot, React, and modern cloud technologies. My journey in tech started with a deep curiosity for how things work, eventually leading me to become the Computer Science topper in junior college—and since then, I’ve been obsessed with building meaningful digital experiences.
            </p>
            <p>
              I believe in staying adaptable in a fast-moving industry, continuously sharpening my skills and exploring emerging technologies like Generative AI and cloud-native development. Whether it's crafting seamless front-end interfaces or developing robust back-end systems, I love turning ideas into real, functional solutions.
            </p>
            <p>
              Feel free to explore my portfolio and dive into the projects that shaped my path. Let’s create something innovative together!
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <h3>Skills & Tools</h3>
          <p className="lead">Technologies I leverage to build robust, scalable applications</p>
          <div className="skills">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-chip">
                <img src={skill.logo} alt={`${skill.name} logo`} loading="lazy" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <h3>What I Offer</h3>
          <p className="lead">Specialized development services to bring your vision to life</p>
          <div className="services">
            {services.map((service) => (
              <div key={service.title} className="card service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <div className="service-title">{service.title}</div>
                <div className="project-desc">{service.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h3>Featured Projects</h3>
          <p className="lead">Real-world applications showcasing my problem-solving abilities</p>

          <div className="card-grid">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <h3>Let's Build Something Together</h3>
          <p className="lead">Have a project in mind? I'd love to hear about it. Drop me a message or schedule a call.</p>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="service-title">Contact Me</div>
              <div className="project-desc">
                <span className="contact-link">
                  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 8 }} />
                  <a href="mailto:siddhesh.haldankar30@gmail.com">siddhesh.haldankar30@gmail.com</a>
                </span>
              </div>
              <div className="project-desc">
                <span className="contact-link">
                  <FontAwesomeIcon icon={faPhone} style={{ marginRight: 8 }} />
                  <a href="tel:+917506811883">+91-7506811883</a>
                </span>
              </div>
              <div className="project-desc">
                <span className="contact-link">
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 8 }} />
                  Mumbai, Maharashtra
                </span>
              </div>
              <div className="contact-icons" style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                <a href="https://www.linkedin.com/in/siddhesh-haldankar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faSquareLinkedin} size="lg" />
                </a>
                <a href="https://www.facebook.com/siddhesh.haldankar.3133" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="https://github.com/siddhesh3008" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
              <div style={{ marginTop: 30 }}>
                <a
                  className="btn primary"
                  href="/Siddhesh_Haldankar_Associate_Software_Engineer.pdf"
                  download="Siddhesh_Haldankar_Associate_Software_Engineer.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div className="service-title">Contact Form</div>
              <form className="form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input name="name" type="text" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" placeholder="Your Email" required />
                </label>
                <label>
                  Contact No.
                  <input name="Contact No." type="tel" placeholder="Your Contact No." />
                </label>
                <label>
                  Message
                  <textarea name="message" placeholder="Your Message" required />
                </label>
                <button className="btn primary" type="submit" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <div className="form-message success">Message prepared! Opening email client...</div>
                )}
                {formStatus === 'error' && (
                  <div className="form-message error">Something went wrong. Please try again.</div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2025 Siddhesh Haldankar. All rights reserved.
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div >
  );
}

export default App;

