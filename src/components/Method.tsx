"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        letter: "R",
        title: "Remember",
        description: "The body remembers what was silenced in women across generations. What was carried through mothers and grandmothers, held quietly in the body and subconscious, begins to return.",
    },
    {
        letter: "E",
        title: "Embody",
        description: "When a woman is embodied, her nervous system settles and her whole system leans toward truth. Her body remembers how to receive, and she relaxes into presence without collapsing or disconnecting.",
    },
    {
        letter: "A",
        title: "Alchemize",
        description: "Alchemy is a woman’s superpower. As the one who births life, she transforms what she carries. Ancestral trauma no longer needs to be hers.",
    },
    {
        letter: "L",
        title: "Love",
        description: "To love authentically is the highest frequency found in a woman’s heart. Self-love and compassion restore her Divine Heart, making real intimacy possible.",
    },
];

const Method = () => {
    return (
        <section id="method" className="py-32 relative bg-sand/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-6 text-foreground">
                        The <span className="font-serif italic text-gold">R·E·A·L</span> Method
                    </h2>
                    <p className="max-w-xl mx-auto text-foreground/60 text-lg font-light">
                        Method means “the way through.” This is a passage for the feminine body to restore what has been disconnected.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="glass p-10 rounded-[32px] flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 bg-white/40"
                        >
                            <div className="w-20 h-20 bg-foreground rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg border border-cream/10">
                                <span className="font-serif text-4xl text-cream font-medium">{step.letter}</span>
                            </div>
                            <h3 className="text-2xl font-normal mb-4 text-foreground">{step.title}</h3>
                            <p className="text-foreground/60 leading-relaxed font-light">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Method;
