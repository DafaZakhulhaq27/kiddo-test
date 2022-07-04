import React from 'react'
import styles from './style.module.css';

const SubTitleSection = ({text,type}) => {
  return (
    <p className={[
        styles.SubTitleSection,
        styles[`color-${type}`]
    ].join(' ')}>{text}</p>
  )
}

export default SubTitleSection