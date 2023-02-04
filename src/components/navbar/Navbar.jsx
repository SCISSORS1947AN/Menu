import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo-vector.png'

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <img src={logo} alt="" />
      <p>Step in with SMILE & Step out with STYLE</p>
    </div>
  )
}

export default Navbar