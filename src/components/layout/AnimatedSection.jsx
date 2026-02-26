import Headline2 from "@/components/typography/Headline2.jsx";
import {motion, useInView, AnimatePresence} from "framer-motion";
import {useRef} from "react";

function Skills({id, children, className = ""}) {

    //Animation only on initial entry into viewport, slight margin on viewport
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 100px -50px 0px"
    })

    const baseClasses = "flex items-center overflow-hidden mx-12 md:mx-60 pt-32 pb-20 relative z-10 space-y-16 overflow-visible";


    const classes = `${baseClasses} ${className}`;

    return (
        <motion.section id={id}
                        className={classes}
                        ref={ref}
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.8, ease: "easeOut"}}>
            {children}
        </motion.section>
    );
}

export default Skills;