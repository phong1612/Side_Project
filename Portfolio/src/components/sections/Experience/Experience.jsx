import { useState } from 'react'
import Experience_data from "./Experience_data"
import Expo_comp from './Experience_comp'
import styles from './Experience.module.css'
export default function Experience() {

    const [data, setData] = useState(Experience_data)
    const dataElement = data.map(el => (
        <Expo_comp key={el.id} company={el.company} position={el.position} time={el.period} company_pic={el.company_pic}/>
    ))
    return (
        <section >
            {dataElement}
        </section>
    )
}