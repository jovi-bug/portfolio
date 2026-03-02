import Headline2 from "@/components/typography/Headline2.jsx";
import Headline3 from "@/components/typography/Headline3.jsx";
import cv from "@/data/cv.js";
import {useRef, useState} from "react";
import {motion, useInView} from "framer-motion";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";
import skills from "@/data/skills.js";
import {useTranslation} from "react-i18next";

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
    const {t} = useTranslation();
    const {i18n} = useTranslation();

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
                            transition={{duration: 0.8, ease: "easeOut"}}>

                    {/*  Introduction and Image */}
                    <Headline2>{t("nav.about")}</Headline2>

                    <div className="flex flex-col items-center justify-center gap-6">

                        <div
                            className="flex flex-col-reverse gap-10 mb-8 lg:grid lg:grid-cols-3 lg:justify-between lg:gap-20">
                            <div className="col-span-2">
                                <p>{t("about.description")}</p>
                            </div>
                            <img className="rounded-xl h-60 w-full object-cover shadow-custom-lg lg:h-52 lg:w-52"
                                 src="/images/Bewerbungsfoto.jpg"
                                 alt="Resume Photo"/>
                        </div>

                        {/*  Resume  */}
                        <motion.div
                            variants={cvContainer}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <Headline3>{t("about.subheadCV")}</Headline3>
                            <div className="relative">
                                <div
                                    className="absolute timeline-gradient left-0 lg:left-1/2 top-0 bottom-0 w-0.5 lg:-translate-x-1/2"/>

                                {cv.map((item, index) => (
                                    <motion.div
                                        variants={cvItem}
                                        key={item.id}
                                        className="relative grid lg:grid-cols-2 gap-12">
                                        {/* Dot */}
                                        <div
                                            className="absolute left-0 lg:left-1/2 top-0 w-3 h-3 bg-sage-shade rounded-full -translate-x-1/2 z-10"/>

                                        {/* Content */}
                                        <div className={`ml-8 lg:ml-0 p-6 blur-bg-strong scaling-div rounded-2xl mb-6
                                    ${
                                            index % 2 === 0
                                                ? "lg:pr-16 lg:text-right"
                                                : "lg:col-start-2 lg:pl-16"
                                        }`}>
                                            <span className="text-sm ">{item.period[i18n.language]}</span>
                                            <h4 className=" font-display font-bold text-forest hover:text-accent">{item.title[i18n.language]}</h4>
                                            <span className="text-sm ">{item.institution}</span>
                                            <p className="text-base">{item.description[i18n.language]}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        {/* Skills */}
                        <div className="w-full">
                            <Headline3>{t("about.subheadSkills")}</Headline3>
                            <p></p>
                            <motion.div
                                className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                                {/* TODO: Add Icons and skill level */}
                                {skills.map((skill) => (
                                    <motion.div key={skill.id}
                                                className="blur-bg-strong text-base rounded-2xl h-14 shadow-custom-lg flex items-center justify-center text-center
                                            hover:scale-105 transition-all duration-500 ease-in-out">
                                        {skill.icon && <div>
                                            <svg role="img" viewBox="0 0 24 24" className=" w-7 h-7 fill-sage mr-2">
                                                <title>{skill.name}</title>
                                                <path d={skill.icon}/>
                                            </svg>
                                        </div>}
                                        {skill.name}
                                    </motion.div>))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatedSection>
        </>
    );
}

export default About;