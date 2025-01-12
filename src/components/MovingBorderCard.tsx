"use client";
import React from "react";
import { MovingBorderWrapper } from "./ui/moving-border";
import Image from "next/image";
import { cards } from "@/data/dummyData";
import AnimatedText from "./AnimatedText";

export function MovingBorderCard() {
    return (
        <div className="px-5 lg:px-28 py-14 bg-custom-gradient">
            <h4 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-[#b3d0f2] text-center">
                <AnimatedText text='Your best call for B2B/B2C product innovation' marginRight='10px' />
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card) => (
                    <MovingBorderWrapper
                        key={card.id}
                        duration={5000}
                        borderRadius="1.75rem"
                        className="bg-[#030516] dark:bg-slate-900 text-black dark:text-white dark:border-slate-800 p-10"
                    >
                        <div className="flex flex-col items-start text-center">
                            <Image src={card.icon} alt={card.heading} height={45} width={45} className="mb-4 p-2 bg-[#3b6592] rounded-[10px]" />
                            <h5 className="text-xl text-white font-medium mb-5">
                                <AnimatedText text={card.heading} />
                            </h5>
                            <p className="text-gray-400 text-start">
                                <AnimatedText text={card.text} marginRight="5px" duration={3} />
                            </p>
                        </div>
                    </MovingBorderWrapper>
                ))}
            </div>
        </div>
    );
}