import React from 'react';
import styles from '../css/Catagories.module.css';
import { useState, useEffect } from 'react';

import { FaCaretDown } from 'react-icons/fa';


const Categories = ({ categories, filterItems, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div class={styles.dropdown}>
      <div class={styles.drpbtn} onClick={(e) => setIsActive(!isActive)}>
        {selected}&nbsp;&nbsp;
        <FaCaretDown />
      </div>
      {isActive && (<div class={styles.drpcontent}>
        {categories.map((category, index) => {
          return (
            <button
              class={styles.drpitem}
              type="button"
              key={index}
              onClick={(e) => { filterItems(category); setSelected(category); setIsActive(false); }}
            >
              {category}
            </button>
          );
        })}
      </div>)}
    </div>
  );
};

export default Categories;