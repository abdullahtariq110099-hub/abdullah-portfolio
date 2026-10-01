import { projects } from "../data/projects";

const ProjectSection = () => {
  return (
    <section className="projects section" id="projects">
      <div className="section-label">
        <span>02</span>
        SELECTED WORK
      </div>

      {projects.map((project) => (
        <article className="project" key={project.number}>
          <div className="project-number">{project.number}</div>

          <div className="project-main">
            <span>{project.type}</span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-arrow">↗</div>
        </article>
      ))}
    </section>
  );
};

export default ProjectSection;
