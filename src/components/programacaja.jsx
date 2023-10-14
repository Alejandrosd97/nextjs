import React from 'react'
import styles from './Programacaja.module.css'
import Link from 'next/link'



export default function programacaja({id}) {
  return (
      
        <div className={styles.caja}>
            
            <img src="https://picsum.photos/300/200" alt="" />
            <div className={styles.texto}>
    
              <h3>Rehabilitación</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore saepe mollitia quis magnam inventore? Dolor natus consectetur nihil. Modi reiciendis deserunt commodi non facilis nesciunt laudantium sint velit tempore maxime.</p>
              <Link href={`programa/${id}`} className={styles.enlace}>
                <button className={styles.verPrograma}>Ver programa</button>
              </Link>
          </div>
    </div>
    
  )
}
