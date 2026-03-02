import {useTranslation} from "react-i18next";
import {Github, Linkedin} from "lucide-react";


export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const {t} = useTranslation();

    const footerLinks = [
        {href: "#about", label: t("nav.about")},
        {href: "#projects", label: t("nav.projects")},
        {href: "#contact", label: t("nav.contact")},
    ];

    //TODO Add URLs for scoial links
    const socialLinks = [
        {href: "#", label: "LinkedIn", icon: Linkedin},
        {href: "#", label: "GitHub", icon: Github},
    ]

    return (
        <footer className="absolute w-full py-12 border-t border-border border-white z-50 bg-sage text-white">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-8">
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
                                className="text-sm text-forest hover:text-accent"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-end gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="p-2 rounded-full bg-bg-light-card hover:bg-white hover:text-accent transition-all"
                            >
                                <social.icon className="w-5 h-5 text-forest" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};