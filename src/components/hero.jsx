import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
       <div className={styles.main}>
            <h1 >Soy Alejandro</h1>
            <p>Fisioterapeuta autónomo</p>
            <button className={styles.mainButton}>Ver mas</button>
        </div >
    </div>
  ) 
}
