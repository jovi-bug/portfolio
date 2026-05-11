import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

import LanguageToggle from '@/components/layout/LanguageToggle.jsx';

const Navbar = () => {
    const {t} = useTranslation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '#about', label: t('nav.about') },
        { href: '#projects', label: t('nav.projects') },
        { href: '#contact', label: t('nav.contact') },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
            <div className="blur-bg py-5">
                <nav className="container mx-auto px-12 flex items-center justify-between">
                    <a
                        href="#"
                        className="text-forest-mid font-display font-bold text-2xl tracking-tight hover:text-accent transition-all"
                    >
                        TN<span className="text-forest-mid">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className="px-2 py-1 flex items-center gap-1 rounded-full">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-forest-mid px-4 py-2 text-base rounded-full hover:text-accent transition-all"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <LanguageToggle />
                    </div>

                    {/* Mobile Menu AnimatedButton */}
                    <button
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-forest"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="container mx-auto px-12 py-6 flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                                    className="text-lg text-text-primary-dark hover:text-accent py-2 transition-all"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;