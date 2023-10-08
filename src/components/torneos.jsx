import {React, useEffect} from 'react'
import styles from './TorneosDefinitivo.module.css'  
import Aos from 'aos'
import 'aos/dist/aos.css'  
import Image from 'next/image'
 



export default function Torneos() {

  return (
    <div className={styles.contenedor}>
        
        <div className={styles.tenis}>
          <img className={styles.fotoTenis}
                src="/tenis.jpg"
                alt="Picture of the author"
              />
          <p className={styles.parrafo}> Ademas de mi trabajo como fisioterapeuta, una de mis grandes pasiones es el tenis. A lo largo de los años, he tenido la oportunidad de estar involucrado en varios torneos de tenis de renombre, tanto a nivel local como internacional. Esta experiencia ha enriquecido mi comprensión de los desafíos físicos que enfrentan los atletas en el mundo del tenis. Mi objetivo es ayudar a los jugadores a superar lesiones, prevenir nuevas y maximizar su rendimiento en la cancha. Creo que la fisioterapia desempeña un papel crucial en el éxito de los atletas, ya que puede contribuir a su recuperación y mantenerlos en su mejor forma física.</p>
        </div>
        <div className={styles.tenis}>
          <p className={styles.parrafo}> Ademas de mi trabajo como fisioterapeuta, una de mis grandes pasiones es el tenis. A lo largo de los años, he tenido la oportunidad de estar involucrado en varios torneos de tenis de renombre, tanto a nivel local como internacional. Esta experiencia ha enriquecido mi comprensión de los desafíos físicos que enfrentan los atletas en el mundo del tenis. Mi objetivo es ayudar a los jugadores a superar lesiones, prevenir nuevas y maximizar su rendimiento en la cancha. Creo que la fisioterapia desempeña un papel crucial en el éxito de los atletas, ya que puede contribuir a su recuperación y mantenerlos en su mejor forma física.</p>

          <img className={styles.fotoTenis}
                src="/tenis.jpg"
                
                alt="Picture of the author"
              />
        </div>
    </div>
  )
}
