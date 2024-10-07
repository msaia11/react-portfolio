import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
          src={getImageUrl("about/aboutImage.png")} 
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-end Developer</h3>
              <p>
              I have experience in JavaScript, TypeScript, HTML, and CSS, along with a foundation in building web and mobile applications using React and React Native.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
              I've worked with C#.NET for web server applications, as well as MUMPS and SQL for server-side development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Developer Team Lead</h3>
              <p>
              I had the opportunity to lead a team of up to four developers. I managed several projects, fostering collaboration and ensuring timely delivery of high-quality software solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}