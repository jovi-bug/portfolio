import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Headline2 from '@/components/typography/Headline2.jsx';

function AnimatedSection({id, children, className = ""}) {

    //Animation only on initial entry into viewport, slight margin on viewport
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 100px -50px 0px"
    })

    const baseClasses = "flex items-center overflow-hidden mx-12 md:mx-20 lg:mx-40 xl:mx-60 pt-32 pb-20 relative z-10 space-y-16 overflow-visible";


    const classes = `${baseClasses} ${className}`;

    return (
        <section id={id}
                        className={classes}
                        ref={ref}>
            {children}
        </section>
    );
}

export default AnimatedSection;