import React from 'react'
import styles from './SobreMi.module.css'
import curriculum from '../../public/curriculum-Alejandro-Santamaria.pdf'



export default function SobreMi() {
  return (
    <div className={styles.contenedor}>
        <h1>Sobre mi</h1>
        <div className={styles.informacionPersonal}>
            <img src="https://picsum.photos/200" alt="" />
            <p>Lorem ipsum dolor. Odio illum facilis consequatur aperiam repudiandae. Cum, fugiat quisquam, omnis molestiae aut, error dolore et itaque ullam blanditiis rem vitae voluptate possimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, quam voluptatum repellat vel doloremque iste illum atque! Laboriosam voluptatum fugit, sequi quisquam dicta eveniet molestias ut inventore illum delectus dignissimos.</p>
        </div>

        <div>
          ¡Descarga mi currículum en el siguiente enlace!
          <a href={curriculum} download='Alejandro-Santamaria-Curriculum'>
            <button className='resume-button'>DOWNLOAD MY RESUME</button>
          </a>
        </div>
    </div>
  )
}
