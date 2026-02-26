import Headline2 from "@/components/typography/Headline2.jsx";
import Headline3 from "@/components/typography/Headline3.jsx";
import about from "@/data/about.js";
import {useRef, useState} from "react";
import {motion, useInView, AnimatePresence} from "framer-motion";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";
import skills from "@/data/skills.js";

//Variants for CV animations
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
            <AnimatedSection id="about" className="min-h-screen ">
                <motion.div ref={ref}
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            className="flex flex-col items-center justify-center gap-12">

                    {/*  Introduction and Image */}
                    <Headline2>About</Headline2>
                    <div
                        className="flex flex-col-reverse gap-10 mb-8 md:grid md:grid-cols-3 md:justify-between md:gap-20">
                        <div className="col-span-2">
                            <p>{about.description}</p>
                        </div>
                        <img className="rounded-xl h-60 w-full object-cover shadow-custom-lg md:h-52 md:w-52"
                             src="/images/Bewerbungsfoto.jpg"
                             alt="Resume Photo"/>
                    </div>

                    {/*  Resume  */}
                    <motion.div
                        variants={cvContainer}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <Headline3>Resume</Headline3>
                        <div className="relative">
                            <div
                                className="absolute timeline-gradient left-0 lg:left-1/2 top-0 bottom-0 w-0.5 lg:-translate-x-1/2"/>

                            {about.cv.map((item, index) => (
                                <motion.div
                                    variants={cvItem}
                                    key={item.id}
                                    className="relative grid lg:grid-cols-2 gap-12">
                                    {/* Dot */}
                                    <div
                                        className="absolute left-0 lg:left-1/2 top-0 w-3 h-3 bg-sage-shade rounded-full -translate-x-1/2 z-10"/>

                                    {/* Content */}
                                    <div className={`ml-8 lg:ml-0 p-6 blur-bg-strong rounded-2xl mb-6
                                    ${
                                        index % 2 === 0
                                            ? "lg:pr-16 lg:text-right"
                                            : "lg:col-start-2 lg:pl-16"
                                    }`}>
                                        <span className="text-sm ">{item.period}</span>
                                        <h4 className=" font-display font-bold text-forest hover:text-accent">{item.title}</h4>
                                        <span className="text-sm ">{item.institution}</span>
                                        <p className="text-base">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/*<div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-20">*/}
                    {/*    /!*  Details for resume entries  *!/*/}
                    {/*    <motion.div>*/}
                    {/*        <AnimatePresence mode="wait">*/}
                    {/*            {hoveredEntry && <motion.div*/}
                    {/*                key={hoveredEntry.title}*/}
                    {/*                initial={{opacity: 0, y: 10}}*/}
                    {/*                animate={{opacity: 1, y: 0}}*/}
                    {/*                exit={{opacity: 0, y: 10}}*/}
                    {/*                transition={{duration: 0.3}}*/}
                    {/*                className="blur-bg flex flex-col gap-2 p-6 min-h-52 justify-center rounded-xl shadow-custom-lg">*/}
                    {/*                <span className="block w-full">{hoveredEntry.period}</span>*/}
                    {/*                <h4 className="block w-full font-display font-bold text-forest hover:text-accent">{hoveredEntry.institution}</h4>*/}
                    {/*                <span className="block w-full">{hoveredEntry.description}</span>*/}
                    {/*            </motion.div>}*/}
                    {/*        </AnimatePresence>*/}
                    {/*    </motion.div>*/}
                    {/*    <div>*/}
                    {/*        <Headline3 content="Resume"></Headline3>*/}
                    {/*        <motion.div variants={cvContainer}*/}
                    {/*                    initial="hidden"*/}
                    {/*                    animate={isInView ? "visible" : "hidden"}*/}
                    {/*                    className="mb-8 space-y-6 border-gradient-left pl-4">*/}
                    {/*            {about.cv.map(entry => (*/}
                    {/*                <motion.h4*/}
                    {/*                    variants={cvItem}*/}
                    {/*                    className="font-display font-bold text-forest hover:text-accent hover:cursor-pointer"*/}
                    {/*                    style={hoveredEntry === entry ? {color: "#D77A61"} : {color: "#1F3329"}}*/}
                    {/*                    onMouseEnter={() => setHoveredEntry(entry)}*/}
                    {/*                    onClick={() => setHoveredEntry(entry)}>*/}
                    {/*                    {entry.title}*/}
                    {/*                </motion.h4>*/}
                    {/*            ))}*/}
                    {/*        </motion.div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Skills */}
                    <div className="w-full">
                        <Headline3>Skills</Headline3>
                        <p></p>
                        <motion.div
                            className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
                            {/* TODO: Add Icons and skill level */}
                            {skills.map((skill) => (
                                <motion.div key={skill.id}
                                            className="blur-bg-strong rounded-2xl h-14 shadow-custom-lg flex items-center justify-center text-center">
                                    {skill.name}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatedSection>
        </>
    );
}

export default About;