"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { RiArrowRightSFill } from 'react-icons/ri';
import CustomButton from './CustomButton';
import { SparkToLightTabs } from '@/data/dummyData';
import AnimatedText from './AnimatedText';
import { Button } from './ui/button';

const SparkToSpotlight: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="mx-5 lg:mx-28 py-20">
            <h4 className="text-[1.9rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem] pb-12 xl:mb-0 max-w-[45rem]">
                <AnimatedText text='From' />
                <span className="text-[#60a6e7] px-2">
                    <AnimatedText text='Spark' wordStyle={{ color: '#60a6e7' }} />
                </span>
                <AnimatedText text='to' />
                <span className="text-[#60a6e7] pl-2">
                    <AnimatedText text='Spotlight' wordStyle={{ color: '#60a6e7' }} />
                </span>
                <AnimatedText text=': we take you every step of the way to success.' marginRight='10px' />

            </h4>
            <div className='flex flex-col md:flex-row'>
                <div className='mb-10 md:mb-0'>
                    <div className="basis-1/2 flex mb-4 md:mb-0 justify-center items-center">
                        <div className="md:pr-10">
                            <div className="border-2 border-[#b3d0f2] mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                                {SparkToLightTabs.map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(index)}
                                        onKeyPress={(e) => { if (e.key === 'Enter') setActiveTab(index) }}
                                        className={`${activeTab === index ? 'bg-[#a4c2e4] text-black hover:bg-[#92b8e3]' : "text-white bg-none"} px-2 md:px-8 py-3 md:py-7 rounded-full text-center overflow-hidden text-base font-medium cursor-pointer transition-all duration-300`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col max-w-[35rem] mb-7'>
                        <div className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                            <AnimatedText text={SparkToLightTabs[activeTab].heading} marginRight='10px' />
                        </div>
                        <p className="text-gray-300 text-base md:text-lg mb-8 leading-7">
                            <AnimatedText text={SparkToLightTabs[activeTab].text} marginRight='5px' />
                        </p>
                    </div>
                    <CustomButton text="Book a call" icon={<RiArrowRightSFill />} className="text-2xl" />
                </div>

                <div className="md:basis-1/2">
                    <Image src={SparkToLightTabs[activeTab].img} alt={`Image for ${SparkToLightTabs[activeTab].text}`} width={300} height={200} className="rounded-lg w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]" />
                </div>
            </div>
        </div>
    );
};

export default SparkToSpotlight;