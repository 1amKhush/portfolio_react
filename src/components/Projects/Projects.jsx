import React from 'react'
import styles from './Projects.module.css'
import projects from "../../data/projects.json"
import ProjectCard from './ProjectCard';
import projectImages from '../../../assets/projects/projectImages';

export default function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project,id) => {
          const imgSrc = projectImages[project.imgKey];
          return(
           <ProjectCard key={id} project={{...project, imgSrc }}></ProjectCard>
          );
        })}
      </div>
    </section>
  );
}
