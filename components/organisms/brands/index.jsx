import Image from 'next/image';
import React from 'react'
import { IconAdobe, IconApple, IconGoogle, IconSlack, IconSpotify } from '../../../assets';
import styles from './style.module.css';

const Brands = () => {
  return (
      <div className={styles.brands}>
        <div className="row ">
            <div className="col-lg-4 col-md-12">
                <p className={styles.brandsTitle}>Trusted by Global Companies</p>
            </div>
            <div className="col-lg-8 col-md-12 d-flex justify-content-start">
                <ul>
                    <li><Image src={IconApple} /></li>
                    <li><Image src={IconAdobe} /></li>
                    <li><Image src={IconSlack} /></li>
                    <li><Image src={IconSpotify} /></li>
                    <li><Image src={IconGoogle} /></li>
                </ul>
            </div>
        </div>
      </div>
  )
}

export default Brands