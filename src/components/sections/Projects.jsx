import projects from "@/data/projects.js";
import Headline2 from "@/components/typography/Headline2.jsx";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";
import ProjectCard from "@/components/layout/ProjectCard.jsx";

function Projects() {
    return (
        <AnimatedSection id="projects" className="min-h-screen">
            <div>
                <Headline2>Projects</Headline2>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                    {projects.map(project => (
                        <ProjectCard contentObj={project}/>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Projects
;