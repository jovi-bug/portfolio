import AnimatedButton from "@/components/smallComponents/AnimatedButton.jsx";
import {Menu, X} from 'lucide-react'
import {useState} from "react";

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        {href: "#about", label: "About"},
        {href: "#skills", label: "Skills"},
        {href: "#projects", label: "Projects"},
        {href: "#contact", label: "Contact"},
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
            <div className="blur-bg py-5">
                <nav className="container mx-auto px-6 flex items-center justify-between">
                    <a href="#"
                       className="text-forest-mid font-display font-bold text-xl tracking-tight hover:text-accent transition-all">
                        TN<span className="text-forest-mid">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className="px-2 py-1 flex items-center gap-1 rounded-full">
                            {navLinks.map((link, index) => (
                                <a key={index} href={link.href}
                                   className=" text-forest-mid px-4 py-2 text-base rounded-full hover:text-accent transition-all">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <AnimatedButton size="sm">Contact Me</AnimatedButton>
                    </div>

                    {/* Mobile Menu AnimatedButton */}
                    <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden p-2 text-forest">
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>


                </nav>
                {/* Mobile Menu */}
                {isMobileMenuOpen &&
                    (<div className="md:hidden">
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <a key={index} href={link.href}
                                   className="text-lg text-text-primary-dark hover:text-accent py-2 transition-all">
                                    {link.label}
                                </a>
                            ))}
                            <AnimatedButton className="min-w-40 w-1/4">Contact Me</AnimatedButton>

                        </div>
                    </div>)}
            </div>
        </header>
    );
}

export default Navbar;