import {React, useEffect} from 'react'
import styles from './SobreMi.module.css'  
import Aos from 'aos'
import 'aos/dist/aos.css'  
import Image from 'next/image'
import Torneos from './torneos'





export default function SobreMi() {

   useEffect(()=>{
        const animation = ()=>{
            Aos.init({duration:2000})
        }
        animation()}
        , []
        )


  return (
    <div data-aos='fade-right' id='sobremi' className={styles.contenedor}>
        <h2 >SOBRE MÍ</h2>
        <div className={styles.informacionPersonal}>
            <img src="https://picsum.photos/200" alt="" />
            <p> Soy Alejandro, un apasionado fisioterapeuta con experiencia que busca oportunidades en Alemania. Con habilidades en español, inglés y alemán, estoy comprometido con proporcionar atención integral y personalizada a mis pacientes. Mi objetivo es integrarme en el sistema de salud alemán, aportando mi experiencia al bienestar de la comunidad.

Explora mi sitio para conocer más sobre mis servicios y mi trayectoria profesional. ¡Espero tener la oportunidad de colaborar contigo para alcanzar tus metas de salud y bienestar</p>
        </div>
        <Torneos/>
          <div className={styles.curriculum}> 
          ¡Descarga mi currículum en el siguiente enlace!
          <a href='../../public/curriculumAlejandroSantamaria.pdf' download>
            <button className={styles.curriculumButton}>DESCARGAR</button>
          </a>
        </div>
    </div>
  )
}
