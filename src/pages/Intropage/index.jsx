import React from "react";
import Footer from "../../components/Footer/footer";
import HeroSection from "../../components/Hero/herosection";
import Navbar from "../../components/Navbar";
import styles from "./intropage.module.scss"
import FeatureSection from "../../components/Feature";

const Intro = ()=>{
    return (
        <div className={styles.box}>
        <Navbar/>
        <HeroSection/>
        <FeatureSection/>
        <Footer/>
        </div>
    )
}

export default Intro;