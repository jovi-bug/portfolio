import '@/styles.css'
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/sections/Hero.jsx";
import About from "@/components/sections/About.jsx";
import Skills from "@/components/sections/Skills.jsx";
import Projects from "@/components/sections/Projects.jsx";
import Contact from "@/components/sections/Contact.jsx";

function App() {
    return (
            <div className="min-h-screen overflow-x-hidden">
                <Navbar/>
                <main>
                    <Hero></Hero>
                    <About></About>
                    <Skills></Skills>
                    <Projects></Projects>
                    <Contact></Contact>
                </main>

            </div>

    );
}

export default App;