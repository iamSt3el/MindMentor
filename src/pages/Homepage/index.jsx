import React from "react";
import styles from "./homepage.module.scss";
import Navbar from "../../components/Navbar";

function Homepage() {
  return (
    <div className={styles.outerBox}>
      <Navbar />
    </div>
  );
}

export default Homepage;
