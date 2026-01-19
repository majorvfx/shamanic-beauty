"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Alexandra Sterling",
        role: "Founding Partner at Nexus",
        content: "Working with Phoenix didn’t just change my business. It changed my entire frequency. I achieved in three months what I couldn’t in three years.",
        image: "AS",
    },
    {
        name: "Elena Vance",
        role: "Tech CEO",
        content: "Divine Feminine Alchemy is the missing piece for high performing women. It is deep, grounded, and genuinely transformative.",
        image: "EV",
    },
    {
        name: "Sasha Thorne",
        role: "Artist and Philanthropist",
        content: "I finally feel aligned. The Method is profound, and Phoenix guides with a grace and clarity I’ve never experienced before.",
        image: "ST",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="stories" className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-6 text-foreground">
                            Success <br />
                            <span className="font-serif italic text-gold">Stories</span>
                        </h2>
                        <p className="text-foreground/60 text-xl font-light">
                            Voices of women who have risen from the ashes.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            className="w-16 h-16 rounded-full border border-card-border flex items-center justify-center hover:bg-gold-dark hover:text-white hover:border-transparent transition-all text-foreground"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="w-16 h-16 rounded-full border border-card-border flex items-center justify-center hover:bg-gold-dark hover:text-white hover:border-transparent transition-all text-foreground"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="glass p-12 md:p-20 rounded-[40px] relative bg-white/60 shadow-xl border border-white"
                        >
                            <Quote className="absolute top-12 right-12 text-gold/20" size={100} />
                            <div className="relative z-10">
                                <p className="text-2xl md:text-4xl font-light leading-tight mb-12 max-w-4xl text-foreground">
                                    "{testimonials[index].content}"
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark font-medium text-xl border border-gold/20 shadow-sm">
                                        {testimonials[index].image}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-normal text-foreground">{testimonials[index].name}</h4>
                                        <p className="text-foreground/50">{testimonials[index].role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/4 h-full bg-blush blur-[150px] -z-10 mix-blend-multiply" />
        </section>
    );
};

export default Testimonials;
