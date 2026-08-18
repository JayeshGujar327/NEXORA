import React from "react";
import "./Developer.css";

const Developer = () => {
  // Replace this with your actual Gmail
  const email = "YOUR_EMAIL@gmail.com";

  // Your GitHub profile
  const githubUrl = "https://github.com/JayeshGujar327";

  return (
    <section className="developer-section" id="developer">

      {/* Background Glow */}
      <div className="developer-glow glow-one"></div>
      <div className="developer-glow glow-two"></div>

      <div className="developer-container">

        {/* Section Label */}
        <div className="developer-label">
          <span className="label-line"></span>
          THE CREATOR
          <span className="label-line"></span>
        </div>

        {/* Developer Card */}
        <div className="developer-card">

          {/* LEFT SIDE */}
          <div className="developer-content">

            {/* Badge */}
            <div className="developer-badge">
              <span>✦</span>
              NEXORA CREATOR
            </div>

            {/* Heading */}
            <h2>
              Meet the mind
              <br />
              behind <span>NEXORA.</span>
            </h2>

            {/* Role */}
            <p className="developer-role">
              Full-Stack Developer & Creator
            </p>

            {/* Description */}
            <p className="developer-description">
              I'm <strong>Jayesh Gujar</strong>, the developer behind NEXORA.
              I'm building NEXORA as an evolving platform for modern project
              collaboration, productivity, and smarter workflows.
            </p>

            <p className="developer-description secondary">
              Have a feature idea, improvement suggestion, or want to
              collaborate? I'd love to hear from you.
            </p>

            {/* Buttons */}
            <div className="developer-actions">

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="developer-btn github-btn"
              >
                <span className="btn-icon">◉</span>
                GitHub
                <span className="arrow">↗</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="developer-btn email-btn"
              >
                <span className="btn-icon">✉</span>
                Email
                <span className="arrow">↗</span>
              </a>

              {/* Feature Suggestion */}
              <a
                href={`mailto:${email}?subject=NEXORA%20Feature%20Suggestion`}
                className="developer-btn feature-btn"
              >
                <span className="btn-icon">✦</span>
                Suggest Idea
                <span className="arrow">↗</span>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="developer-visual">

            {/* Orbit Rings */}
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            {/* Creator Circle */}
            <div className="creator-circle">

              <div className="creator-initial">
                JG
              </div>

              {/* Decorative Dots */}
              <div className="creator-dot dot-one"></div>
              <div className="creator-dot dot-two"></div>
              <div className="creator-dot dot-three"></div>

            </div>

            {/* Floating Cards */}
            <div className="floating-card card-top">
              <span>✦</span>
              BUILD
            </div>

            <div className="floating-card card-bottom">
              <span>⚡</span>
              CREATE
            </div>

          </div>

        </div>

        {/* Quote */}
        <div className="developer-quote">
          <span>“</span>
          Turning ideas into experiences that people can use.
          <span>”</span>
        </div>

      </div>

    </section>
  );
};

export default Developer;