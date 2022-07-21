import React from 'react'
import logo from './logo.svg';
import styles from './Navbar.module.css';
import { NavHashLink } from 'react-router-hash-link';


function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_list}>
        <a href='#'>
          <img src={logo} className={styles.logo} alt="logo" />
        </a>
        <div className={styles.links}>
          <NavHashLink className={styles.navbar_item} to='#'>Home</NavHashLink>
          <NavHashLink className={styles.navbar_item} to='/pages#about'>About</NavHashLink>
          <NavHashLink className={styles.navbar_item} to='/pages#contact'>Contact</NavHashLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar