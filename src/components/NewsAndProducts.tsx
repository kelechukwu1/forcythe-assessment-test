"use client"
import React from 'react'
import CustomButton from './CustomButton'
import { RiArrowRightSFill } from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'
import { productsData } from '@/data/dummyData'
import AnimatedText from './AnimatedText'
import { motion } from "framer-motion";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const NewsAndProducts = () => {
    return (
        <div className="mx-[2.5rem] lg:mx-28 my-10 lg:mb-24">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
                <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
                    <AnimatedText text='Read our articles, news and product blog' marginRight='10px' />
                </p>
                <CustomButton text="Visit Blog" icon={<RiArrowRightSFill className="text-2xl" />} />
            </div>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {productsData.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={itemVariants}
                    >
                        <Link
                            href={'#'}
                            className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm group hover:shadow-sky-600 transition-all duration-500"
                        >
                            <div className='h-60 sm:h-56 relative mb-6'>
                                <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse" />
                                <Image src={item.image} alt={item.title} width={500} height={500} className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105" />
                            </div>
                            <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
                                <p className='text-lg font-semibold mb-1'>{item.category}</p>
                                <div className="text-base text-gray-400 flex items-center mb-6">
                                    <span>{item.author}</span>
                                    <div className='h-2 w-2 rounded-full bg-white mx-[6px]' />
                                    <span>{item.date}</span>
                                </div>
                                <h6 className='text-xl md:text-2xl font-semibold line-clamp-2'>{item.title}</h6>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default NewsAndProducts
