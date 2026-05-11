import AnimatedButton from "@/components/smallComponents/AnimatedButton.jsx";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";
import {motion} from "framer-motion"
import {useTranslation} from "react-i18next";

function AboutSection() {
    const {t} = useTranslation();

    const titleText = `${t("hero.greeting")} ${t("about.name")}`;
    const subtitleText = `${t("hero.greeting2")} ${t("about.title")}`;

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02,
            },
        },
    };

    const letterVariants = {
        hidden: {opacity: 0, display: "none"},
        visible: {
            opacity: 1,
            display: "inline",
        },
    };

    return (
        <AnimatedSection className="min-h-screen">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, ease: "easeOut"}}
                className="container pt-32 pb-20 relative z-10 text-forest">
                <div>

                    {/* Headline */}
                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:text-8xl md:text-7xl text-6xl font-display font-extrabold mb-1 ">
                        {titleText.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className={index >= t("hero.greeting").length ? "text-accent" : ""}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <motion.h2
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{delayChildren: titleText.length * 0.05}}
                        className="font-display  lg:text-5xl md:text-4xl text-3xl ">
                        {subtitleText.split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>

                    {/* CTA Button to Projects */}
                    <a href="#projects"><AnimatedButton className={"mt-4"}>{t("hero.buttonText")}</AnimatedButton></a>
                </div>
            </motion.div>
        </AnimatedSection>
    );
}

export default AboutSection;