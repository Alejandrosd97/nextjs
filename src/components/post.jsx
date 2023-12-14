import React from 'react'
// import { useParams, Link, useLocation } from 'react-router-dom'
import styles from '@/styles/blog.module.css'
import Link from 'next/link'



export default function Post() {
  //  const {postId} = useParams()
   
  return (
    
    <div className={styles.post}>
        <Link href='post/1'>
        <div className={styles.postImg}>
            <img src='https://picsum.photos/200' alt="" />
        </div>
        </Link>
        <div className={styles.postText}>
          <h3 className={styles.postTitle}>Mi primer dia de trabajo en Suiza</h3>
          <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum eaque doloremque eos quam maiores cum ullam doloribus illum repellendus nobis aliquid fuga laudantium deleniti saepe corrupti repellat, nisi est.</p>
          <small className={styles.postDate}>04/09/1997</small>
        </div>
    </div>
    
  )
}
