import { useState, React } from "react"
import styles from './LinkLateral.module.css'
import Link from 'next/link'



export default function LinkPosterior({prevNextPost}) {
    const [previousPostLink, setPreviousPostLink] = useState(false)
    return (

prevNextPost[1] && <div className={styles.postSiguiente}
      onMouseEnter={()=>setPreviousPostLink(true)}
      onMouseLeave={()=>setPreviousPostLink(false)}>
      
      <div className={previousPostLink ? styles.fotoSiguiente : `${styles.fotoSiguiente} ${styles.hidden}`}>
        <img src='https://picsum.photos/seed/picsum/200/300' alt="foto" />
        <div className={styles.tarjetaSiguiente}>
          <h3 className={styles.tituloSiguiente}>{prevNextPost[1]? prevNextPost[1].title : ''}</h3>
          <Link className={styles.linkCaja} href={`/post/${prevNextPost[1].id}`}>Leer publicación</Link>
        </div>
      </div>
      <span className={styles.linkSiguiente}>POST SIGUIENTE</span> 
    </div>
    )
}



