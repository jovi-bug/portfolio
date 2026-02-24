import Headline2 from "@/components/typography/Headline2.jsx";
import {motion, useInView, AnimatePresence} from "framer-motion";
import {useRef} from "react";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";
import skills from "@/data/skills.js";

const skillContainer = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.1, delayChildren: 0.25, duration: 0.5}}
}
const skillItem = {
    hidden: {opacity: 0, y: 10},
    visible: {opacity: 1, y: 0}
}


function Skills() {

    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 100px -50px 0px"
    })

    return (
        <AnimatedSection id="skills">
            <div className="w-full" ref={ref}>
                <Headline2>Skills</Headline2>
                <motion.div
                    variants={skillContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
                    {skills.map((skill, count) => (
                        <motion.div key={skill.id}
                                    variants={skillItem}

                                    className="blur-bg-strong rounded-2xl h-14 shadow-custom-lg flex items-center justify-center text-center">
                            {skill.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>

    );
}

export default Skills;