import { useState, React } from "react"
import styles from './LinkLateral.module.css'
import Link from 'next/link'



export default function LinkAnterior({prevNextPost}) {
    const [previousPostLink, setPreviousPostLink] = useState(false)
    return (

prevNextPost[0] && <div className={styles.postPrevio}
      onMouseEnter={()=>setPreviousPostLink(true)}
      onMouseLeave={()=>setPreviousPostLink(false)}>
      <span className={styles.linkPrevio}>POST PREVIO</span> 
      <div className={previousPostLink ? styles.fotoPrevio : `${styles.fotoPrevio} ${styles.hidden}`}>
        <img src='https://picsum.photos/seed/picsum/200/300' alt="foto" />
        <div className={styles.tarjetaPrevio}>
          <h3 className={styles.tituloPrevio}>{prevNextPost[0]? prevNextPost[0].title : ''}</h3>
          {/* <small className={styles.smallLateral}>{ prevNextPost[0] ? prevNextPost[0].date.split('T')[0] : ''}</small> */}
          <Link href={`/post/${prevNextPost[0].id}`}>Leer publicación</Link>
        </div>
      </div>
    </div>
    )
}