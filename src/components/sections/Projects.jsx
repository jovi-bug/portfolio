import projects from "@/data/projects.js";
import Headline2 from "@/components/typography/Headline2.jsx";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";
import ProjectCard from "@/components/layout/ProjectCard.jsx";
import {useTranslation} from "react-i18next";

function Projects() {
    const {t} = useTranslation();

    return (
        <AnimatedSection id="projects" className="min-h-screen">
            <div>
                <Headline2>{t("nav.projects")}</Headline2>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 2xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

export default Projects
;