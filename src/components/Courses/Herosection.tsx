// src/components/HerosectionCourses.tsx

import React from 'react';

const Herosection = () => {
  return (
    <div className='bg-[#f9fafb] text-black flex flex-col md:flex-row-reverse gap-4 p-4 sm:p-6 mx-4 sm:mx-8 lg:mx-16'>
      <div className='bg-white rounded-xl p-6 sm:p-8 w-full md:w-[50%] flex flex-col justify-center'>
        <h1 className='text-[#aa43f1] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8'>
          Discover Our Diverse Courses
        </h1>
        <p className='text-black text-sm sm:text-base md:text-lg mb-6 sm:mb-10'>
          Explore a wide range of practical courses designed to help you master essential skills for everyday life. From updating your Aadhar details to filing your taxes, our courses offer valuable knowledge to make life easier.
        </p>
      </div>
      <div className='bg-white rounded-xl w-full md:w-[50%] flex items-center justify-center'>
        <img src="/e-learning.png" alt="e-learning" className='rounded-xl w-full h-auto' loading="lazy" />
      </div>
    </div>
  );
};

export default Herosection;
