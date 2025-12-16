import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import styles from './Project.module.css'
import data from './project_data.js'
export default function Project() {
    const [project, useProject] = useState(data)
    const [showID, useShow] = useState(null)


    const projectData = project.map(prj => (
        <div key={prj.id} 
        className={`${styles['project-container']} ${showID && showID !== prj.id ? styles.dim : styles.mouseOn}`} 
        onMouseEnter={() => useShow(prj.id)} onMouseLeave={() => useShow(null)}>
            <ProjectCard name={prj.name} desc={prj.Description} url={prj.url} />
        </div>
    ))
    return (
        
        <section>
            {projectData}
        </section>
    )
}