import React from "react";
import styles from './register.module.scss'

const Register = () => {
  return (
    <div className={styles.container}>
      <a href="/" className={styles.homeLink}>Home</a>
      <div className={styles.form}>
        <h1 className={styles.head}>Mind Mentor</h1>
        <h3 className={styles.title}>Register</h3>
        <div className={styles.inputGroup}>
          <input type="text" id="name" placeholder=" " />
          <label htmlFor="name" className={styles.label}>Name</label>
        </div>
        <div className={styles.inputGroup}>
          <input type="email" id="email" placeholder=" " />
          <label htmlFor="email" className={styles.label}>Email</label>
        </div>
        <div className={styles.inputGroup}>
          <input type="password" id="password" placeholder=" " />
          <label htmlFor="password" className={styles.label}>Password</label>
        </div>
        <div className={styles.inputGroup}>
          <input type="password" id="confirm-password" placeholder=" " />
          <label htmlFor="confirm-password" className={styles.label}>Confirm Password</label>
        </div>
        <button className={styles.button}>Register</button>
        <a href="/login" className={styles.link}>Already have an account? Login</a>
      </div>
    </div>
  );
};

export default Register;
