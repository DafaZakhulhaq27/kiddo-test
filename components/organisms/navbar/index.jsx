import Image from 'next/image'
import React from 'react'
import { Logo } from '../../../assets'
import { Button } from '../../atoms';
import { Navlinks } from '../../molecules';
import styles from  './style.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.imgContainer}>
        <Image src={Logo} layout={'responsive'} />
      </div>
      <Navlinks />
      <Button textButton="Sign In" />
    </div>
  )
}

export default Navbar