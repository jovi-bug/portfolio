import './App.css'
import AboutSection from "./components/AboutSections.jsx";
import Header from "./components/Header.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import FadeInSection from "./components/FadeInSection.jsx";

function App() {
    return (
        <>
            <Header/>
            <div className="max-w-7xl mx-auto font-text">

                <FadeInSection>
                    <AboutSection/>
                </FadeInSection>
                <FadeInSection>
                    <SkillsSection/>
                </FadeInSection>
                <FadeInSection>
                    <ProjectsSection/>
                </FadeInSection>


            </div>

        </>
    );
}

export default App;