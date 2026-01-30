"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-background/80 backdrop-blur-lg border-b border-card-border" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-light tracking-tighter text-gradient-gold uppercase">
                        Shamanic Beauty
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="/#method">The Method</NavLink>
                    <NavLink href="/frequency">Frequency</NavLink>
                    <NavLink href="/#course">The Course</NavLink>
                    <NavLink href="/#stories">Success Stories</NavLink>
                    <Link
                        href="https://square.site/book/L9X8X8H0K6K09/shamanic-beauty-cloverdale-or"
                        target="_blank"
                        className="px-6 py-2.5 rounded-full bg-gold text-background font-medium hover:bg-gold-light transition-colors"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-background border-b border-card-border p-6 flex flex-col space-y-4 md:hidden"
                >
                    <NavLink href="/#method" onClick={() => setMobileMenuOpen(false)}>The Method</NavLink>
                    <NavLink href="/frequency" onClick={() => setMobileMenuOpen(false)}>Frequency</NavLink>
                    <NavLink href="/#course" onClick={() => setMobileMenuOpen(false)}>The Course</NavLink>
                    <NavLink href="/#stories" onClick={() => setMobileMenuOpen(false)}>Success Stories</NavLink>
                    <Link
                        href="https://square.site/book/L9X8X8H0K6K09/shamanic-beauty-cloverdale-or"
                        target="_blank"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full text-center px-6 py-3 rounded-full bg-gold text-background font-medium"
                    >
                        Book Now
                    </Link>
                </motion.div>
            )}
        </nav>
    );
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className="text-foreground/70 hover:text-gold transition-colors font-light text-sm uppercase tracking-widest"
    >
        {children}
    </Link>
);

export default Navbar;
