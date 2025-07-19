import React from 'react';
import { FaSearch, FaCheckCircle } from 'react-icons/fa';
import DividerWithIcon from '../components/DividerWithIcon';

export default function LatestProjects() {
  const projects = [
    {
      image: 'images/project1.jpg',
      title: 'پروژه شماره ۱',
      description: 'توضیح کوتاه درباره پروژه اول'
    },
    {
      image: 'images/project2.jpg',
      title: 'پروژه شماره ۲',
      description: 'توضیح کوتاه درباره پروژه دوم'
    },
    {
      image: 'images/project3.webp',
      title: 'پروژه شماره ۳',
      description: 'توضیح کوتاه درباره پروژه سوم'
    },
    {
      image: 'images/project4.avif',
      title: 'پروژه شماره ۴',
      description: 'توضیح کوتاه درباره پروژه چهارم'
    }
  ];

  return (
    <div className="text-center py-12">
      {/* عنوان */}
      <h2 className="text-3xl font-bold mb-2">آخرین پروژه‌های سنرست</h2>

      {/* متن کوتاه */}
      <p className="text-gray-600 mb-8">اینجا می‌توانید برخی از آخرین پروژه‌های ما را مشاهده کنید.</p>

      {/* عکس‌ها */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-80 animate-fade-in-up transition-transform duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* عکس با هاور */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-60 object-cover transition duration-300 group-hover:brightness-75" 
              />
              {/* آیکون سرچ وسط عکس */}
              <FaSearch className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>

            {/* عنوان عکس */}
            <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>

            {/* متن کوتاه */}
            <p className="text-gray-500 text-sm mt-1">{project.description}</p>
          </div>
        ))}
      </div>

      {/* خط جداکننده با آیکون تیک */}
      <div className="mt-12">
        <DividerWithIcon Icon={FaCheckCircle} />
      </div>
    </div>
  );
}
