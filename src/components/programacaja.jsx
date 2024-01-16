import React from 'react'
import styles from './Programacaja.module.css'
import Link from 'next/link'



export default function programacaja(props) {
  return (
      
        <div className={styles.caja}>
            <div className={styles.foto}>
              <img src={props.url} alt="" />
            </div>
            <div className={styles.texto}>
    
              <h3>{props.titulo}</h3>
              <p>{props.descripcion}</p>
              <Link href={`programa/${props.id}`} className={styles.enlace}>
                <button className={styles.verPrograma}>Ver programa</button>
              </Link>
          </div>
    </div>
    
  )
}
