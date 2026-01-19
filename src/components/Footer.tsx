"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="pt-32 pb-12 border-t border-card-border relative overflow-hidden bg-sand/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8 max-w-md leading-[0.9] text-foreground">
                            Ready to <br />
                            <span className="text-gold italic font-serif">Rise?</span>
                        </h2>
                        <p className="text-foreground/60 text-xl mb-12 max-w-sm">
                            Transformation is a choice. Make yours today.
                        </p>
                        <button className="flex items-center gap-4 group">
                            <span className="text-2xl font-light border-b border-gold-dark py-2 group-hover:text-gold-dark transition-colors text-foreground">
                                Book your discovery call
                            </span>
                            <div className="w-12 h-12 rounded-full border border-gold-dark flex items-center justify-center group-hover:bg-gold-dark group-hover:text-white transition-all text-foreground">
                                <ArrowRight size={24} />
                            </div>
                        </button>
                    </div>

                    <div>
                        <h4 className="font-medium uppercase tracking-widest text-xs mb-8 text-foreground/40">Navigation</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#method">The Method</FooterLink>
                            <FooterLink href="#course">The Course</FooterLink>
                            <FooterLink href="#stories">Success Stories</FooterLink>
                            <FooterLink href="#about">About Phoenix</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium uppercase tracking-widest text-xs mb-8 text-foreground/40">Connect</h4>
                        <div className="flex gap-6">
                            <SocialIcon icon={<Instagram size={24} />} />
                            <SocialIcon icon={<Linkedin size={24} />} />
                            <SocialIcon icon={<Twitter size={24} />} />
                        </div>
                        <p className="mt-8 text-foreground/40 text-sm">
                            phoenix@shamanicbeauty.com
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-foreground/5 gap-8">
                    <span className="text-2xl font-light tracking-tighter text-gradient-gold uppercase">
                        Shamanic Beauty
                    </span>
                    <p className="text-foreground/40 text-sm">
                        © 2026-2027 Shamanic Beauty. All Rights Reserved.
                    </p>
                    <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-foreground/40">
                        <Link href="#" className="hover:text-gold-dark transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gold-dark transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Footer glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gold/5 blur-[120px] -z-10" />
        </footer>
    );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link href={href} className="text-lg font-light hover:text-gold-dark transition-colors text-foreground/80">
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <Link href="#" className="text-foreground/50 hover:text-gold-dark transition-all transform hover:scale-110">
        {icon}
    </Link>
);

export default Footer;
