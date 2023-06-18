import React from 'react'
import styles from './Hero.module.css'

export default function Hero(props) {
  return (
    <div className={styles.hero}>
       <div className={styles.main}>
            <h1 >{props.titulo}</h1>
            <p>{props.subtitulo}</p>
            <a href={props.enlace}><button className={styles.mainButton}>{props.boton}</button></a>
            
        </div >
    </div>
  ) 
}
