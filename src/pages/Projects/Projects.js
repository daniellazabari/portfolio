import React from 'react'
import Section from '../../components/Section/Section'
import styles from './Projects.module.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import visualizerImg from '../../assets/visualizer.png'
import graphs from '../../assets/graphs.png'

function Projects() {
  return (
    <div id='projects'>
        <Section className={styles.projects}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.projects_list}>
                <ProjectCard className={styles.list_item} title="sorting algorithm visualizer" description="This is a coparison-based sorting algorithm visualizer that uses pygame. Currently, the project implements bubble sort and insertion sort." image={visualizerImg} link="https://github.com/daniellazabari/Sorting_Algorithm_Visualizer.git" chosen={["development"]} />
                <ProjectCard className={styles.list_item} title="graphs" description="A python project that provides visualization of data that the program recieves from the user as input. The program visualizes data as: pies chart, scatter plot, bar char and simple plot." image={graphs} link="https://github.com/daniellazabari/graphs.git" chosen={["development"]} />
                
            </div>
        </Section>
    </div>
  )
}

export default Projects