


const footerLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"},
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="absolute w-full py-12 border-t border-border z-50">
            <div className="container mx-auto px-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl text-forest font-display font-bold tracking-tight">
                            TN<span className="text-accent">.</span>
                        </a>
                        <p className="text-sm text-forest-mid mt-2">
                            © {currentYear} Tjorve Nielsen. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-forest-mid hover:text-accent"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    {/*<div className="flex items-center gap-4">*/}
                    {/*    {socialLinks.map((social) => (*/}
                    {/*        <a*/}
                    {/*            key={social.label}*/}
                    {/*            href={social.href}*/}
                    {/*            aria-label={social.label}*/}
                    {/*            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"*/}
                    {/*        >*/}
                    {/*            <social.icon className="w-5 h-5" />*/}
                    {/*        </a>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
            </div>
        </footer>
    );
};