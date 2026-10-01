const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">AT.</a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

      <span className="nav-status">● AVAILABLE</span>
    </nav>
  );
};

export default Navbar;
