const About = () => {
  return (
    <section className="about section" id="about">
      <div className="section-label">
        <span>01</span>
        ABOUT
      </div>

      <div className="about-content">
        <h2>
          I AM A COMPUTER
          <br />
          SCIENCE STUDENT WHO
          <br />
          <span>BUILDS THINGS.</span>
        </h2>

        <div className="about-text">
          <p>
            I'm a 7th semester Computer Science undergraduate at the
            University of Sialkot, focused on frontend and full-stack
            web development.
          </p>

          <p>
            I enjoy turning ideas into working products — from interfaces
            and APIs to authentication and databases.
          </p>
        </div>
      </div>

      <div className="stats">
        <div><strong>3.61</strong><span>CGPA / 4.00</span></div>
        <div><strong>07</strong><span>SEMESTER</span></div>
        <div><strong>2027</strong><span>GRADUATION</span></div>
        <div><strong>01</strong><span>INTERNSHIP</span></div>
      </div>
    </section>
  );
};

export default About;
