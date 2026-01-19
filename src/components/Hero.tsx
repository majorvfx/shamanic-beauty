"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
    // CHANGE THE VIDEO URL HERE
    const BACKGROUND_VIDEO_URL = "https://www.youtube.com/watch?v=MLm07I49RiE";

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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] opacity-50 pointer-events-none">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1`}
                            className="w-full h-full"
                            allow="autoplay; encrypted-media"
                            title="Background Video"
                        />
                    </div>
                )}
                <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px]" />
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
                    <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-white/50 backdrop-blur text-gold-dark text-xs tracking-[0.2em] uppercase mb-8 shadow-sm text-foreground/80">
                        My Method is R·E·A·L.
                    </span>
                    <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8 text-foreground">
                        <span className="text-gold italic font-serif">Divine Feminine</span> <br />
                        Alchemy
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed font-serif italic text-gold">
                        She Remembers... Embodies... Alchemizes... returns to Loving herself.
                    </p>
                    <p className="max-w-2xl mx-auto text-lg text-foreground/70 mb-12 leading-relaxed font-light">
                        This work is for women who know how to succeed, yet feel the quiet cost of always being strong.
                        It is about remembering who you were before you learned to override yourself.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-full bg-foreground text-background text-lg overflow-hidden transition-all shadow-xl hover:shadow-2xl"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Schedule a Free Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>

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
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="mt-20 relative max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-2xl shadow-gold/10 border border-white/40 aspect-video group bg-white"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-blush/20 z-10" />
                    <div className="w-full h-full flex items-center justify-center bg-[#FDFCFB]">
                        <span className="text-foreground/5 text-8xl font-light select-none font-serif italic">SHAMANIC</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
