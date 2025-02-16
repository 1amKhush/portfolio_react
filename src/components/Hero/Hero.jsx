import React from 'react'
import styles from './Hero.module.css'
import img1 from '../../../assets/hero/hero.png'


export default function Hero() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Hi, I'm Khushvendra</h1>
                    <p className={styles.description}>I’m a budding web developer proficient in HTML, CSS, and JavaScript, with a growing skillset in MERN stack development. My journey started with mastering programming basics in C and C++, and I’m now diving deeper into backend technologies like Node.js and Next.js while exploring database management with MongoDB and MySQL.</p>
                    <a href="mailto:khushvendras99@gmail.com" className={styles.contactBtn}>Contact Me</a>
                </div>

                <img src={img1} className={styles.heroImage} alt="Hero"></img>

                <div className={styles.topBlur}></div>
                <div className={styles.bottomBlur}></div>
            </section>
        </>
    )
}
