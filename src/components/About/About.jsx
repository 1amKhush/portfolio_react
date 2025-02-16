import styles from './About.module.css'

import React from 'react'
import img4 from "../../../assets/about/aboutImage.png";
import img5 from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";


export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.section}>
        <img src={img4} alt="me sitting with a laptop" className={styles.aboutimage}></img>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img src={img5} className={styles.listImage}></img>
            <div className={styles.para}>
              <p className={styles.listHeading}>Frontend Developer</p>
              <p className={styles.description}>I’m a front-end developer with experience
                in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.listItem}>
            <img src={serverIcon} className={styles.listImage}></img>
            <div className={styles.para}>
              <p className={styles.listHeading}>Backend Developer</p>
              <p className={styles.description}>I have experience developing fast and
                optimised back-end systems and APIs</p>
            </div>
          </li>
          <li className={styles.listItem}>
            <img src={uiIcon} className={styles.listImage}></img>
            <div className={styles.para}>
              <p className={styles.listHeading}>UI Designer</p>
              <p className={styles.description}>I have designed multiple landing pages and
                have created design systems as well</p>
            </div>
          </li>
        </ul>
      </div>

    </section>
  )
}
