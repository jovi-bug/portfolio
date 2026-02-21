import Headline2 from "@/components/typography/Headline2.jsx";

function About() {
    return (

        <>
            <section id="about" className="relative min-h-screen flex items-center overflow-hidden">

                <div className="container md:mx-60 px-6 pt-32 pb-20 relative z-10">
                    {/*  Introduction  */}

                    <div className=" grid grid-cols-2 gap-8">
                        <div>
                            <Headline2 content=" About"></Headline2>
                        </div>


                    </div>

                    {/*  Resume  */}

                    <div>



                    </div>

                </div>
            </section>
        </>
    );
}

export default About
;