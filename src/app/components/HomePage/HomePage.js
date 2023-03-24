import React from 'react'
import classes from './HomePage.module.scss'
import clsx from 'clsx'

import Header from './components/Header'
import Banner from './components/Banner'
import SalientFeatures from './components/SalientFeatures'
import Evaluate from './components/ Evaluate'
import AboutUs from './components/ AboutUs'
import VisionMission from './components/VisionMission'
import BlueStarTeam from './components/ BlueStarTeam'
import ProductPackages from './components/ProductPackages'
import Footer from './components/Footer'

const HomePage = () =>{
return(
    <div className={classes.container}>
        <div className={classes.padding}>
            <Header />
        </div>
        <div className={classes.banner}>
            <Banner />
        </div>
        <div className={clsx(classes.padding, classes.mrT)}>
            <SalientFeatures />
        </div>
        <div className={classes.padding}>
            <Evaluate />
        </div>
        <div>
            <AboutUs />
        </div>
        <div className={classes.mrVision}>
            <VisionMission />
        </div>
        <div className={classes.padding}>
            <BlueStarTeam />
        </div>
        <div className={classes.padding}>
            <ProductPackages/>
        </div>
        <div>
            <Footer />
        </div>
    </div>
)
}
export default HomePage