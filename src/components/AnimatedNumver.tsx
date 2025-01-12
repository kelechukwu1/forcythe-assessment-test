"use client"
import React from "react";
import { motion } from "framer-motion";

const countUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
        },
    }),
};

const AnimatedNumber = ({ value, index }: { value: number, index: number }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev < value) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return value;
                }
            });
        }, 2000 / value);

        return () => clearInterval(interval);
    }, [value]);

    return (
        <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={countUpVariants}
        >
            {count}+
        </motion.div>
    );
};

export default AnimatedNumber;