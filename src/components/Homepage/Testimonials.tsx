import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  feedback: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Doe',
    feedback: 'The courses on this platform were incredibly informative and easy to follow. I learned a lot and feel more confident in my skills.',
    designation: 'Software Engineer',
  },
  {
    id: '2',
    name: 'Jane Smith',
    feedback: 'I was able to update my Aadhar details quickly and efficiently thanks to the well-structured course. Highly recommended!',
    designation: 'Business Owner',
  },
  {
    id: '3',
    name: 'Sam Wilson',
    feedback: 'The ITR filing course made tax season stress-free for me. The step-by-step instructions were very clear and helpful.',
    designation: 'Freelancer',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        What Our Learners Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div
            key={testimonial.id}
            className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center"
          >
            <div className="mb-4 text-gray-500">
              <FaQuoteLeft className="inline-block text-3xl" />
            </div>
            <p className="text-black text-sm sm:text-base mb-4">
              {testimonial.feedback}
            </p>
            <div className="mb-4 text-gray-500">
              <FaQuoteRight className="inline-block text-3xl" />
            </div>
            <h3 className="text-[#aa43f1] text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
