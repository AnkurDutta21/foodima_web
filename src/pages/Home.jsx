import React from 'react'
import styles from './home.module.css'
import { FaArrowRight, FaSearch } from 'react-icons/fa'
import RecipeList from '../components/RecipeList'

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <section className={styles.heroSection}>
                <div className={styles.textsContainer}>
                    <h1>Recipe Contest</h1>
                    <p>Recipe contests are like our big, constantly-in-progress dinner party—and you're invited.</p>
                    <button className={styles.heroBtn}>How they work <FaArrowRight /></button>
                </div>
                <div className={styles.imageContainer}>
                </div>
            </section>
         <RecipeList/>
        </div>
    )
}

export default Home
