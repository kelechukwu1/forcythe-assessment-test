"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './CustomButton';
import { MovingBorderWrapper } from './ui/moving-border';
import { MobilenavLinks, navLinks } from '@/data/dummyData';

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  //this useEffect is used to close the mobile nav when the screen size is greater than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileNavVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header className="w-full fixed top-0 left-0 py-[1.8rem] px-5 lg:px-28 flex justify-between gap-10 items-center z-30 backdrop-blur-md bg-opacity-70">
      <div className="w-full flex justify-between md:justify-normal gap-20 items-center">
        <Link href={"/"}>
          <Image src="/forcythe-logo.svg" alt="Forcythe logo" width={140} height={100} />
        </Link>

        <div className='md:hidden p-3 rounded-xl bg-white bg-opacity-10 cursor-pointer'
          onClick={toggleMobileNav}
          onKeyPress={(e) => { if (e.key === 'Enter') toggleMobileNav(); }}
          tabIndex={0}
        >
          <Image src="/menu.svg" alt="menu icon" width={20} height={20} />
        </div>
        <div className="hidden md:flex items-center gap-4 text-base">
          {
            navLinks.map((link, index) => (
              <Link key={index} aria-label={link.label} href={link.href}>{link.label}</Link>
            ))
          }
        </div>
      </div>
      <div className='hidden md:block'>
        <Button text="Book a Call" />
      </div>


      {isMobileNavVisible && (
        <div className="md:hidden flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed right-5 top-28">
          <div className="text-white z-10 bg-transparent rounded-[inherit] w-full">
            <MovingBorderWrapper
              duration={5000}
              borderRadius="1.75rem"
              className="bg-[#030516] dark:bg-slate-900 text-black dark:text-white dark:border-slate-800"
            >
              <div style={{ background: "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)" }} className="w-full p-5 py-8 rounded-[2rem]">
                <ul className='flex flex-col text-white'>
                  {
                    MobilenavLinks.map((link, index) => (
                      <Link key={index} aria-label={link.label} href={link.href} className='w-full py-2.5'>{link.label}</Link>
                    ))
                  }
                </ul>
              </div>
            </MovingBorderWrapper>
          </div>
        </div>
      )}
    </header>
  )
};
export default Header;
