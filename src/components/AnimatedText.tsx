"use client";

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const AnimatedText = ({ text, marginRight, wordStyle, className, duration = 2 }: { text: string, marginRight?: string, wordStyle?: React.CSSProperties, className?: string, duration?: number }) => {
    const words = text.split(" ");
    const textVariants = {
        hidden: { opacity: 0, },
        visible: { opacity: 1, transition: { duration } },
    };
    return (
        <>
            <motion.span
                initial="hidden"
                animate="visible"
                whileInView={"reveal"}
                variants={containerVariants}
                className={className}
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={textVariants}
                        style={{ display: 'inline-block', marginRight, ...wordStyle }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.span>

        </>
    );
};

export default AnimatedText;