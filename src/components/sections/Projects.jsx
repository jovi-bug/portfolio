import projects from "@/data/projects.js";
import Headline2 from "@/components/typography/Headline2.jsx";

function Projects() {
    return (

        <>
            <section id="projects" className="relative min-h-screen flex items-center overflow-hidden">
                <Headline2>Projects</Headline2>
                {/*{projects.map(project => (*/}
                {/*    <div>*/}
                {/*        <h3>{project.name}</h3>*/}
                {/*        <p>{project.description}</p>*/}

                {/*    </div>*/}

                {/*))}*/}

            </section>
        </>
    );
}

export default Projects
;