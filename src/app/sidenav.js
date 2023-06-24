import React, { useState } from 'react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const Navigation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="fixed right-0 flex flex-col items-center justify-center h-32 bg-gray-800">
      <div
        className={`m-4 transform ${hoveredIndex === 0 ? '-translate-x-6' : ''} transition-transform`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <ChevronDownIcon className="h-6 w-6 text-white" />
      </div>
      <div
        className={`m-4 transform ${hoveredIndex === 1 ? '-translate-x-6' : ''} transition-transform`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <PhoneIcon className="h-6 w-6 text-white" />
      </div>
      <div
        className={`m-4 transform ${hoveredIndex === 2 ? '-translate-x-6' : ''} transition-transform`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <PlayCircleIcon className="h-6 w-6 text-white" />
      </div>
      <div
        className={`m-4 transform ${hoveredIndex === 3 ? '-translate-x-6' : ''} transition-transform`}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default Navigation;
