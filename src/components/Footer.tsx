import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { RiArrowRightSFill } from 'react-icons/ri';
import CustomButton from './CustomButton';
import { footerIcons, usefulLinks } from '@/data/dummyData';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="px-5 lg:px-28 bg-footer-gradient">
      <div className='text-white py-12 mx-auto space-y-44 '>

        <div className="flex flex-col items-center w-[90%] md:w-[65%] lg:w-[55%] mx-auto gap-x-5">
          <div className="text-center">
            <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
              <span className="text-[#60A6E7]">Ready to Scale?</span> <br /> Join
              successful brands that chose us as their{' '}
              <span className="text-[#60A6E7]">growth accelerator</span>
            </h2>
          </div>

          <CustomButton
            text="Book a call"
            icon={<RiArrowRightSFill className="text-2xl" />}
          />
        </div>

        <div className="space-y-10 bg-secondary-backgroun">
          <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row">
            {/* Subscribe Section */}
            <div className="space-y-6 lg:w-[40%]">
              <div className="relative md:w-[70%] lg:w-[85%]">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="placeholder:text-gray-400 placeholder:text-sm placeholder:pl-3 h-14 rounded-full"
                />
                <button className="rounded-r-full bg-white text-black hover:bg-[#064386] transition-colors duration-300 hover:text-white hover:border hover:border-white absolute right-0 top-0 h-14 w-36 text-sm font-semibold">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center justify-start md:items-start space-x-2">
                <Checkbox
                  id="notifications"
                  className="border-white rounded-full"
                />
                <label htmlFor="notifications" className='text-sm text-start items-start'>
                  I agree to receive other notifications from Forcythe
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-16 md:flex-row text-lg font-medium  lg:w-[60%]">
              {/* Company Info Section */}
              <div className="space-y-12 w-[85%]">
                <div className="space-y-6">
                  <Link href="/" className="inline-block">
                    <Image
                      src="/forcythe-logo.svg"
                      alt="Forcythe Logo"
                      width={150}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <p className="text-[#AEA9B1] leading-relaxed text-base">
                    We are the growth company for businesses looking to scale. We
                    are dedicated to transforming businesses with bespoke digital
                    solutions that drive growth.
                  </p>
                </div>
                <div className="hidden md:flex justify-center md:justify-start space-x-4">
                  {[
                    { src: '/facebook.svg', href: '#' },
                    { src: '/instagram.svg', href: '#' },
                    { src: '/x.svg', href: '#' },
                    { src: '/linkedin.svg', href: '#' },
                    { src: '/youtube.svg', href: '#' },
                    { src: '/podcast.svg', href: '#' },
                  ].map(({ src }, index) => (
                    <div
                      className="w-[44px] h-[44px] rounded-full border border-gray-600 hover:border-gray-400 transition-colors relative"
                      key={index}
                    >
                      <Image
                        src={src}
                        alt="Forcythe Logo"
                        width={150}
                        height={40}
                        className="h-6 w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Section */}
              <div className="w-[35%]">
                <h3 className="text-2xl font-semibold mb-6">Company</h3>
                <nav className="space-y-4">
                  {usefulLinks.map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      aria-label={item}
                      className="block text-[#B3D0F2] hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="md:hidden flex justify-center md:justify-start space-x-4">
                {footerIcons.map(({ src }, index) => (
                  <button
                    className="w-[44px] h-[44px] rounded-full border border-gray-600 hover:border-gray-400 transition-colors relative"
                    key={index}
                  >
                    <Image
                      src={src}
                      alt="Forcythe Logo"
                      width={150}
                      height={40}
                      className="h-6 w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <Separator className="bg-[#60A6E7]" />
            <p className="text-[#60A6E7]">
              Copyright © {year} Forcythe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
