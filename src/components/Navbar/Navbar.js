import React from 'react'
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';


function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink to='/'>
        <img src={logo} className="App-logo" alt="logo" />
      </NavLink>
      <NavLink to='About'>About</NavLink>
      <NavLink to='Projects'>Projects</NavLink>
      <NavLink to='Contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar