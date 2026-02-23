import Headline2 from "@/components/typography/Headline2.jsx";
import {motion, useInView, AnimatePresence} from "framer-motion";
import {useRef} from "react";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";

function Skills() {


    return (

        <>
            <AnimatedSection id="skills">
                <motion.div>
                    <Headline2>Skills</Headline2>

                </motion.div>
            </AnimatedSection>
        </>
    );
}

export default Skills;