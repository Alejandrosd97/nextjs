

import React, { useState, useEffect } from 'react'
import styles from './trabajos.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Form() {

    useEffect(()=>{
        const animation = ()=>{
            Aos.init({duration:2000})
        }
        animation()}
        , []
        )
    

  return ( 
    <div data-aos='fade-right' className={styles.contenedor}>
        <ul className={styles.trabajos}>
            <li><div className={styles.punto}></div><p className={styles.lineaSuperior}><span className={styles.fecha}>Fisioterapeuta autónomo</span><span>Sept 2022 - Act</span></p><p> lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p></li>
            <li><div className={styles.punto}></div><p className={styles.lineaSuperior}><span className={styles.fecha}>Clínica Raulfisio Gandia</span>Mar 2022 - Act<span></span></p><p> lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p></li>
            <li><div className={styles.punto}></div><p className={styles.lineaSuperior}><span className={styles.fecha}>Torneo ITF Orysol Gandía 2023</span>Jul 2023<span></span></p><p> lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p></li>
            <li><div className={styles.punto}></div><p className={styles.lineaSuperior}><span className={styles.fecha}>Clínica Raulfisio Denia</span>Abr 2022 - Act<span></span></p><p> lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p></li>
            <li><div className={styles.punto}></div><p className={styles.lineaSuperior}><span className={styles.fecha}>Torneo ITF Orysol Gandía 2021</span>Jul 2021<span></span></p><p> lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p></li>
            <li><div className={styles.punto}></div><p className={styles.lineaSuperior}><span className={styles.fecha}>Torneo ITF Seniors Carmen Perea 2021</span><span>Nov 2021</span></p><p> lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p></li>
            <li><div className={styles.punto}></div><p className={styles.lineaSuperior}><span className={styles.fecha}>Torneo ITF Orysol Gandía 2022</span><span>Jul 2022</span></p><p> lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p></li>
        </ul>
               
    </div>
  )
}
