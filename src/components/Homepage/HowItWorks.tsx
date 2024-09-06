import React from 'react';
import { FaBookOpen, FaRegEdit, FaCertificate } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Enroll in Courses',
      description: 'Browse through our list of non-technical courses and choose the one that suits your needs.',
      icon: <FaBookOpen className="h-12 w-12 text-purple-500" />,
    },
    {
      title: 'Practice with Assessments',
      description: 'Test your knowledge with interactive assessments and quizzes to sharpen your skills.',
      icon: <FaRegEdit className="h-12 w-12 text-blue-500" />,
    },
    {
      title: 'Get Certified',
      description: 'Earn certifications that you can share to showcase your newly acquired skills.',
      icon: <FaCertificate className="h-12 w-12 text-green-500" />,
    },
  ];

  return (
    <div className="bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">
        Learn. Practice. Get Certified
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
