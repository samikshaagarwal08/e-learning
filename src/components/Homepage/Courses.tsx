import FeaturedCourses from '../Homepage/FeaturedCourses';

export default function Courses() {
  const courses = [
    { id: '1', name: 'Aadhar Update Guide', description: 'Learn how to update your Aadhar details easily.' },
    { id: '2', name: 'ITR Filing Made Simple', description: 'A step-by-step guide to filing your income tax returns.' },
    { id: '3', name: 'PAN Card Application', description: 'Know how to apply for or update your PAN card.' },
    { id: '4', name: 'Driving License Renewal', description: 'Learn the process to renew your driving license online.' },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mt-6 sm:mt-10">
        Welcome to Easy Learning
      </h1>
      <p className="text-center text-gray-600 mt-2 sm:mt-4">
        A platform designed to help you with essential public services, like Aadhar updates, ITR filing, and more.
      </p>
      <FeaturedCourses courses={courses} />
    </div>
  );
}
