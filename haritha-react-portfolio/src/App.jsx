
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [mouse, setMouse] = useState({
    x: -100,
    y: -100,
    visible: false,
    hovering: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleMouseMove = (event) => {
      const target = event.target;

      const hovering =
        target instanceof Element &&
        Boolean(target.closest('a, button, summary'));

      setMouse({
        x: event.clientX,
        y: event.clientY,
        visible: true,
        hovering
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <header className={`topbar ${isScrolled ? 'is-compact' : ''}`}>
        <a className="brand" href="#top">
          HARITHA D
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="resume" id="top">
        <section className="hero blueprint-hero" id="about">
          <div className="blueprint-grid"></div>

          <div className="hero-text">
            <p className="hero-kicker">
              A PORTFOLIO IN PROGRESS
            </p>

            <h1>Haritha D</h1>

            <p className="hero-role">
              Computer Science Student &amp; Developer
            </p>

            <p className="hero-description">
              I build digital experiences, explore data, and
              solve problems through technology. Currently
              learning, building, and growing one project
              at a time.
            </p>

            <div className="hero-links">
              <a className="blueprint-button" href="#projects">
                Explore my work ↗
              </a>

              <a
                className="blueprint-button"
                href="mailto:harithad2606@gmail.com"
              >
                Email me ↗
              </a>

              <a
                className="blueprint-button"
                href="https://github.com/harithad-26"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                className="blueprint-button"
                href="https://www.linkedin.com/in/haritha-devanathan/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <span>FIG. 01 — PROFILE</span>
              <div className="photo-placeholder">HD</div>
            </div>
          </div>

          <span className="sheet-label">
            PORTFOLIO — 2026
          </span>

          <span className="hero-bottom-label">
            DESIGNED TO LEARN · BUILT TO GROW
          </span>
        </section>

        <div className="content-grid">
          <div className="column">
            <section className="card" id="skills">
              <h2 className="section-title">
                <span>01</span> Skills &amp; Tools
              </h2>

              <div className="skill-group">
                <h3>Programming &amp; Web</h3>
                <div className="tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">C</span>
                  <span className="tag">C++</span>
                  <span className="tag">SQL</span>
                </div>
              </div>

              <div className="skill-group">
                <h3>Tools</h3>
                <div className="tags">
                  <span className="tag">Figma</span>
                  <span className="tag">Power BI</span>
                  <span className="tag">Excel</span>
                  <span className="tag">Qlik Sense</span>
                  <span className="tag">Supabase</span>
                  <span className="tag">Canva</span>
                </div>
              </div>
            </section>

            <section className="card" id="education">
              <h2 className="section-title">
                <span>02</span> Education
              </h2>

              <table className="education-table">
                <thead>
                  <tr>
                    <th>Qualification</th>
                    <th>Institution</th>
                    <th>Year</th>
                    <th>Score</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>B.E. Computer Science and Engineering</td>
                    <td>SA Engineering College</td>
                    <td>2023–2027</td>
                    <td>CGPA: 7.88</td>
                  </tr>

                  <tr>
                    <td>Higher Secondary Education</td>
                    <td>St. Joseph Matriculation Higher Secondary School</td>
                    <td>2022–2023</td>
                    <td>76%</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="card" id="certifications">
              <h2 className="section-title">
                <span>03</span> Certifications
              </h2>

              <ul>
                <li>Megathil — AI Powered Interview Preparation Program</li>
                <li>Corizo Certified: AI Intern</li>
                <li>NPTEL — Programming in Java</li>
                <li>Pearson Mepro Level 10</li>
              </ul>
            </section>
          </div>

          <div className="column">
            <section className="card" id="experience">
              <h2 className="section-title">
                <span>04</span> Experience
              </h2>

              <article className="timeline-item">
                <p className="date">OCT 2025 – PRESENT</p>
                <h3>Software Development Intern</h3>
                <p>
                  <strong>Welbuilt AI Solutions</strong>
                </p>

                <p className="muted">
                  Worked on web applications, dashboards,
                  authentication and database integration.
                </p>

                <details>
                  <summary>Summary</summary>
                  <ul>
                    <li>Built an Intern Progress Tracker using React.js.</li>
                    <li>Integrated Supabase for authentication and data storage.</li>
                    <li>Worked on a Field Force Tracker using Next.js and TypeScript.</li>
                    <li>Improved a responsive travel website.</li>
                  </ul>
                </details>
              </article>

              <article className="timeline-item">
                <p className="date">JAN – FEB 2025</p>
                <h3>Data Analyst Intern</h3>
                <p>
                  <strong>Hyundai Motor India Limited</strong>
                </p>

                <p className="muted">
                  Explored production data, manufacturing workflows,
                  Python and SQL in a digital manufacturing environment.
                </p>
              </article>
            </section>

            <section className="card" id="projects">
              <h2 className="section-title">
                <span>05</span> Selected Projects
              </h2>

              <article className="project">
                <h3>01 / FragranceFlow</h3>
                <p className="muted">Perfume insights &amp; UI/UX</p>

                <p>
                  Designed a Figma prototype and a Power BI dashboard
                  to explore perfume sales and marketing insights.
                </p>

                <details>
                  <summary>Project snapshot</summary>
                  <p>
                    Focus areas: data visualisation, dashboard
                    design and user experience.
                  </p>
                </details>
              </article>

              <article className="project">
                <h3>02 / Field Force Tracker</h3>
                <p className="muted">SaaS web application</p>

                <p>
                  A field-force management platform with Admin and
                  Agent dashboards, farmer management, lead tracking,
                  visit logging and follow-up scheduling.
                </p>

                <details>
                  <summary>Project snapshot</summary>
                  <p>
                    Technologies used included Next.js, React,
                    TypeScript and Tailwind CSS.
                  </p>
                </details>
              </article>

              <article className="project">
                <h3>03 / Nithyeshwar Tours</h3>
                <p className="muted">Responsive travel website</p>

                <p>
                  Worked on destination pages, navigation, layouts
                  and user experience for a travel website.
                </p>
              </article>

              <article className="project">
                <h3>04 / Block Bank Management System</h3>
                <p className="muted">Banking application</p>

                <p>
                  A project covering account creation, deposits,
                  withdrawals and SQL data storage.
                </p>
              </article>
            </section>

            <section className="card" id="highlights">
              <h2 className="section-title">
                <span>06</span> Highlights
              </h2>

              <ul>
                <li>
                  Winner at DEXTERO'26, a national-level technical symposium.
                </li>
                <li>
                  First place for RightReach, a blockchain-based ration
                  distribution system.
                </li>
              </ul>
            </section>

            <section className="card" id="contact">
              <h2 className="section-title">
                <span>07</span> Let's Connect
              </h2>

              <p>
                Have an idea, opportunity, or project to discuss?
              </p>

              <ul className="contact-list">
                <li>
                  <a href="mailto:harithad2606@gmail.com">
                    Email me
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/haritha-devanathan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn profile
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/harithad-26"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Custom cursor: large ring and small black dot */}
      <div
        className={`custom-cursor-ring ${mouse.hovering ? 'is-hovering' : ''}`}
        style={{
          transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`,
          opacity: mouse.visible ? 1 : 0
        }}
        aria-hidden="true"
      />

      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`,
          opacity: mouse.visible ? 1 : 0
        }}
        aria-hidden="true"
      />
    </>
  );
}

export default App;
