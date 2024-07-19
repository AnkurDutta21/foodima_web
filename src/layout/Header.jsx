import React, { useState } from 'react';
import styles from './header.module.css';
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <div className={styles.headerContainer}>
            <h1>Foodima</h1>
            <div className={styles.hamburgerControl}>
                {!toggleMenu ? 
                    <RxHamburgerMenu onClick={() => setToggleMenu(true)} /> : 
                    <TfiClose onClick={() => setToggleMenu(false)} />}
            </div>
                <div className={styles.navItems}>
                    <ul className={styles.navList}>
                        <li>Shop</li>
                        <li>Features</li>
                        <li>Recipes</li>
                        <li>Hotline</li>
                        <li className={styles.search}><FaSearch /></li>
                    </ul>
                </div>
                <div className={styles.auth}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.signupBtn}>Signup</button>
                </div>
            {toggleMenu && (
                <div className={styles.mobile}>
                    <div className={styles.navItems} style={{display:'flex'}}>
                        <ul className={styles.navList}>
                            <li>Shop</li>
                            <li>Features</li>
                            <li>Recipes</li>
                            <li>Hotline</li>
                            <li><FaSearch /></li>
                        </ul>
                    </div>
                    <div className={styles.auth} style={{display:'flex'}}>
                        <button className={styles.loginBtn}>Login</button>
                        <button className={styles.signupBtn}>Signup</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
