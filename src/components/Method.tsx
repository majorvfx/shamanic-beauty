"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Waves, Sun, Heart } from "lucide-react";

const steps = [
    {
        title: "R — Remembering",
        description: "The body regains access to what has been carried in the subconscious, the tissues, and the lineage across lifetimes. What was adapted, silenced, or forgotten in order to survive begins to surface.",
        icon: <Sparkles className="text-gold" size={32} />,
        color: "bg-gold/10",
    },
    {
        title: "E — Embodying",
        description: "What is remembered settles into the nervous system through breath. The body learns it is safe to hold truth without bracing, collapsing, or disconnecting.",
        icon: <Waves className="text-sunset" size={32} />,
        color: "bg-sunset/10",
    },
    {
        title: "A — Alchemizing",
        description: "Inherited patterns reorganize at a cellular and emotional level. Survival strategies soften because they are no longer needed. Coherence replaces fragmentation.",
        icon: <Sun className="text-gold-light" size={32} />,
        color: "bg-gold-light/10",
    },
    {
        title: "L — Loving",
        description: "Loving returns as an embodied state. This is the embodiment of self-love, forgiveness of self, and forgiveness carried through the lineage. The return of the feminine heart.",
        icon: <Heart className="text-rose-400" size={32} />,
        color: "bg-rose-400/10",
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
                            <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner`}>
                                {step.icon}
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
