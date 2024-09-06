// src/pages/AboutPage.tsx

import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-16">
        <div className='bg-[#f9fafb] text-black flex flex-col md:flex-row gap-4 p-4 sm:p-6 mx-4 sm:mx-8 lg:mx-16'>
            <div className='bg-white rounded-xl p-6 sm:p-8 w-full md:w-[50%] flex flex-col justify-center'>
                <h1 className='text-[#aa43f1] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8'>
                Our Vision
                </h1>
                <p className='text-black text-sm sm:text-base md:text-lg mb-6 sm:mb-10'>
                Our platform is dedicated to simplifying essential public processes and enhancing everyday skills. 
                We strive to provide accessible, practical education that empowers individuals to efficiently handle 
                important tasks such as updating personal documents, managing taxes, and more. By offering clear, 
                step-by-step guidance, we aim to make these processes straightforward and stress-free for everyone.
                </p>
            </div>
            <div className='bg-white rounded-xl w-full md:w-[50%] flex items-center justify-center'>
                <img src="/ourVission.jpg" alt="e-learning" className='rounded-xl w-full h-auto' loading="lazy" />
            </div>
        </div>

      <section className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Team Member 1 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <img src="/Samiksha.jpeg" alt="Team Member 1" className="h-[300px] w-auto rounded-lg mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Samiksha Agarwal</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="text-gray-500 mt-2">
              Samiksha has an experience in tech and education. Her passion for making information accessible 
              led her to create this platform to help people navigate essential public processes with ease.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <img src="/Shivansh.jpeg" alt="Team Member 2" className="h-[300px] w-auto rounded-lg mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Shivansh Sharma</h3>
            <p className="text-gray-600">Head of Content</p>
            <p className="text-gray-500 mt-2">
              Shivansh is a content strategist with a knack for creating clear, user-friendly guides. He ensures all course 
              material is accurate and easy to follow.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <img src="/Shagun.jpeg" alt="Team Member 3" className="h-[300px] w-auto rounded-lg mx-auto mb-4"/>
            <h3 className="text-lg font-semibold mb-2">Shagun Kumar</h3>
            <p className="text-gray-600">Lead Instructor</p>
            <p className="text-gray-500 mt-2">
              Shagun brings extensive teaching experience to the team. He is dedicated to delivering engaging and 
              informative courses that make learning a smooth process.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <img src="/Rajat.jpeg" alt="Team Member 4" className="h-[300px] w-auto rounded-lg mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Rajat Chauhan</h3>
            <p className="text-gray-600">UX/UI Designer</p>
            <p className="text-gray-500 mt-2">
              Rajat is our UX/UI designer who focuses on creating intuitive and visually appealing interfaces. 
              His work ensures that our platform is user-friendly and enjoyable to navigate.
            </p>
          </div>

          {/* Team Member 5 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <img src="/Yash.jpeg" alt="Team Member 5" className="h-[300px] w-auto rounded-lg mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Yash Tyagi</h3>
            <p className="text-gray-600">Technical Support Specialist</p>
            <p className="text-gray-500 mt-2">
              Yash provides technical support and ensures that all users have a seamless experience. He is dedicated 
              to resolving any issues quickly and effectively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
