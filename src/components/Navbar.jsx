const Navbar = () => {

    const navLinks = [
        {href: "#about", label: "About"},
        {href: "#projects", label: "Projects"},
        {href: "#skills", label: "Skills"},
        {href: "#contact", label: "Contact"},
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#">TN<span>.</span></a>

                <div>
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href}>
                            {link.label}
                        </a>
                    ))}

                </div>
            </nav>
        </header>
    );
}

export default Navbar;