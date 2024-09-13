import React from "react";
import styles from './login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <a href="/" className={styles.homeLink}>Home</a>
      <div className={styles.form}>
        <h1 className={styles.head}>Mind Mentor</h1>
        <h3 className={styles.title}>Login</h3>
        <div className={styles.inputGroup}>
          <input type="email" id="email" required />
          <label htmlFor="email" className={styles.label}>Email</label>
        </div>
        <div className={styles.inputGroup}>
          <input type="password" id="password" required />
          <label htmlFor="password" className={styles.label}>Password</label>
        </div>
        <button className={styles.button}>Login</button>
        <a href="/register" className={styles.link}>Don't have an account? Register</a>
      </div>
    </div>
  );
};

export default Login;
