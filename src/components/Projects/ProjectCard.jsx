import React from 'react'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project: { title, imgSrc, description, skills, demo, source } }) {
    return (
        <div className={styles.container}>
            <img className={styles.image}
                src={imgSrc} alt={description}></img>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                 <li key={id} className={styles.skill}>{skill}</li>
                 ))}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>GitHub</a>
            </div>
        </div>
    );
};
