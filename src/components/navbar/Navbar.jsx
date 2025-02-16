import React from 'react'
import { useState } from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils"
import img2 from "../../../assets/nav/menuIcon.png"
import img3 from "../../../assets/nav/closeIcon.png"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <>
            <nav className={styles.navbar}>
                <a href="/" className={styles.title}>My Portfolio</a>
                <div className={styles.menu}>
                    <img className={styles.menubtn}
                        src={menuOpen ? {img2} : {img3}}
                        onClick={() => setMenuOpen(!menuOpen)} alt="menu-btn" />
                    <ul className={`${styles.menuItems} ${(!menuOpen) && styles.menuOpen}`}
                        onClick={() => setMenuOpen(true)}>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
