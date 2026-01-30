"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
    // CHANGE THE VIDEO URL HERE
    const BACKGROUND_VIDEO_URL = "https://youtu.be/DeDOitxtwTA";

    const getVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getVideoId(BACKGROUND_VIDEO_URL);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {videoId && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] opacity-50 pointer-events-none">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1`}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            title="Background Video"
                        />
                    </div>
                )}
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1)_0%,rgba(255,255,255,0)_50%)]" />
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-blush rounded-full blur-[120px] mix-blend-multiply" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Floating Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative max-w-md mx-auto flex items-center justify-center mb-8"
                    >
                        <Image
                            src="/assets/shamanic-logo.png"
                            alt="Shamanic Beauty Logo"
                            width={300}
                            height={200}
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8 text-foreground">
                        <span className="text-gold italic font-serif">Divine Feminine</span> <br />
                        Alchemy
                    </h1>
                    <div className="max-w-4xl mx-auto text-xl md:text-3xl text-foreground mb-10 leading-relaxed font-serif italic space-y-2">
                        <p>You will remember your divine femininity.</p>
                        <p>You will embody your intuition.</p>
                        <p>You will alchemize generational stories.</p>
                        <p>You will Love Authentically.</p>
                    </div>
                    <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12 leading-relaxed font-bold">
                        This is for the woman who is highly successful, carrying the quiet cost of holding it all together and ready to exhale.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <Link href="https://calendar.app.google/ufFSRhQpDQZyahyZ6" target="_blank">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 rounded-full bg-foreground text-background text-lg overflow-hidden transition-all shadow-xl hover:shadow-2xl"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Schedule a Free Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </Link>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full border border-foreground/10 hover:border-gold/50 bg-white/50 backdrop-blur text-foreground text-lg transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
                        >
                            <Play size={20} className="text-gold fill-gold" /> The Alchemy Course
                        </motion.button>
                    </div>
                </motion.div>

                {/* Hero Image/Asset Placeholder */}

            </div>
        </section>
    );
};

export default Hero;
