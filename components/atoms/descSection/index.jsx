import React from 'react'
import styles from './style.module.css';

const DescSection = ({text}) => {
  return (
    <p className={styles.descSection}>{text}</p>
  )
}

export default DescSection