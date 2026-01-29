"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sat Purkh",
        role: "Energy Healer",
        content: "Phoenix is a truly transportive presence. Being with her lifts your spirit and opens your heart. In my session, her subtle touch unlocked an experience of profound beauty and healing that shifted my perception of my own work. I felt immersed in light, clarity, and deep energetic alignment. The impact opened a new stream of healing energy I now access for myself and others. Working with Phoenix felt like receiving a direct transmission of love from the universe.",
        image: "SP",
    },
    {
        name: "Delina Yasmeh",
        role: "Creative & Spiritual Mentor Client",
        content: "Phoenix has been my mentor for nearly six years and has transformed my life on every level. As a Shamanic Stylist, she helped align my outer world with my inner truth through space design, decluttering, health, routines, and personal style. Her guidance helped me embody confidence, elegance, and spiritual clarity. Phoenix combines rare talent with deep integrity. When you trust her process, transformation happens from the inside out.",
        image: "DY",
    },
    {
        name: "Victoria Author",
        role: "Legacy Cacao Group, March 2020",
        content: "I have taken many meditation classes, but Phoenix’s guidance stands apart. Her presence feels both grounding and expansive, creating deep safety and openness. She facilitates profound inner journeys using only her voice, presence, and your willingness. The depth of awareness I experienced felt comparable to plant medicine journeys, yet entirely natural. Phoenix carries embodied wisdom and shares it with grace and precision.",
        image: "VA",
    },
    {
        name: "Danica Benavente-Schutz, MPT",
        role: "Owner, Concierge Physical Therapy, Co-Founder, Soulete",
        content: "As a physical therapist focused on mind-body healing, I sought a mentor in energy work. Finding Phoenix changed everything. She is authentic, generous, and deeply knowledgeable. In a short time, she opened doors connected to my soul purpose and expanded my healing capacity. Her work has supported my growth in ways no other modality has. I am grateful to continue learning and receiving healing from her.",
        image: "DB",
    },
    {
        name: "Cam Green",
        role: "Coach",
        content: "Phoenix is the real deal. After one session, my meditation practice shifted from frustrating to the best part of my day. She communicates ancient wisdom in a clear, grounded way. I also received Reiki from her and experienced a noticeable reduction in joint pain after a single session. Her work delivers real results.",
        image: "CG",
    },
    {
        name: "Sarena",
        role: "",
        content: "I had a powerful session with Phoenix. Issues I had been working on for a long time released in a single session. I am deeply grateful for the clarity and healing I experienced.",
        image: "S",
    },
    {
        name: "Serjan Burlak Deon",
        role: "",
        content: "Seeing Phoenix on my birthday was one of the highlights of my year. She helped me remember my roots and expand my inner vision in a way no one else has. The insights from our time together reshaped how I understand purpose, truth, and personal responsibility. Her impact continues to unfold in my awareness.",
        image: "SB",
    },
    {
        name: "Yosef Bender",
        role: "",
        content: "Phoenix reached out to support me during a serious health event. Even over the phone, her presence guided me into a deep meditative and visionary state. The experience was profound, restorative, and deeply peaceful. Following the session, my body recovered rapidly and a lasting sense of clarity remained. Phoenix works at the root level of healing, beyond symptoms, with remarkable depth.",
        image: "YB",
    },
    {
        name: "Lotus Blu Fire",
        role: "",
        content: "Phoenix entered my life during a long spiritual journey shaped by many teachers. She assisted me in clearing old patterns, activating higher awareness, and strengthening my ability to hold elevated states of consciousness. Her unconditional presence and clarity helped ignite deeper ascension within me. I am profoundly grateful for her guidance and light.",
        image: "LB",
    },
    {
        name: "Jennifer Ricci",
        role: "",
        content: "Attending Phoenix’s “Mapping the Mind” experience was deeply profound. She guided us into meditation at a level that revealed new layers of self-connection. I experienced deep inner peace and lasting happiness. Phoenix offers rare clarity and teaches from embodied wisdom. The evening felt sacred and transformative.",
        image: "JR",
    },
    {
        name: "Angela Ji",
        role: "",
        content: "My session with Phoenix was a powerful third-eye activation. The experience brought heightened awareness, vivid dreams, and lasting insight. Her guidance afterward helped integrate the experience with clarity. The Reiki work was deeply restorative, and her space felt like a true sanctuary. I am grateful our paths crossed.",
        image: "AJ",
    },
    {
        name: "Zaya May",
        role: "Breathwork Client",
        content: "The breathwork journey Phoenix guided me through led to a depth of emotional release I had never experienced before. It shifted long-held patterns and opened new space within me. The impact was immediate and lasting.",
        image: "ZM",
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
