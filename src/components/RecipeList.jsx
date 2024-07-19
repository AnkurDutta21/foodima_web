import React, { useState } from 'react'
import styles from './recipeList.module.css'
import { VscFilter } from 'react-icons/vsc'
import { FaSearch } from 'react-icons/fa'
import Filter from './Filter'
import Recipes from './Recipies'
import recipes from '../utils/recipes';
import { TfiClose } from 'react-icons/tfi'


const RecipeList = () => {
  const [search, updateSearch] = useState('');
  const [toggleFilter,setToggleFilter] = useState(false)

  const handleSearch = (e) => {
    updateSearch(e.target.value);
  };

  const filteredList = recipes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className={styles.customizeData}>
        <h1>Recipes 👩‍🍳</h1>
        <div className={styles.searchDiv}>
          <input type='text' placeholder='Try something like "pizza" or "burger"' value={search}
            onChange={handleSearch} />
          <div className={styles.inputSearch}><FaSearch /></div>
        </div>
        <i className={styles.filterIcon}>{!toggleFilter?<VscFilter onClick={()=>setToggleFilter(true)}/>:<TfiClose onClick={()=>setToggleFilter(false)}/>}</i>
        <select name="sort" id="recipes-sort" className={styles.newestBtn}>
          <option value="Newest" className="sort-option">Newest</option>
          <option value="Best Rated" className="sort-option">Best Rated</option>
          <option value="Featured" className="sort-option">Featured</option>
          <option value="Time" className="sort-option">Time</option>
        </select>
        {toggleFilter && <div className={styles.toggleMenu}><Filter toggleFilter={toggleFilter}/></div>} 
      </div>

      <div className={styles.recipieContainer}>
        <Filter />
        <Recipes recipes={recipes} filteredList={filteredList} search={search} />
      </div>
    </div>
  )
}

export default RecipeList
