"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaFilter } from 'react-icons/fa';

interface Course {
  id: string;
  name: string;
  description: string;
  link:string;
}

const courses: Course[] = [
  { id: '1', name: 'Aadhar Update Guide', description: 'Learn how to update your Aadhar details easily.',link: '/Aadharupdate'},
  { id: '2', name: 'ITR Filing Made Simple', description: 'A step-by-step guide to filing your income tax returns.',link: '/Itrfiling' },
  { id: '3', name: 'PAN Card Application', description: 'Know how to apply for or update your PAN card.',link: '/Pancard' },
  { id: '4', name: 'Driving License Renewal', description: 'Learn the process to renew your driving license online.' ,link: '/'},
];

const CoursesPage = () => {
  const [filter, setFilter] = useState({
    category: '',
    topic: '',
    difficulty: '',
    duration: '',
  });

  const filteredCourses = courses; 

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-6">Our Courses</h1>
      
      <div className="mb-6 flex justify-center">
        <button
          onClick={() => alert('Filters feature coming soon!')}
          className="bg-[#aa43f1] text-white py-2 px-4 rounded-lg flex items-center space-x-2"
        >
          <FaFilter />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div
              key={course.id}
              className="bg-white p-6 shadow-md rounded-lg flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div className="flex flex-col md:flex-row mt-auto">
                <Link href={`/courses/${course.link}`} className="bg-blue-500 text-white py-2 px-4 mx-2 rounded-lg text-center my-2 hover:bg-blue-600 transition-colors w-fit">
                    View Course
                </Link>
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-center mx-2 my-2 hover:bg-green-600 transition-colors w-fit">
                  Enroll Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
