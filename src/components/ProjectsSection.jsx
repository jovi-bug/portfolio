import projects from "../data/projects.js";

function ProjectsSection() {
    return (

        <>
            <div>
                {projects.map(project => (
                    <div>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>

                    </div>

                ))}

            </div>
        </>
    );
}

export default ProjectsSection
;