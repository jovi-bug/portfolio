import Headline2 from "@/components/typography/Headline2.jsx";
import Headline3 from "@/components/typography/Headline3.jsx";
import about from "@/data/about.js";
import {useState} from "react";

function About() {

    const [hoveredEntry, setHoveredEntry] = useState(about.cv[0])

    //TODO: Add Animations
    return (
        <>
            <section id="about" className="relative min-h-screen flex items-center overflow-hidden">

                <div className="container md:mx-60 px-6 pt-32 pb-20 relative z-10 space-y-16">


                    {/*  Introduction and Image */}
                    <div className="grid md:grid-cols-3 justify-between md:gap-20">
                        <div className="col-span-2">
                            <Headline2 content="About"></Headline2>

                            <p>{about.description}</p>
                        </div>
                        <img className="rounded-xl h-52 w-52 object-cover shadow-lg shadow-forest-mid/25"
                             src="/images/Bewerbungsfoto.jpg"
                             alt="Resume Photo"/>

                    </div>

                    {/*  Resume  */}
                    <div className="grid md:grid-cols-2 md:gap-20">

                        {/*  Details for resume entries  */}
                        <div>
                            {hoveredEntry && <div
                                className="blur-bg flex flex-col gap-2 p-6 min-h-52 justify-center rounded-xl shadow-forest-mid/25 shadow-lg">
                                <span className="block w-full">{hoveredEntry.period}</span>
                                <h4 className="block w-full font-display font-bold text-forest hover:text-accent">{hoveredEntry.institution}</h4>
                                <span className="block w-full">{hoveredEntry.description}</span>
                            </div>}
                        </div>
                        <div>
                            {/* TODO: Active entry in accent color*/}
                            <Headline3 content="Resume"></Headline3>
                            <div className="space-y-6  border-gradient-left pl-4">
                                {about.cv.map(entry => (
                                    <h4 className="font-display font-bold text-forest hover:text-accent hover:cursor-pointer"
                                        onMouseEnter={() => setHoveredEntry(entry)}
                                        onClick={() => setHoveredEntry(entry)}>
                                        {entry.title}
                                    </h4>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default About
;