import React from 'react'
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>
          <img src="/logoNegro-removebg-preview.png" alt="" />

        </div>
        <ul>
          <div className={styles.linea}>
            <li><a href="/#sobreMi">SOBRE MI</a></li>
            <li><a href="/#servicios"> SERVICIOS</a></li>
          </div>
          <div className={styles.linea}>
           <li><a href="/#contacto">CONTACTO</a></li>
            {/* <li><a href="/#ejercicio">EJERCICIO</a></li> */}
          </div>
          {/* <li><a href="/#ejercicio">POLÍTICA DE PRIVACIDAD</a></li> */}
        </ul>
        <div> alex.santamaria97@gmail.com </div>
    </div>
  )
}
 