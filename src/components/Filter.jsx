import React, { useState } from 'react';
import styles from './filter.module.css';
import Filters from '../utils/filters';
import { FaPlus, FaTimes, FaCheck } from 'react-icons/fa';

const Filter = ({toggleFilter}) => {
  const fliters = [
    {
      name: 'Contest Winners',
      value: 'contest-winner'
    },
    {
      name: 'Featured',
      value: 'featured'
    },
    {
      name: 'Test Kitchen Approved',
      value: 'approved'
    }
  ];

  const [openCollections, setOpenCollections] = useState({});

  const handleCollectionToggle = (name) => {
    setOpenCollections((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className={styles.recipesFilter} style={{display:toggleFilter?'block':''}}>
      <div className={styles.recipesFilterHeader}>
        <h3 className={styles.recipesFilterTitle}>Filter by:</h3>
        <button className={styles.clearFilter}>Clear Filter</button>
      </div>

      <div className={styles.filterGroup}>
        {fliters.map((filter) => (
          <label className={styles.filterLabel} key={filter.value} htmlFor={filter.value}>
            {filter.name}
            <input type="checkbox" id={filter.value} name={filter.value} className={styles.filterButton} />
            <span className={styles.filterButtonIcon}><FaCheck className={styles.checkmark} /></span>
          </label>
        ))}
      </div>

      {Filters.map((filter) => (
        <div className={styles.collection} key={filter.name}>
          <div className={styles.collectionHeader}>
            <label htmlFor={filter.name} className={styles.collectionTitle}>
              {filter.name}
              <input 
                id={filter.name}
                type="checkbox"
                onChange={() => handleCollectionToggle(filter.name)}
                className={styles.collectionInput} />
              <span>
                {openCollections[filter.name] ? <FaTimes /> : <FaPlus />}
              </span>
            </label>
          </div>

          {openCollections[filter.name] && (
            <div className={styles.filterGroup}>
              {filter.items.map((item) => (
                <label className={styles.filterLabel} key={item.value} htmlFor={item.value}>
                  {item.name}
                  <input type="checkbox" id={item.value} name={item.value} className={styles.filterButton} />
                  <span className={styles.filterButtonIcon}><FaCheck className={styles.checkmark} /></span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
