import React from 'react'
import styles from './About.module.css'
import Section from '../../components/Section/Section'

function About() {
  return (
    <div id='about'>
        <div className={styles.my_picture}></div>
        <Section className={styles.about}>
            <h3>
                <span className={styles.text}>
                currently i’m studying computer science at reichman university, herzliya.<br></br><br></br>
                as someone who has always had both a creative and a logical side, it was hard for 
                me to settle on a carrer path. but majoring in computer science and learning graphic 
                design gave me the opportunity to combine the two ends and take full advantage of 
                my skills.<br></br><br></br>
                i enjoy learning new thing, cooking, watching movies (especially documentaries) and traveling.
                i have 3 cats and a dog who i absolutely love and hopefully i’ll have more pets in the future.
                </span>
            </h3>
        </Section>
    </div>
  )
}

export default About