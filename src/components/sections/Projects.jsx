import projects from "@/data/projects.js";
import Headline2 from "@/components/typography/Headline2.jsx";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";
import ProjectCard from "@/components/layout/ProjectCard.jsx";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

function Projects() {
    const {t} = useTranslation();

    return (
        <AnimatedSection id="projects" className="min-h-screen">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.1}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <Headline2>{t("nav.projects")}</Headline2>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 2xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </motion.div>
        </AnimatedSection>
    );
}

export default Projects
;