
import ProjectView from "./projects/ProjectView";

export default function Project() {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          <ProjectView/>
          <ProjectView/>
          <ProjectView/>
        </div>
      </div>
    </section>
  );
}
