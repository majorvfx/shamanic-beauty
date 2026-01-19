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
                    Have you achieved everything you thought you wanted,
                    <span className="font-serif italic text-gold block mt-2">but still feel empty?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 text-xl font-light text-foreground/70 leading-relaxed"
                >
                    <p>
                        You are high-functioning, successful, and capable. You know how to get things done.
                        But underneath the accolades and the stability, there is a subtle, persistent disconnection.
                    </p>
                    <p>
                        You suspect that your "anxiety" is actually untended intuition.
                        You feel a longing for something deeper, something <em>real</em>, but you don't know how to access it without falling apart.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
