import Link from 'next/link';

interface Course {
  id: string;
  name: string;
  description: string;
}

interface FeaturedCoursesProps {
  courses: Course[];
}

export default function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Top Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {courses.slice(0, 3).map((course) => (
          <div key={course.id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg sm:text-xl font-semibold">{course.name}</h3>
            <p className="mt-2 text-gray-600">{course.description}</p>
            <Link href={`/courses/${course.id}`} className="mt-4 inline-block bg-[#aa43f1] text-white px-4 py-2 rounded-lg text-sm sm:text-base">
              View Course
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/courses" className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base">
          View All Courses
        </Link>
      </div>
    </div>
  );
}
