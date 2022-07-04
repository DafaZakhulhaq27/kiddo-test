import Image from 'next/image';
import React from 'react'
import { ImgHero } from '../../../assets';
import { Button } from '../../atoms';
import styles from './style.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="row">
        <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-center">
          <h1 className={styles.heroTitle}>Marketplace Education</h1>
          <p className={styles.heroDesc}>Kiddo.id is the first and leading kids enrichment marketplace in Indonesia.</p>
          <div className={styles.heroButton}>
            <Button textButton="Get Started" />
          </div>
        </div>
        <div className="col-lg-7 col-md-12 d-flex justify-content-center align-items-center">
          <Image src={ImgHero} />
        </div>

      </div>
    </div>
  )
}

export default Hero