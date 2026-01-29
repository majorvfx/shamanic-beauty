"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
    "THE HISTORY CHANNEL", "GAIA", "ENTERTAINMENT WEEKLY", "BILLBOARD", "SPOTIFY"
];

const Marquee = () => {
    return (
        <div className="py-20 border-y border-card-border overflow-hidden bg-sand/30">
            <div className="container mx-auto px-6 mb-10 text-center">
                <span className="text-xs font-medium tracking-[0.3em] text-foreground/40 uppercase">
                    As Seen In
                </span>
            </div>

            <div className="flex whitespace-nowrap overflow-hidden group">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex space-x-20 items-center pr-20"
                >
                    {/* Double the array to create seamless loop */}
                    {[...brands, ...brands].map((brand, index) => (
                        <span
                            key={index}
                            className="text-3xl md:text-5xl font-serif font-light text-foreground/20 hover:text-gold/80 transition-colors cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
