import React from 'react'
import styles from './Programacaja.module.css'
import Link from 'next/link'



export default function programacaja() {
  return (
      <Link href='programm' className={styles.enlace}>
        <div className={styles.caja}>
            <span className={styles.linea}></span>
              <span className={styles.linea}></span>
              <span className={styles.linea}></span>
            <img src="https://picsum.photos/300/200" alt="" />
            <div className={styles.texto}>
              <span className={styles.linea}></span>
              <span className={styles.linea}></span>
              <span className={styles.linea}></span>
              <h3>Rehabilitación</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore saepe mollitia quis magnam inventore? Dolor natus consectetur nihil. Modi reiciendis deserunt commodi non facilis nesciunt laudantium sint velit tempore maxime.</p>
              
          </div>
    </div>
    </Link>
  )
}
