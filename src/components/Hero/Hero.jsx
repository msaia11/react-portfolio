import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Matt</h1>
        <p className={styles.description}>
          I'm a full-stack software developer with four years of professional experience as a full-stack web developer and two years of experience as a technical solutions engineer. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:msaia@umich.edu" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/myPhoto.jpeg")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  );
};