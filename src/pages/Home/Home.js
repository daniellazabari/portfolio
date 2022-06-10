import React from 'react'
import styles from "./Home.module.css"
import CursorCopy from '../../components/CursorCopy/CursorCopy'
import Section from '../../components/Section/Section'

function Home() {
  return (
    <div>
        {/* <h1 className={styles.title}>
          <span className={styles.dev}>Software Developer</span>
          <br></br> <span className={styles.design}>&#38; Graphic Designer</span>
        </h1> */}
        <Section className={styles.section}>
          <h1 className={styles.title}>
            {/* <span className={styles.dev}>Software Developer</span>
            <span className={styles.design}>&#38; Graphic Designer</span> */}
            <span className={styles.dev}>Software Developer</span>
            <span className={styles.design}>who loves design</span>
          </h1>
          <h3>
            <span className={styles.subtitle}>
              Hi! I'm <span className={styles.name}>Daniella Zabari</span>, an Israeli software developer currently based in Tel Aviv, Israel.<br></br>
            </span> 
          </h3>
        </Section>
        
    </div>
  )
}

export default Home