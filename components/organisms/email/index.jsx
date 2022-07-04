import Image from 'next/image';
import React from 'react'
import { IconPlay, ImgVideoPlayer } from '../../../assets';
import { Button, DescSection, SubTitleSection, TitleSection } from '../../atoms';
import styles from './style.module.css';

const Email = () => {
  return (
    <div className={styles.emailContainer}>
        <div className="row">
            <div className="col-lg-7 col-12">
                <div className="d-flex justify-content-center align-items-center">
                    <div className={styles.videoPlayerContainer}>
                        <div className={styles.overlay}>
                        </div>
                        <div className={styles.playButtonRadius}>
                        </div>
                        <div className={styles.playButton}>
                            <Image src={IconPlay}   />
                        </div>
                        <Image src={ImgVideoPlayer} layout="fill" objectFit="cover"   />
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-12 ">
                <div className={styles.emailDescContainer}>
                    <SubTitleSection text="SAVE MORE TIME" type="2" />
                    <TitleSection text="And Boost Productivity" />
                    <DescSection text="Your employees can bring any success into your business, so we need to take care of them" />
                    
                    <form className={styles.inputEmailContainer}>
                        <input type="email" className={styles.inputEmail} placeholder="Email Address"  />
                        <Button textButton="Get Started" className={styles.formButton} />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Email