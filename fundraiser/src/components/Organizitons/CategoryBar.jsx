import React from 'react';

const CategoryBar = ({ categories, activeCategory, setActiveCategory }) => {
  const getCategoryButtonClass = (category) => {
    return `block w-full text-left ${
      activeCategory === category
        ? 'text-blue-500'
        : 'text-gray-800 hover:text-blue-500'
    } px-2 py-1`;
  };

  return (
    <aside className='w-64 bg-gray-100 p-4'>
      <h2 className='text-lg font-bold mb-4'>Categories</h2>
      <nav aria-label='Categories'>
        {categories.map((category, categoryId) => (
          <a
            key={categoryId}
            href='#'
            className={getCategoryButtonClass(category)}
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory(category);
            }}
            aria-current={activeCategory === category ? 'page' : undefined}
          >
            {category}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default CategoryBar;
