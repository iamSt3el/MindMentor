// Footer.jsx
import React from 'react';
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className= {styles.outerbox}>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3>About Us</h3>
            <p>"Mentor Mind offers everything from summarizing your notes and creating custom tests from various sources like PDFs and YouTube links, to designing personalized roadmaps."</p>
          </div>
          <div className={styles.col}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Test From notes</a></li>
              <li><a href="/products">Test From Youtube</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h3>Contact Us</h3>
            <p>Email: support@mentorminds.com</p>
            <p>Phone: +91 9778374629</p>
            <p>Address: Lpu, Phagwara Punjab 144411</p>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>&copy; 2024 Mentor Minds. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}