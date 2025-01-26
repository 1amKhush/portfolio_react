import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:khushvendras99@gmail.com">KhushvendraSingh@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="assets\contact\linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/khushvendra-singh-64827420a/">linkedin.com/KhushvendraSingh</a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/1amKhush">github.com/KhushvendraSingh</a>
        </li>
      </ul>
    </footer>
  )
}
