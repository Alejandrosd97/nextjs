import {React} from 'react'
import styles from './AcordeonItemm.module.css'


export default function AcordeonItem(props) {
    
  return (
    <li classname = {styles.lista}> 
        <label className={styles.barra} htmlFor={props.number}>{props.titulo} <span className={styles.flecha}>&#x3e;</span></label> 
        <input id={props.number} className={styles.hiddenInput} name='accordion' type="radio" />
        <div className={styles.content}>
        <iframe src="https://player.vimeo.com/video/873778793?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="video_prueba2"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
        <div className={styles.descripcion}>
        <p>{props.descripcion}</p>
        </div>
        </div>
    </li>
            
  )
}




