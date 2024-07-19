import React from 'react'
import Header from './Header'
import styles from './mainContainer.module.css'

const MainContainer = ({children}) => {
  return (
   <div className={styles.mainContainer}>
   <Header/> 
   {children}
   </div>
  )
}

export default MainContainer
