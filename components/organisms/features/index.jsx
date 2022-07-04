import React from 'react'
import { DescSection, SubTitleSection, TitleSection } from '../../atoms';
import { FeatureItem } from '../../molecules';
import dataFeatures from './data';
import styles from './style.module.css';

const Features = () => {


  return (
    <div className={styles.features}>
      <div className="text-center d-flex flex-column align-items-center">
        <SubTitleSection text="WORK BETTER" type="1" />
        <TitleSection text="For Your Business" />
        <DescSection text="We did research what your company needs and here we are providing all of them just for you" />
      </div>
      <div className="mt-1 row">
        {
          dataFeatures.map((data,index) => (
            <FeatureItem key={index} icon={data.icon} gridClass={data.gridClass} title={data.title} desc={data.desc} />
          ))
        }
      </div>
    </div>
  )
}

export default Features