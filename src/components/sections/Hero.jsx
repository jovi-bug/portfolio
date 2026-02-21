import about from "@/data/about.js";
import Button from "@/components/smallComponents/Button.jsx";
import Star from "@/components/smallComponents/Star.jsx";

function AboutSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/*<div*/}
            {/*    className="absolute inset-0"*/}
            {/*    style={{*/}
            {/*        background: `*/}
            {/*          radial-gradient(ellipse 80% 60% at 20% 20%, #B4C7AE 0%, transparent 60%),*/}
            {/*          radial-gradient(ellipse 60% 70% at 80% 10%, #B4C7AE 0%, transparent 55%),*/}
            {/*          radial-gradient(ellipse 70% 60% at 70% 80%, #B4C7AE 0%, transparent 60%),*/}
            {/*          radial-gradient(ellipse 50% 50% at 10% 85%, #fcfdfc 0%, transparent 55%),*/}
            {/*          radial-gradient(ellipse 40% 40% at 50% 50%, #fcfdfc 0%, transparent 60%)*/}
            {/*        `,*/}
            {/*    }}*/}
            {/*/>*/}
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
                    <h1 className="font-display text-8xl font-extrabold mb-1">Hi, im <span
                        className=" text-accent">{about.name}</span></h1>
                    <h2 className="font-display text-5xl">I'm a <span>{about.title}</span></h2>

                    <Star
                        size={36}
                        color="#fcfdfc"
                        className="relative top-4 -right-180"
                    />


                    {/* CTA Button */}

                    {/* TODO: Implement OnClick */}
                    <Button className="font-bold">Browse projects</Button>
                </div>
            </div>


        </section>
    );
}

export default AboutSection;