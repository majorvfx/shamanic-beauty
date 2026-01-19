"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-32 bg-[#E2D8C3]/20 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#DFDDD9]/30 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full max-w-lg relative"
                    >
                        <div className="aspect-[3/4] rounded-[40px] overflow-hidden relative shadow-2xl bg-[#DFDDD9]">
                            {/* Placeholder for Phoenix Rising Image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 text-foreground/20 font-serif italic text-3xl">
                                Phoenix Rising
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-60" />
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-foreground/10 rounded-[40px] -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1"
                    >
                        <span className="text-foreground/60 tracking-[0.2em] uppercase text-xs font-medium mb-6 block">
                            Meet the Founder
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-8 leading-tight">
                            The Method comes through <br />
                            <span className="italic">my lived experience.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-foreground/70 font-light leading-relaxed">
                            <p>
                                I was disconnected from my mother at birth, and the deep distrust that followed lived in my body long before I had language for it. Healing that wound became my passage in this lifetime.
                            </p>
                            <p>
                                It showed me how memory lives inside the body itself. Trauma, abandonment, and disconnection are not ideas we carry. They are physical experiences stored in tissue, breath, and sensation.
                            </p>
                            <p>
                                In order to heal, I had to remember myself. I had to learn how to embody what I felt instead of overriding it. I had to allow what had been suppressed to change, reorganize, and alchemize.
                            </p>
                            <p>
                                Through that process, I returned to loving myself, not as a concept, but as a lived, embodied state.
                            </p>
                        </div>

                        <div className="mt-10 pt-10 border-t border-foreground/10">
                            <p className="font-serif italic text-2xl text-foreground mb-2">Phoenix Rising</p>
                            <p className="text-xs uppercase tracking-widest text-foreground/50 font-medium">Founder of Divine Feminine Alchemy</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
