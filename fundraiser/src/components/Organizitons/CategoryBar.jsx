import React from 'react';

const CategoryBar = ({ categories, activeCategory, setActiveCategory }) => {
  const getCategoryButtonClass = (category) => {
    return `block w-full text-left ${
      activeCategory === category
        ? 'text-orange-500 border-b-2 border-orange-500'
        : 'text-gray-800 hover:text-orange-500 hover:border-orange-500'
    } px-2 py-1 pt-4 rounded-md transition duration-300 ease-in-out`;
  };

  return (
    <aside className='w-64 bg-gray-200 p-4'>
      <h2 className='text-2xl font-bold mb-4'>Categories</h2>
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
            {category === 'all' ? 'All' : category.toUpperCase()}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default CategoryBar;
