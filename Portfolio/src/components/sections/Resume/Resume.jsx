import resume from '../asset/Phong_Dinh.pdf'
import styles from './Resume.module.css'
export default function Resume() {
    return (
        <section className={styles['resume-container']}>
            <iframe
                src={resume}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="Resume"
            />
        </section>
    );
}
