import {React, useEffect} from 'react'
import styles from './SobreMi.module.css'  
import Aos from 'aos'
import 'aos/dist/aos.css'  
import Image from 'next/image'
import Torneos from './torneos'





export default function SobreMi({data}) {

   useEffect(()=>{
        const animation = ()=>{
            Aos.init({duration:2000})
        }
        animation()}
        , []
        )


  return (
    <div data-aos='fade-right' id='sobremi' className={styles.contenedor}>
        <h2>ÜBER MICH</h2>
        <div className={styles.informacionPersonal}>
            <img src="https://picsum.photos/200" alt="" />

            <p>{data.home.main}</p>

            {/* <p> Soy Alejandro, un apasionado fisioterapeuta con experiencia que busca oportunidades en Alemania. Con habilidades en español, inglés y alemán, estoy comprometido con proporcionar atención integral y personalizada a mis pacientes. Mi objetivo es integrarme en el sistema de salud alemán, aportando mi experiencia al bienestar de la comunidad.

Explora mi sitio para conocer más sobre mis servicios y mi trayectoria profesional. ¡Espero tener la oportunidad de colaborar contigo para alcanzar tus metas de salud y bienestar</p> */}
        </div>
        <Torneos data={data}/>
        <div className={styles.posgrados}>
          <h2>WEITERBILDUNG</h2>
           <ul>
            <li className={styles.formacion}><span className={styles.bold}> Universitätsexperte für Physiotherapie des Bewegungsapparates</span> - 375 Stunden / 15ECTS</li>
            <li className={styles.formacion}><span className={styles.bold}>Wirbelsäulenmanipulationen</span> - 25 Stunden</li>
            <li className={styles.formacion}><span className={styles.bold}>Manuelle und manipulative Therapie der peripheren Gelenke</span> - 15 Stunden</li>
            <li className={styles.formacion}><span className={styles.bold}>Physiotherapie bei Halsschmerzen, Radikulopathien und Bandscheibenvorfällen</span> - 25 Stunden</li>
            <li className={styles.formacion}><span className={styles.bold}>Manuelle Therapie bei Lendenwirbelschmerzen und Ischias</span> - 15 Stunden</li>
            <li className={styles.formacion}><span className={styles.bold}>Knöchel und Fuß: Knochen- und Weichteilverletzungen</span> - 25 Stunden</li>
            <li className={styles.formacion}><span className={styles.bold}>Anwendung von Bandagen in der klinischen Praxis: neuromuskuläre Bandagen (Kinesiotaping) und funktionelle Bandagen</span> - 20 Stunden</li>
            <li className={styles.formacion}><span className={styles.bold}>Physiotherapeutische Behandlung von Funktionsstörungen des Kiefergelenks</span> - 15 Stunden</li>
          </ul>
        </div>
          <div className={styles.curriculum}> 
         
          {/* ¡Descarga mi currículum en el siguiente enlace! */}
           {data.home.curriculum}
          <a href='../../public/curriculumAlejandroSantamaria.pdf' download>
            <button className={styles.curriculumButton}> {data.home.descargar}</button>
          </a>
        </div>
    </div>
  )
}
