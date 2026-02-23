import Headline2 from "@/components/typography/Headline2.jsx";
import Headline3 from "@/components/typography/Headline3.jsx";
import about from "@/data/about.js";
import {useRef, useState} from "react";
import {motion, useInView, AnimatePresence} from "framer-motion";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";

const cvContainer = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.2, delayChildren: 0.5, duration: 0.5}}
}
const cvItem = {
    hidden: {opacity: 0, y: 10},
    visible: {opacity: 1, y: 0}
}

function About() {

    // State for the currently shown cv-entry, by default set to most recent entry
    const [hoveredEntry, setHoveredEntry] = useState(about.cv[0])

    //Animation only on initial entry into viewport, slight margin on viewport
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 100px -50px 0px"
    })

    return (
        <>
            <AnimatedSection id="about">
                <motion.div ref={ref}
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                            transition={{duration: 0.8, ease: "easeOut"}}>

                    {/*  Introduction and Image */}
                    <Headline2>About</Headline2>
                    <div className="flex flex-col-reverse gap-10 mb-8 md:grid md:grid-cols-3 md:justify-between md:gap-20">
                        <div className="col-span-2">
                            <p>{about.description}</p>
                        </div>
                        <img className="rounded-xl h-60 w-full object-cover shadow-lg shadow-forest-mid/25 md:h-52 md:w-52"
                             src="/images/Bewerbungsfoto.jpg"
                             alt="Resume Photo"/>
                    </div>

                    {/*  Resume  */}
                    <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-20">

                        {/*  Details for resume entries  */}
                        <motion.div>
                            <AnimatePresence mode="wait">
                                {hoveredEntry && <motion.div
                                    key={hoveredEntry.title}
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 10}}
                                    transition={{duration: 0.3}}
                                    className="blur-bg flex flex-col gap-2 p-6 min-h-52 justify-center rounded-xl shadow-forest-mid/25 shadow-lg">
                                    <span className="block w-full">{hoveredEntry.period}</span>
                                    <h4 className="block w-full font-display font-bold text-forest hover:text-accent">{hoveredEntry.institution}</h4>
                                    <span className="block w-full">{hoveredEntry.description}</span>
                                </motion.div>}
                            </AnimatePresence>
                        </motion.div>
                        <div>
                            <Headline3 content="Resume"></Headline3>
                            <motion.div variants={cvContainer}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        className="mb-8 space-y-6 border-gradient-left pl-4">
                                {about.cv.map(entry => (
                                    <motion.h4
                                        variants={cvItem}
                                        className="font-display font-bold text-forest hover:text-accent hover:cursor-pointer"
                                        style={hoveredEntry === entry ? {color: "#D77A61"} : {color: "#1F3329"}}
                                        onMouseEnter={() => setHoveredEntry(entry)}
                                        onClick={() => setHoveredEntry(entry)}>
                                        {entry.title}
                                    </motion.h4>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatedSection>
        </>
    );
}

export default About;