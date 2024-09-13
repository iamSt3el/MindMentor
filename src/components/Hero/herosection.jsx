import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './herosection.module.scss';
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.herosection}>
      <div className={styles.content}>
        <h1 className={styles.herotitle}>
          Empowering Learning with AI
        </h1>
        <h2 className= {styles.herosubtitle}>
          Your Personal Education Assistant
        </h2>
        <p className={styles.herodescription}>
          Mentor Mind offers everything from summarizing your notes and creating custom tests from various sources like PDFs and YouTube links, to designing personalized roadmaps.
        </p>
        <button className={styles.herobutton} onClick={() => navigate('/homepage')} >
          Get Started
          <ArrowRight className={styles.heroicon} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
