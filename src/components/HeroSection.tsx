import React from 'react'
import CustomButton from './CustomButton'
import { RiArrowRightSFill } from 'react-icons/ri'
import AnimatedText from './AnimatedText'


const HeroSection = () => {
    return (
        <div className="mx-5 lg:mx-28">
            <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
                <div className="max-w-[56rem] lg:max-w-[58rem]">
                    <div className="min-h-[180px]">
                        <h1 className="text-[3.2rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
                            <AnimatedText text="We build" marginRight='15px' />
                            <span className="px-2">
                                <AnimatedText text="products" marginRight='20px' wordStyle={{ color: '#60a6e7' }} />
                            </span>
                            <AnimatedText marginRight='15px' text="that shape a better future" />
                        </h1>
                    </div>
                    <div className="mb-8 max-w-3xl">
                        <div className="text-gray-300 text-base md:text-lg mb-8 leading-7">
                            <AnimatedText marginRight='5px' text="We're the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation." />
                        </div>
                    </div>
                    <CustomButton
                        text="Book a call"
                        icon={<RiArrowRightSFill className="text-2xl" />}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
