"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
                            <Image
                                src="/assets/phoenix-rising.jpg"
                                alt="Phoenix Rising"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-20" />
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
                                From the outside, I was highly successful.
                            </p>
                            <p>
                                As an independent recording artist, I broke the Billboard Top 10 under the name Nyee Moses, reaching over six million listeners worldwide. I was driven, disciplined, and capable. I showed up on the big stage and knew how to perform at a high level.
                            </p>
                            <p>
                                What most people couldn’t see, even at this level of success, was what lived underneath it. Unresolved abandonment and early childhood trauma didn’t disappear with accomplishment. They were buried beneath productivity, motivation, and my ability to be strong. Behind the success, I struggled with impostor syndrome and self-worth, carrying a quiet disconnection from my true voice and intuition.
                            </p>
                            <p>
                                I began to realize that no amount of success would ever feel complete without restoring my connection to my feminine heart, my intuition, and my body. What followed was not a reinvention, but a remembering.
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
