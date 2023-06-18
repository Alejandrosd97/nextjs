import {React, useEffect} from 'react'
import styles from './SobreMi.module.css'  
import Aos from 'aos'
import 'aos/dist/aos.css'     



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
        <h1 >Sobre mi</h1>
        <div className={styles.informacionPersonal}>
            <img src="https://picsum.photos/200" alt="" />
            <p>Lorem ipsum dolor. Odio illum facilis consequatur aperiam repudiandae. Cum, fugiat quisquam, omnis molestiae aut, error dolore et itaque ullam blanditiis rem vitae voluptate possimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, quam voluptatum repellat vel doloremque iste illum atque! Laboriosam voluptatum fugit, sequi quisquam dicta eveniet molestias ut inventore illum delectus dignissimos.</p>
        </div>

        <div className={styles.curriculum}> 
          ¡Descarga mi currículum en el siguiente enlace!
          <a href='../../public/curriculumAlejandroSantamaria.pdf' download>
            <button className={styles.curriculumButton}>DESCARGAR</button>
          </a>
        </div>
    </div>
  )
}
