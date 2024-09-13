import React from "react";
import styles from "./navbar.module.scss";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>MindMentor</h1>
        </div>
        <div className={styles.actions}>
          <button className={styles.button} onClick={() => navigate('/login')}>
            Login
          </button>
          <button className={styles.button} onClick={() => navigate('/homepage')}>
            Get Started
          </button>
          <div className={styles.userIcon}>
            {/*<User />*/}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;