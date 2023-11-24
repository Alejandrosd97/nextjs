import {React, useEffect} from 'react'
import styles from './TorneosDefinitivo.module.css'  
import Aos from 'aos'
import 'aos/dist/aos.css'  
 



export default function Torneos() {

  return (
    <div className={styles.contenedor}>
        
        <div className={styles.tenis}>
          <img className={styles.fotoTenis}
                src="/tenis.jpg"
                alt="Fotogreafía de una pista de tenis"
              />
          <p className={styles.parrafo}>A lo largo de los años, he tenido la oportunidad de estar involucrado en varios torneos oficiales de tenis. Esta experiencia ha enriquecido mi comprensión de los desafíos físicos que enfrentan los atletas en el mundo del deporte. Mi objetivo es ayudar a los jugadores a superar lesiones, prevenir nuevas y maximizar su rendimiento en la cancha</p>
        </div>
        <div className={`${styles.tenis} ${styles.segundaFila}`}>
          <p className={styles.parrafo}>En mi enfoque como fisioterapeuta, el ejercicio terapéutico es esencial. Creo en la fuerza del movimiento para disminuir el dolor y mejorar la calidad de vida. Diseño programas de ejercicios personalizados basados en tus necesidades únicas. Trabajo contigo para recuperarte de lesiones, fortalecer tu cuerpo y prevenir futuros problemas de salud.</p>

          <img className={styles.fotoTenis}
                src="/deporte.jpg"
                
                alt="Fotografía de material deportivo"
              />
        </div>
    </div>
  )
}
