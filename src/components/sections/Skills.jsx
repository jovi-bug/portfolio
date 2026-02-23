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

    return (
        <AnimatedSection id="skills">
            <div className="w-full">
                <Headline2>Skills</Headline2>
                <motion.div
                    variants={skillContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 gap-4 md:grid-cols-5">
                    {skills.map((skill, count) => (
                        <motion.div key={skill.id}
                             variants={skillItem}
                             className="blur-bg-strong rounded-2xl h-10 shadow-md shadow-forest/25 flex items-center justify-center text-center">
                            {skill.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>

    );
}

export default Skills;