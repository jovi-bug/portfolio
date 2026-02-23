import projects from "@/data/projects.js";
import Headline2 from "@/components/typography/Headline2.jsx";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";

function Projects() {
    return (

        <>
            <AnimatedSection id="projects">
                <Headline2>Projects</Headline2>
                {/*{projects.map(project => (*/}
                {/*    <div>*/}
                {/*        <h3>{project.name}</h3>*/}
                {/*        <p>{project.description}</p>*/}

                {/*    </div>*/}

                {/*))}*/}

            </AnimatedSection>
        </>
    );
}

export default Projects
;