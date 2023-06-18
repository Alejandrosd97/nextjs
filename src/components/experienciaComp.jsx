import {React, useState, useEffect} from 'react'
import styles from './ExperienciaComp.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function ExperienciaComp() {

  const [active, setActive]= useState('trabajos')

  function change(name){
      setActive(name)
  }

  useEffect(()=>{
        const animation = ()=>{
            Aos.init({duration:2000})
        }
        animation()}
        , []
        )

  return (
    <div data-aos='fade-right' className={styles.contenedor}>
        <h1 id='experiencia'>Experiencia</h1>
        <div className={styles.experiencia}>
           <ul className={styles.titulos}>
            <li className={active=='trabajos'? styles.bold: styles.normal} onClick={()=>change('trabajos')}>Experiencia laboral</li>
            <li className={active=='formaciones'? styles.bold: styles.normal} onClick={()=>change('formaciones')}>Formación</li>
            <li className={active=='otras'? styles.bold: styles.normal} onClick={()=>change('otras')}>Otras habilidades</li>
           </ul>

           { active=='trabajos' && <ul className={styles.trabajos}>
            <li> <span>Fsioterapeuta autónomo</span> </li>
            <li><span>Clínica Raulfisio Gandia</span> </li>
            <li><span>Clínica Raulfisio Denia</span> </li>
            <li> <span>Torneo ITF Orysol Gandía 2021</span> </li>
            <li><span>Torneo ITF Seniors Carmen Perea 2021</span></li>
            <li><span>Torneo ITF Orysol Gandía 2022</span></li>
           </ul>}

           {active=='formaciones' && 
           <>
           <h5>Estudios</h5>
           <ul className={styles.formaciones}>
            <li>Grado en Fisioterapia - Universitat de Lleida 2017-2021</li>
            <li>Grado en Enfermería (hasta tercer curso) - Universitat de LLeida 2017-2020 </li>
            <li>Grado superior en Laboratorio de Diagnóstico Clínico - IES Tirant Lo Blanc 2015-2017</li>
            <li>Bachillerato científico - IES Tirant Lo Blanc 2013-2015</li>
           </ul>

          <h5>Formaciones</h5>
          <ul className={styles.formaciones}>
            <li>Fisioterapia en las cervicalgias, radiculopatías y hernias discales - 20h</li>
            <li>Manipulaciones vertebrales - 25h</li>
            <li>Terapia manual en las cervicalgias. Enfoque clínico - 15h</li>
            <li>Tratamiento fisioterápico de las disfunciones de la articulacion temporomandibular (ATM) - 15h</li>
            <li>Terapia manual en las lumbágias y ciáticas - 15h</li>
          </ul>
          </>}

          { active == 'otras' && <ul className={styles.otras}>
            <li>Nivel B2 de Inglés y Alemán</li>
            <li>Carnet de conducir</li>
            <li>Conocimientos de programación con HTML, Css, JavaScript y Python, especialmente desarrollo y despliegue de paginas web tanto front-end como back-end</li>
            <li>Manejo de IAs como ChatGpt y Midjourney</li>
            <li>Conocimientos básicos de edición de vídeo</li>
          </ul>}

        </div>
    </div>
  )
}
