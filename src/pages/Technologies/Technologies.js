import React from 'react'
import styles from './Technologies.module.css'
import Section from '../../components/Section/Section'

function Technologies() {
  return (
    <div>
        <Section className={styles.technologies}>
            <h1 className={styles.title}>Technologies I Use</h1>
            <ul className={styles.technologies_list}>
                <li className={styles.technologies_item}>
                    <h3>docker</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>react</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>javascript</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>python</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>numpy</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>matplotlib</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>pandas</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>scikit-learn</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>C#</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>.NET</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>java</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>sql</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>c</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>sass</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>git</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>illustrator</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>photoshop</h3>
                </li>
                <li className={styles.technologies_item}>
                    <h3>figma</h3>
                </li>
            </ul>
        </Section>
    </div>
  )
}

export default Technologies