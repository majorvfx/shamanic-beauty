import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FrequencyPage() {
    return (
        <main className="bg-background min-h-screen text-foreground font-sans selection:bg-gold/30">
            {/* Hero Section */}
            <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/frequency-hero.png"
                        alt="Feminine Frequency Hero"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
                </div>

                <div className="relative z-10 container mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4 drop-shadow-lg animate-fade-in-up">
                        The Feminine Frequency of Abundance
                    </h1>
                    <h2 className="text-xl md:text-2xl font-light text-gold-dark tracking-widest uppercase mb-8 animate-fade-in-up delay-200">
                        Women are the Living Law of Abundance
                    </h2>
                    <Link
                        href="https://calendar.app.google/ufFSRhQpDQZyahyZ6"
                        target="_blank"
                        className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-background font-medium text-lg rounded-none transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-fade-in-up delay-300"
                    >
                        Schedule a Session
                    </Link>
                </div>
            </section>

            {/* Main Content - Frequency */}
            <section className="py-16 md:py-24 px-6 relative z-10">
                <div className="container mx-auto max-w-4xl space-y-8 text-lg font-light leading-relaxed text-foreground/90">
                    <p>
                        Sister, what if you could feel it in your body first. Your belly soft
                        and relaxed. Your heart open and safe. Your throat settled, your
                        voice steady, at ease, like the warm sun on your face. Not rushing,
                        not reaching, just being held in a quiet sense of enough. It is the
                        kind of ease that tells your nervous system it can finally rest. In
                        that moment, you have everything you need, and your natural abundance activates.
                    </p>
                    <p>
                        This is not a course designed to fix you or teach you how to become
                        abundant. It is a return to the original state where women receive
                        safely and life flows without force. A remembering of the divine
                        architecture your body was born with.
                    </p>
                    <p>
                        Abundance, in its true form, has never been about money alone. It is
                        an overflow of resources, opportunity, support, love, creativity,
                        gratitude, and time. When a woman’s body is regulated and her
                        nervous system feels at ease, abundance expresses itself naturally.
                        Not because she chased it, but because she is finally available to
                        receive it.
                    </p>
                    <p className="text-2xl font-serif text-gold italic text-center py-8">
                        Women are the Living Law of Abundance.
                        <br />
                        <span className="text-lg block mt-4 font-sans not-italic text-foreground">You hold the Trinity Codes. The Universal Laws are yours.</span>
                    </p>
                    <p>
                        <strong className="text-gold font-medium">The Law of Vibration</strong> reminds us
                        that we do not manifest by effort, but by state. Your body is
                        constantly broadcasting information through your nervous system,
                        emotions, and energy field. When you are resourced and regulated,
                        your frequency shifts and life responds.
                    </p>
                    <p>
                        <strong className="text-gold font-medium">The Law of Correspondence</strong> is
                        lived through the feminine body. As within, so without is not a
                        concept to understand, it is a reality women feel. It is the wisdom of the womb, your innate feminine code. When the inner
                        environment becomes safe and coherent, the outer world reorganizes to
                        reflect it.
                    </p>
                    <p>
                        <strong className="text-gold font-medium">The Law of Cause and Effect</strong> completes
                        the cycle with compassion. Many of the issues women carry are
                        inherited, passed from mother to grandmother, from womb to womb.
                        Patterns of overgiving, silence, and self-abandonment live in the
                        body until they are gently released. As these patterns soften, new
                        outcomes emerge without strain.
                    </p>
                    <p>
                        This offering supports women in restoring harmony at the level where
                        creation begins, the body. Balancing frequency is women’s work. It
                        always has been. We are the ones who birth, sustain, and bring beauty
                        into the world. When a woman’s system is supported, her life
                        naturally reflects that support.
                    </p>
                    <p>
                        This is an invitation to move with more joy and ease. To let your
                        body lead. To trust that abundance is not something you need to
                        learn, but something you are designed to live.
                    </p>
                    <p className="text-center font-serif text-xl mt-8">
                        You already carry it.
                        <br />
                        <span className="text-gold block mt-2">This is where you remember.</span>
                    </p>
                </div>
            </section>

            {/* AO Scan Section */}
            <section className="py-20 bg-background-light relative overflow-hidden">
                {/* Decorative / divider element if needed */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gold/10 order-2 md:order-1">
                            <Image
                                src="/assets/ao-scan.png"
                                alt="AO Scan Technology"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                        </div>

                        {/* Text Side */}
                        <div className="space-y-8 order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                                AO SCAN
                            </h2>
                            <div className="w-16 h-1 bg-gold mb-6" />

                            <div className="space-y-6 text-foreground/80 font-light leading-relaxed">
                                <p>
                                    The AO Scan is one of a kind. It delivers a personalized
                                    musical soundscape designed especially for you, bringing your
                                    body back into resonance and gently balancing what was out of
                                    harmony. I often describe it as your very own sound bath,
                                    created just for you.
                                </p>
                                <p>
                                    This cutting-edge bioresonant technology is unlike anything
                                    else, bringing Inner Voice analysis to the market in a way few
                                    modalities have access to. The Inner Voice listens to the
                                    frequency carried in your voice, which reflects your mental,
                                    emotional, physical, and subconscious states.
                                </p>
                                <p>
                                    As a shamanic practitioner and spiritual coach, I often tell my
                                    clients that your voice is the story of your soul. It reflects
                                    everything you have lived, held, and learned. This technology
                                    learns to listen.
                                </p>
                                <p>
                                    From what it hears, the AO Scan delivers personalized music to
                                    support balance and coherence throughout your system. Your body
                                    is simply supported in remembering its natural rhythm, allowing
                                    harmony, joy, and authenticity to return.
                                </p>
                                <div className="border-t border-gold/20 pt-6 mt-6">
                                    <p className="font-serif italic text-xl text-gold-dark">
                                        Sister…
                                    </p>
                                    <p className="mt-2">
                                        You are here to create Abundance… You are the Cosmic Computer, the Feminine Creatrix who births everything into this realm.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <Link
                                    href="https://square.site/book/L9X8X8H0K6K09/shamanic-beauty-cloverdale-or"
                                    target="_blank"
                                    className="inline-block px-8 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-background font-medium text-lg rounded-none transition-all transform hover:scale-105"
                                >
                                    Schedule a Session
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-16 text-center">
                <Link
                    href="https://square.site/book/L9X8X8H0K6K09/shamanic-beauty-cloverdale-or"
                    target="_blank"
                    className="inline-block px-10 py-5 bg-gold text-background font-serif text-xl tracking-wide rounded-none hover:bg-white transition-all shadow-xl"
                >
                    Start Your Frequency Journey
                </Link>
            </section>
        </main>
    );
}
