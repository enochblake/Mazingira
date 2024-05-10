import React from 'react';

const CategoryBar = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <aside className='w-64 bg-gray-100 p-4'>
      <h2 className='text-lg font-bold mb-4'>Categories</h2>
      <nav>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`block w-full text-left ${
              activeCategory === category
                ? 'text-blue-500'
                : 'text-gray-800 hover:text-blue-500'
            } px-2 py-1`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default CategoryBar;
