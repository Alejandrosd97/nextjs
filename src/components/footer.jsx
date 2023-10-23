import React from 'react'
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>
          <img src="/logoNegro-removebg-preview.png" alt="" />

        </div>
        <ul>
          <li><a href="/#home"> HOME</a></li>
          <li><a href="/#sobreMi">SOBRE MI</a></li>
          <li><a href="/#contacto">CONTACTO</a></li>
          <li><a href="/#ejercicio">EJERCICIO</a></li>
          <li><a href="/#ejercicio">POLÍTICA DE PRIVACIDAD</a></li>
        </ul>
        <div> alex.santamaria97@gmail.com </div>
    </div>
  )
}
 