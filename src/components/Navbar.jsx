import Button from "@/components/smallComponents/Button.jsx";

const Navbar = () => {

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

                    <div className="flex items-center gap-1">
                        <div className="px-2 py-1 flex items-center gap-1 rounded-full">
                            {navLinks.map((link, index) => (
                                <a key={index} href={link.href}
                                   className="hover:menu-backdrop text-forest-mid px-4 py-2 text-sm rounded-full hover:text-forest hover:bg-bg-light-card transition-all">
                                    {link.label}
                                </a>
                            ))}

                        </div>
                    </div>
                    <div>
                        <Button>Contact Me</Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;