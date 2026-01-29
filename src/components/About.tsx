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

                        <div className="space-y-6 text-base md:text-lg text-foreground font-light leading-relaxed">
                            <p>
                                As someone who broke the Billboard Top 10 as an independent recording artist, yet dreaded getting on stage most of the time, I know what it means to appear confident at the top of your game while quietly carrying the weight of not fully trusting your own voice, even after years of building success.
                            </p>
                            <p>
                                I met so many remarkable women along the way, executives and creatives with extraordinary careers. Yet beneath the success, there was often a disconnect, an absence of ease, joy, and true connection. It stirred something essential inside me, because I recognized it in myself, and my purpose began to expand beyond just my music career and toward helping other women reconnect to their true happiness.
                            </p>
                            <p>
                                When I got off the road from my music tour, I realized I needed to do the work, to understand what I had experienced, the old subconscious patterns and beliefs holding me back, and what I was seeing mirrored in the many women I met along the way. Over the years, I became a hypnotherapist, a past life regressionist, a somatic healer, and a shamanic practitioner. I immersed myself in the ancient feminine wisdom teachings that had been largely forgotten or fragmented.
                            </p>
                            <p>
                                The truth I couldn’t ignore was that most women were not experiencing their fullness. The wisdom that once passed from mother to daughter, from grandmother to granddaughter, had been interrupted for generations, silenced.
                            </p>
                            <p>
                                I felt that absence profoundly, having been given up at birth and disconnected from lineage, without the wisdom of my grandmothers.
                            </p>
                            <p>
                                When feminine wisdom is missing, it shapes how we relate to everything in our world, our bodies, our relationships, how we love, how we lead, and how much of ourselves we allow to exist.
                            </p>
                            <p>
                                As women, we carry many lives inside one body, constantly holding, responding, providing, and creating. Over time, that holding becomes a way of being, and the body forgets what it feels like to rest inside itself, to be held rather than holding.
                            </p>
                            <p>
                                As I moved into becoming a high level coach for women, I saw that same absence reflected in nearly every woman I worked with. High achieving, capable women who knew how to succeed, yet carried a quiet disconnection from intimacy, from ease, and from their own inner authority.
                            </p>
                            <p>
                                We learned how to succeed, but many of us did so by leaving our natural state behind. I created Divine Feminine Alchemy because no woman should have to live her life disconnected from her body, her wisdom, or the lineage that has always belonged to her.
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
