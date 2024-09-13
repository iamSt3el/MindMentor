import React from "react";
import styles from "./navbar.module.scss";
import { User, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1><a href="/">Mind Mentor</a></h1>
        </div>
        <div className={styles.actions}>
          <button className={styles.button} onClick={() => navigate('/login')}>
            <LogIn className={styles.icon} /> Login
          </button>

          <button className={styles.button} onClick={() => navigate('/homepage')}>
            My Test
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