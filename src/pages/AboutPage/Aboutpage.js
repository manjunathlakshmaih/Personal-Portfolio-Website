import React from "react";
import "./Aboutpage.css";
const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Hi, I'm Manjunath L!</h1>
        <p>
          A passionate Frontend Developer specializing in React and JavaScript.
        </p>
      </header>

      <section className="about-details">
        <h2 className="header-part">About Me</h2>
        <p className="parargraph">
          I'm a creative Frontend Developer with experience in building modern,
          responsive, and user-friendly websites and applications. I love coding
          and solving complex problems with clean and efficient code.
        </p>
        <ul className="skills">
          <li>React</li>
          <li>JavaScript</li>
          <li>CSS/HTML</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      <section className="experience-section">
        <h2 className="header-part">What I Do</h2>
        <p className="parargraph">
          From designing pixel-perfect user interfaces to optimizing web
          performance, I bring ideas to life with modern frontend technologies.
        </p>
      </section>

      <footer className="about-footer">
        <p>Connect with me:</p>
        <div className="links">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/manjunathlakshmaih"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
