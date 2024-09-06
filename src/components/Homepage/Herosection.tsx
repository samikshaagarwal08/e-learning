import React from 'react';

const Herosection = () => {
  return (
    <div className='bg-[#f6f8f7] text-black flex flex-col md:flex-row gap-4 p-4 sm:p-6 mx-4 lg:mx-16'>
      <div className='bg-white rounded-xl md:p-6 sm:p-8 w-full md:w-1/2 flex flex-col justify-center'>
        <h1 className='text-[#aa43f1] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8'>
          Empower Your Skills for the Future
        </h1>
        <p className='text-black text-sm sm:text-base md:text-lg mb-6 sm:mb-10'>
          A platform to help you gain industry-relevant skills with interactive courses and certifications.
        </p>
        <a href="/signup">
          <button className='bg-[#aa43f1] text-white py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-[#992ee6] transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-[#aa43f1] focus:ring-opacity-50'>
            Browse Courses
          </button>
        </a>
        
      </div>
      <div className='bg-white rounded-xl w-full md:w-1/2 flex items-center justify-center'>
        <img src="/e-learning.png" alt="e-learning" className='rounded-xl w-full h-auto' loading="lazy" />
      </div>
    </div>
  );
};

export default Herosection;
