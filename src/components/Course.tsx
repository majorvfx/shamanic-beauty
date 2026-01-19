"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const whoIsFor = [
    "High-functioning women who feel a subtle, persistent emptiness despite their success.",
    "Leaders who are tired of 'pushing' and want to lead from magnetism and ease.",
    "Women who suspect their 'anxiety' is actually untended intuition.",
    "Those seeking a spiritual container that is grounded, not 'floaty' or bypassing real work.",
];

const whoIsNotFor = [
    "Those looking for a 'quick fix' or magic pill without looking at themselves.",
    "Women who are not ready to take responsibility for their own emotional state.",
    "Those unwilling to invest time and energy into their own transformation.",
];

const pillars = [
    {
        title: "The Curriculum",
        desc: "Lifetime access to 8 mastery modules covering the R.E.A.L. method.",
    },
    {
        title: "Live Alchemy",
        desc: "Weekly ceremonial calls for clearing, healing, and group integration.",
    },
    {
        title: "The Sisterhood",
        desc: "A curated circle of high-caliber women walking the same path.",
    },
    {
        title: "Private Guidance",
        desc: "Optional 1:1 sessions with Phoenix for deep personal breakthrough.",
    },
];

const Course = () => {
    return (
        <section id="course" className="py-32 bg-cream/20 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-foreground/60 tracking-[0.2em] uppercase text-xs font-medium mb-4 block">
                        The Divine Feminine Alchemy Program
                    </span>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-foreground mb-6">
                        A Guided <span className="font-serif italic text-gold">Transformational</span> Journey
                    </h2>
                    <p className="max-w-2xl mx-auto text-foreground/70 text-lg font-light">
                        This is a container for deep recalibration. We move beyond information into transformation.
                    </p>
                </div>

                {/* Who It Is For / Not For */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <div className="bg-white/50 p-10 rounded-3xl border border-white/60">
                        <h3 className="text-2xl font-serif italic text-foreground mb-8">Who This Is For</h3>
                        <ul className="space-y-4">
                            {whoIsFor.map((item, i) => (
                                <li key={i} className="flex gap-4 text-foreground/80 font-light">
                                    <Check className="text-gold shrink-0 mt-1" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white/30 p-10 rounded-3xl border border-white/40">
                        <h3 className="text-2xl font-serif italic text-foreground mb-8 text-opacity-80">Who This Is NOT For</h3>
                        <ul className="space-y-4">
                            {whoIsNotFor.map((item, i) => (
                                <li key={i} className="flex gap-4 text-foreground/60 font-light">
                                    <X className="text-foreground/40 shrink-0 mt-1" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Program Structure */}
                <div className="mb-24">
                    <h3 className="text-3xl font-light text-center mb-12 text-foreground">Program Structure</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background p-8 rounded-2xl text-center border border-foreground/5 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h4 className="text-xl font-medium text-foreground mb-3">{pillar.title}</h4>
                                <p className="text-foreground/60 font-light text-sm">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Pricing / CTA */}
                <div className="max-w-4xl mx-auto bg-foreground text-background rounded-[3rem] p-12 lg:p-16 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-5xl font-serif italic text-cream mb-6">Create Your Legacy from Love</h3>
                        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto font-light">
                            Join the next cohort of Divine Feminine Alchemy. Applications are open for a limited time.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-4 bg-cream text-foreground rounded-full text-lg font-medium hover:bg-white transition-colors">
                                Apply for the Program
                            </button>
                            <span className="text-white/50 text-sm">Or</span>
                            <button className="text-cream underline underline-offset-4 hover:text-white transition-colors">
                                Schedule a Clarity Call
                            </button>
                        </div>
                    </div>

                    {/* Background accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-celestial/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default Course;
