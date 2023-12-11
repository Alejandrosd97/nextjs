import React from 'react'
// import { useParams, Link, useLocation } from 'react-router-dom'
import styles from '@/styles/blog.module.css'



export default function Post() {
  //  const {postId} = useParams()
   
  return (
    <div className={styles.post}>
        
            <div className={styles.postImg}>
                <img src='https://picsum.photos/200' alt="" />
            </div>
            <div className={styles.postText}>
              <h3 className={styles.postTitle}>Titulo</h3>
              <h5 className={styles.postCategory}>Categoria</h5>
              <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum eaque doloremque eos quam maiores cum ullam doloribus illum repellendus nobis aliquid fuga laudantium deleniti saepe corrupti repellat, nisi est.</p>
              <small className={styles.postDate}>04/09/1997</small>
            </div>
        
    </div>
  )
}
