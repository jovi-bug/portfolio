import Button from "@/components/smallComponents/Button.jsx";
import {Menu, X} from 'lucide-react'
import {useState} from "react";

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        {href: "#about", label: "About"},
        {href: "#projects", label: "Projects"},
        {href: "#skills", label: "Skills"},
        {href: "#contact", label: "Contact"},
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent ">
            <div className="menu-backdrop py-5">
                <nav className="container mx-auto px-6 flex items-center justify-between">
                    <a href="#"
                       className="text-forest-mid font-display font-bold text-xl tracking-tight hover:text-coral transition-all">
                        TN <span className="text-forest-mid">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className="px-2 py-1 flex items-center gap-1 rounded-full">
                            {navLinks.map((link, index) => (
                                <a key={index} href={link.href}
                                   className="hover:menu-backdrop text-forest-mid px-4 py-2 text-sm rounded-full hover:text-forest hover:bg-bg-light-card transition-all">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Button size="sm">Contact Me</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden p-2 text-forest">
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen &&
                        (<div className="md:hidden menu-backdrop-strong">
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <a key={index} href={link.href}
                                   className="text-lg text-forest-mid hover:text-forest py-2 transition-all">
                                    {link.label}
                                </a>
                            ))}
                            <Button>Contact Me</Button>

                        </div>
                    </div>)}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;