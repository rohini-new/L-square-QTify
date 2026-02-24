import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png"; // adjust path if needed

function Logo() {
  return <img src={logo} alt="Qtify logo" className={styles.logo} />;
}

export default Logo;
