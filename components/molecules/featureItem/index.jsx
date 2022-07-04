import Image from 'next/image';
import React from 'react'
import styles from './style.module.css';

const FeatureItem = ({gridClass,icon,title,desc}) => {
  return (
    <div className={gridClass}>
        <div className={styles.featureItem}>
            <Image src={icon} /> 
            <div className={styles.featureItemDesc}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default FeatureItem