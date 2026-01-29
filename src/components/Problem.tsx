"use client";

import React from "react";
import { motion } from "framer-motion";

const Problem = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-light leading-tight text-foreground mb-10"
                >
                    You lead every room. You make the calls. You run the show.
                    <span className="font-serif italic text-gold block mt-2">And yet, something inside still feels empty?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 text-xl font-light text-foreground/70 leading-relaxed"
                >
                    <p className="font-serif italic text-2xl md:text-3xl text-foreground/80">
                        “You’ve mastered how to move forward. What you haven’t been shown is how to come back to yourself.”
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
