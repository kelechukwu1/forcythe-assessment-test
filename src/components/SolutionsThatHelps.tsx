import React from 'react'
import AnimatedText from './AnimatedText'
import AnimatedNumber from './AnimatedNumver'

const SolutionsThatHelps = () => {
    return (
        <div className="py-14 md:py-20 xl:py-28 bg-custom-gradient2">
            <div className="max-w-[52rem] mx-auto bg-[url('/arc.svg')] lg:bg-[url('/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
                <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
                    <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-[30rem] mx-auto">
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                            <AnimatedText text='We build solutions that help' marginRight='10px' />
                            <span className='px-2'>
                                <AnimatedText text='businesses' wordStyle={{ color: '#60a6e7' }} />
                            </span>
                            <AnimatedText text='of all sizes to' marginRight='10px' />
                            <span className='px-2'>
                                <AnimatedText text='scale' wordStyle={{ color: '#60a6e7' }} />

                            </span></p>
                    </div>
                    <div className="flex justify-evenly sm:justify-between items-center gap-3">
                        <div className="flex flex-col text-left w-fit">
                            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
                                <AnimatedNumber value={50} index={0} />
                            </div>
                            <span className='text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>Clients</span>
                        </div>
                        <div className="flex flex-col text-left w-fit">
                            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
                                <AnimatedNumber value={120} index={0} />

                            </div>
                            <span className='text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>Projects</span>
                        </div>
                        <div className="flex flex-col text-left w-fit">
                            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
                                <AnimatedNumber value={10} index={0} />

                            </div>
                            <span className='text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>Team Leads</span>
                        </div>
                        <div className="flex flex-col text-left w-fit">
                            <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60a6e7] font-medium">
                                <AnimatedNumber value={10} index={0} />

                            </div>
                            <span className='text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>Glorious Years</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsThatHelps
