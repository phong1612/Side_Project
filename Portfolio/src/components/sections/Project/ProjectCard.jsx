import styles from './Project.module.css'
export default function ProjectCard(props) {

    return (
        <div className={styles["project-info"]}>
            <h1>{props.name}</h1>
            <h4>{props.desc}</h4>
            <a href={props.url} target='_blank'><button>Go to project</button></a>
        </div>
    )
}