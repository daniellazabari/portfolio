import React, { useEffect } from 'react'
import { card } from '../../assets/card.svg'
import styles from './ProjectCard.module.css'
import arrow from "../../assets/arrow.svg"


function ProjectCard({ title, description, image, link, chosen }) {
    const designChosen = chosen.includes("design") ? "var(--green)" : "var(--white)";
    const devChosen = chosen.includes("development") ? "var(--green)" : "var(--white)";
    const [img, setImg] = React.useState(image);
    

  return (
    <div className={styles.card}>
        <table className={styles.project_header}>
            <tr>
                <th style={{backgroundColor: designChosen}}>design</th>
                <th style={{backgroundColor: devChosen}}>development</th>
            </tr>
        </table>
        <div className={styles.project_body}>
            <img src={img} alt="project" />
        </div>
        <div className={styles.project_description}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <table className={styles.project_link}>
            <tr>
                <th>
                    <h3>view on github</h3>
                </th>
                <th>
                    <a href={link} target="_blank">
                        <img src={arrow} alt="arrow" />
                    </a>
                </th>
            </tr>
        </table>
    </div>
  )
}

export default ProjectCard