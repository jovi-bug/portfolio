import about from "@/data/about.js";
import AnimatedButton from "@/components/smallComponents/AnimatedButton.jsx";
import Star from "@/components/smallComponents/Star.jsx";

function AboutSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            <div className="container md:mx-60 px-6 pt-32 pb-20 relative z-10 text-forest">
                <div>
                    {/* Stars */}

                    <Star
                        size={48}
                        color="#fcfdfc"
                        className="relative -top-2 -left-12"
                    />
                    <Star
                        size={24}
                        color="#fcfdfc"
                        className="relative top-2 -left-16"
                    />


                    {/* Headline */}
                    <h1 className="font-display text-8xl font-extrabold mb-1">Hi, I'm <span
                        className=" text-accent">{about.name}</span></h1>
                    <h2 className="font-display text-5xl">and I'm a <span>{about.title}</span></h2>

                    <Star
                        size={36}
                        color="#fcfdfc"
                        className="relative top-4 -right-170"
                    />


                    {/* CTA AnimatedButton */}

                    {/* TODO: Implement OnClick */}
                    <AnimatedButton>Browse projects</AnimatedButton>
                </div>
            </div>


        </section>
    );
}

export default AboutSection;