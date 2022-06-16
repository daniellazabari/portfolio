import React from 'react'
import Section from '../../components/Section/Section'
import styles from "./Employment.module.css"

function Employment() {
  return (
    <div id='employment'>
        <Section className={styles.employment}>
            <h1 className={styles.title}>Employment</h1>
            <ul className={styles.employment_list}>
                    <li className={styles.employment_item}>
                        <span className={styles.employment_item_title}>
                            <h3>march 2022 - June 2022</h3>
                        </span>
                        <span className={styles.employment_item_description}>
                            <h3>Intern at evolution.inc as a python developer of ai algorithms<br></br></h3>
                        </span>
                    </li>
                    <li className={styles.employment_item}  style={{borderBottom: "none"}}>
                        <span className={styles.employment_item_title}>
                            <h3
                            style={{marginLeft: '4.5vw'}}>
                                June 2020 - present
                            </h3>
                        </span>
                        <span  style={{borderBottom: "none"}} className={styles.employment_item_description}>
                            <h3>freelance graphic designer</h3>
                        </span>
                    </li>
                </ul>
        </Section>

    </div>
  )
}

export default Employment