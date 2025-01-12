import React from 'react';
import { ButtonProps } from '@/types/types';

const CustomButton: React.FC<ButtonProps> = ({ text, className, icon }) => {
  return (
    <div className="relative group max-w-fit">
      <button
        className={`${className} py-[12px] px-5 flex items-center justify-center rounded-full 
         bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md transition-colors duration-300`}
      >
        {text}
        {icon && <span>{icon}</span>}
      </button>
      <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border group-hover:border-[#064386] transition-colors duration-300" />
    </div>
  );
};

export default CustomButton;
