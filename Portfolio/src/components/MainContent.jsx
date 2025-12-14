import AboutMe from './sections/AboutMe/AboutMe'
import Education from './sections/Education'
import Skill from './sections/Skill/Skill'
import Project from './sections/Project'
import Experience from './sections/Experience/Experience'
import Resume from './sections/Resume/Resume'
import styles from './MainContent.module.css'
export default function MainContent(props) {
    
    let ContentDisplay = <AboutMe />

    switch (props.buttonContent) {
        case "about me":
            ContentDisplay = <AboutMe />
            break
        case "skills":
            ContentDisplay = <Skill />
            break
        case "experience":
            ContentDisplay = <Experience />
            break
        case "education":
            ContentDisplay = <Education />
            break
        case "project":
            ContentDisplay = <Project />
            break
        case "resume":
            ContentDisplay = <Resume />
            break
        default:
            ContentDisplay = <AboutMe />
    }


    return (
        <section className={styles[props.lightMode ? "light" : "dark"]}>
            {ContentDisplay}
            <h4>Built by Phong Nhat Dinh | Last Updated: December 14, 2025.</h4>
        </section>
    )
}