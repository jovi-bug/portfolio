import about from "../data/about.js";

function AboutSection() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 h-screen px-6 md:px-12">
            {/* Bild Container */}
            <div className="w-72 h-72 flex-shrink-0">
                <img
                    className="w-full h-full rounded-xl object-cover shadow-lg"
                    src="./images/Bewerbungsfoto.jpg"
                    alt="Profile Picture"
                />
            </div>

            {/* Text Container */}
            <div className="max-w-xl text-center md:text-left">
                <h2 className="text-lg md:text-xl text-primary-dark mb-2">
                    Hi, my name is
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-dark mb-4">
                    {about.name}
                </h1>
                <p className="text-base md:text-lg text-bg-dark leading-relaxed">
                    {about.description}
                </p>
            </div>
        </div>
    );
}

export default AboutSection;