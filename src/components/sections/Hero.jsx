import about from "@/data/about.js";
import AnimatedButton from "@/components/smallComponents/AnimatedButton.jsx";
import Star from "@/components/smallComponents/Star.jsx";
import {motion} from "framer-motion"
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";

function AboutSection() {
    return (
        <AnimatedSection>

            <motion.div
                className="container mx-10 md:mx-60 px-6 pt-32 pb-20 relative z-10 text-forest">
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
                    <h1 className="text-7xl font-display font-extrabold mb-1 md:text-8xl">Hi, I'm <span
                        className=" text-accent">{about.name}</span></h1>
                    <h2 className="font-display text-4xl md:text-5xl">and I'm a <span>{about.title}</span></h2>

                    <Star
                        size={36}
                        color="#fcfdfc"
                        className="relative top-4 -right-100 md:-right-170"
                    />


                    {/* CTA AnimatedButton */}

                    {/* TODO: Implement OnClick */}
                    <AnimatedButton>Browse projects</AnimatedButton>
                </div>
            </motion.div>


        </AnimatedSection>
    );
}

export default AboutSection;