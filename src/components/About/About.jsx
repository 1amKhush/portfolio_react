import styles from './About.module.css'

import React from 'react'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.section}>
        <img src="assets/about/aboutImage.png" alt="me sitting with a laptop" className={styles.aboutimage}></img>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img src="assets/about/cursorIcon.png" className={styles.listImage}></img>
            <div className={styles.para}>
              <p className={styles.listHeading}>Frontend Developer</p>
              <p className={styles.description}>I’m a front-end developer with experience
                in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.listItem}>
            <img src="assets/about/serverIcon.png" className={styles.listImage}></img>
            <div className={styles.para}>
              <p className={styles.listHeading}>Backend Developer</p>
              <p className={styles.description}>I have experience developing fast and
                optimised back-end systems and APIs</p>
            </div>
          </li>
          <li className={styles.listItem}>
            <img src="assets/about/uiIcon.png" className={styles.listImage}></img>
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
