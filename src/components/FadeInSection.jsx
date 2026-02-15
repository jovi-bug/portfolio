import {motion, useInView} from "framer-motion";
import {useRef} from "react";


/*
* Wrapper for other components to facilitate slow fade-in
*/

function FadeInSection({children}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-20px"});
    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
            transition={{duration: 0.8}}
        >
            {children}
        </motion.div>

    );
}

export default FadeInSection;