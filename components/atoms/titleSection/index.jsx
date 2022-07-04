import React from 'react'
import styles from './style.module.css';

const TitleSection = ({text}) => {
  return <h1 className={styles.titleSection}>{text }</h1>  
}

export default TitleSection