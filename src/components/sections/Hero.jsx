import about from "@/data/about.js";

function AboutSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">


                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl font-bold mb-1">Hi, im <span className="font-display text-coral text-5xl">{about.name}</span></h1>
                        <h2 className="text-xl">I'm a <span>{about.title}</span></h2>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;