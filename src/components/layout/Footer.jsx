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

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/tjorve-nielsen-384138209/",
            label: "LinkedIn",
            iconPath: "M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM9,17h-2.523v-7h2.523zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM18,17h-2.442v-3.826c0,-1.058 -0.651,-1.302 -0.895,-1.302c-0.244,0 -1.058,0.163 -1.058,1.302c0,0.163 0,3.826 0,3.826h-2.523v-7h2.523v0.977c0.325,-0.57 0.976,-0.977 2.197,-0.977c1.221,0 2.198,0.977 2.198,3.174z"
        },
        {
            href: "https://github.com/jovi-bug",
            label: "GitHub",
            iconPath: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        },
    ]

    return (
        <footer className="absolute w-full py-6 border-t border-border border-white z-50 bg-sage text-white">
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
                                target="_blank"
                                aria-label={social.label}
                                className="p-2 rounded-full bg-bg-light-card hover:bg-white hover:text-accent transition-all"
                            >
                                <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-forest">
                                    <title>GitHub</title>
                                    <path
                                        d={social.iconPath}/>
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};