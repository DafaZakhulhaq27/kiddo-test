import React from 'react'
import styles from './style.module.css'

const Navlinks = () => {
  return (
    <ul className={styles.navlinks}>
        <li className={styles.active}>Home</li>
        <li>Features</li>
        <li>Showcase</li>
        <li>Pricing</li>
    </ul>
  )
}

export default Navlinks