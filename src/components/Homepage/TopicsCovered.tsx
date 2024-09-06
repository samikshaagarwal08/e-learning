import Link from 'next/link';
import { FaFileAlt, FaRegCreditCard, FaIdBadge } from 'react-icons/fa';

interface Topic {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  link: string;
}

const topics: Topic[] = [
  {
    id: 'pan-card',
    name: 'Pan-Card Update',
    description: 'Learn how to update your Pan Card details effectively.',
    icon: <FaFileAlt className="h-12 w-12 text-blue-500" />,
    link: '/courses/Pancard'
  },
  {
    id: 'itr-filing',
    name: 'ITR Filing',
    description: 'Understand the process of Income Tax Return filing and stay compliant.',
    icon: <FaRegCreditCard className="h-12 w-12 text-green-500" />,
    link: '/courses/Itrfiling'
  },
  {
    id: 'aadhar-update',
    name: 'Aadhar Update',
    description: 'Learn how to update your Aadhar details and ensure your records are current.',
    icon: <FaIdBadge className="h-12 w-12 text-purple-500" />,
    link: '/courses/Aadharupdate'
  }
];

const TopicsCovered = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10">
        Practical Skills for Everyday Life
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map(topic => (
          <div
            key={topic.id}
            className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center"
          >
            <div className="mb-4">
              {topic.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">{topic.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">{topic.description}</p>
            <Link href={topic.link} className="bg-[#aa43f1] text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-[#aa43f180] hover:text-black transition-colors">
              Explore Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsCovered;
