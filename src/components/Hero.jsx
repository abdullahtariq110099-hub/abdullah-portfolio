const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        <span>COMPUTER SCIENCE · WEB DEVELOPMENT</span>
        <span>WAZIRABAD / PAKISTAN</span>
      </div>

      <div className="hero-content">
        <p className="hero-intro">Abdullah Tariq — CS undergraduate & developer</p>

        <h1>
          I BUILD
          <br />
          DIGITAL
          <br />
          <span>SYSTEMS.</span>
        </h1>

        <div className="hero-bottom">
          <p>
            React, Node.js & ASP.NET developer focused on building
            practical full-stack applications.
          </p>

          <div className="system-box">
            <span>SYSTEM</span>
            <strong>ONLINE</strong>
            <div className="system-line"></div>
            <small>FRONTEND → API → DATABASE</small>
          </div>
        </div>
      </div>

      <div className="scroll-text">SCROLL TO EXPLORE ↓</div>
    </section>
  );
};

export default Hero;
