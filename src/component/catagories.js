import React from 'react';
import styles from '../css/Catagories.module.css';

const Categories = ({ categories, filterItems }) => {
  console.log('여기까지 오나요?');
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button 
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;