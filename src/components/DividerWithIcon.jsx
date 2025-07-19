import React from 'react';

export default function DividerWithIcon({ Icon,className=' '}) {
  return (
    <div className={`flex items-center my-4 px-15 ${className}`}>
      <div className="flex-grow border-t border-gray-300"></div>
      <Icon className="mx-4 text-gray-500 text-3xl" />
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
