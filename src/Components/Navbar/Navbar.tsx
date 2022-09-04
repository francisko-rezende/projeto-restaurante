import React from "react";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Logo />
        Restaurante da Marilene
      </h1>
    </header>
  );
};
