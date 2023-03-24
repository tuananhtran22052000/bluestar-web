import React from 'react'
import classes from './Header.module.scss'
import PrimaryButton from '@/app/commons/PrimaryButton'
import Button from '@/app/commons/Button'
import Image from 'next/image'
// images
import logoLandscape from '../../../../../../image/logoLandscape.png'

const Header = () => {
  return (
    <div className={classes.container}>
        <div className={classes.contentImg}>
        <Image 
            src={logoLandscape}
            alt="img"
            className={classes.img}
        />
        </div>
        <div className={classes.rowBetween}>
            <Button text={'Sản phẩm'} />
            <Button text={'SBlog'} customBtn={classes.mrBtn}/>
            <PrimaryButton 
                title={'Tải ứng dụng'}
                className={classes.primary}
            />
        </div>
    </div>
  )
}

export default Header