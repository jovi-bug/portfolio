import '@/styles.css';
import Navbar from '@/components/layout/Navbar.jsx';
import Hero from '@/components/sections/Hero.jsx';
import About from '@/components/sections/About.jsx';
import Projects from '@/components/sections/Projects.jsx';
import Contact from '@/components/sections/Contact.jsx';
import { Footer } from '@/components/layout/Footer.jsx';
import ScrollToTop from '@/components/layout/ScrollToTop.jsx';

function App() {
    return (
        <>
            <div
                className="fixed inset-0"
                style={{
                    background: `
                      radial-gradient(ellipse 80% 60% at 20% 20%, #B4C7AE70 0%, transparent 60%),
                      radial-gradient(ellipse 60% 70% at 80% 10%, #B4C7AE70 0%, transparent 55%),
                      radial-gradient(ellipse 70% 60% at 70% 80%, #B4C7AE70 0%, transparent 60%),
                      radial-gradient(ellipse 50% 50% at 10% 85%, #fcfdfc70 0%, transparent 55%),
                      radial-gradient(ellipse 40% 40% at 50% 50%, #fcfdfc70 0%, transparent 60%)
                    `,
                }}
            />
            <div className="min-h-screen overflow-x-hidden">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}

export default App;