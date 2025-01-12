"use client"

import { tabs } from '@/data/dummyData';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

const DiscoverTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
        }, 5000);
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        startInterval();
    };

    return (
        <div className="mx-5 lg:mx-28 py-10">
            <h4 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
                Discover the{' '}
                <span className="text-[#60a6e7] px-2">transformative stories </span> of
                startups that scaled new heights with us
            </h4>
            <div className="w-full overflow-x-scroll hide-scrollbar">
                <div className="flex justify-center items-center border-2 border-[#06438c] rounded-s-full rounded-e-full min-w-[750px]">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            className={`w-full flex justify-center items-center p-[1.1rem] cursor-pointer transition-all duration-300 ${activeTab === 0 && "rounded-s-full"} ${activeTab === 4 && "rounded-e-full"} ${activeTab === index && 'bg-[#0c2645]'}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <div className="flex items-center w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit justify-center">
                                <Image src={tab.label} alt={`Tab ${index + 1}`} width={index === 0 ? 20 : 100}
                                    height={index === 0 ? 20 : 100} loading='lazy' />
                                {index === 0 && <span className="ml-">Starks</span>}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className={`mt-5 w-full lg:w-[50%] flex relative ${activeTab === 0 ? 'md:justify-center md:items-center lg:justify-normal lg:items-start lg:left-0' : activeTab === 1 ? 'lg:left-[16rem]' : activeTab === 2 ? "lg:left-[33rem]" : activeTab === 3 ? 'lg:ml-[23rem]' : 'lg:ml-[38rem]'}`}>
                <div className={`md:w-[75%] lg:w-full flex flex-col sm:flex-row sm:p-7 bg-accent3 rounded-3xl overflow-hidden max-w-m mx-auto bg-[#0c2645] p-8 my-10`}>
                    <div className="relative z-10 md:flex gap-5">
                        <div className='mb-5 md:mb-0'>
                            <h2 className="text-xl font-bold mb-2">
                                <AnimatedText text={tabs[activeTab].heading} marginRight='10px' />
                            </h2>
                            <p className="mb-4">
                                <AnimatedText text={tabs[activeTab].text} marginRight='5px' />
                            </p>
                            <p className="font-semibold">
                                <AnimatedText text={tabs[activeTab].writer} marginRight='5px' />
                            </p>

                        </div>
                        <Image src={tabs[activeTab].img} height={100} width={100} alt={tabs[activeTab].heading} className="w-full h-auto rounded-xl" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DiscoverTabs;