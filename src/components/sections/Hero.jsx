import about from "@/data/about.js";
import AnimatedButton from "@/components/smallComponents/AnimatedButton.jsx";
import Star from "@/components/smallComponents/Star.jsx";
import {motion} from "framer-motion"
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";

function AboutSection() {
    return (
        <AnimatedSection className="min-h-screen">

            <motion.div
                className="container pt-32 pb-20 relative z-10 text-forest">
                <div>
                    {/* Stars */}
                    <Star
                        size={48}
                        color="#fcfdfc"
                        className="relative -top-2 -left-4 md:-left-12"
                    />
                    <Star
                        size={24}
                        color="#fcfdfc"
                        className="relative top-2 -left-8 md:-left-16"
                    />


                    {/* Headline */}
                    <h1 className="lg:text-9xl md:text-8xl text-7xl font-display font-extrabold mb-1 ">Hi, I'm <span
                        className=" text-accent">{about.name}</span></h1>
                    <h2 className="font-display  lg:text-6xl md:text-5xl text-4xl ">and I'm a <span>{about.title}</span></h2>

                    <Star
                        size={36}
                        color="#fcfdfc"
                        className="relative top-4 -right-100 md:-right-170"
                    />


                    {/* CTA Button to Projects */}
                    <a href="#projects"><AnimatedButton>Browse projects</AnimatedButton></a>
                </div>
            </motion.div>


        </AnimatedSection>
    );
}

export default AboutSection;