import React from 'react'
import styles from '@/styles/blog.module.css'
import Link from 'next/link'



export default function Post({data}) {
   console.log(data)
  return (
   
    <div className={styles.post}>
         <Link href={`/post/${data.id}`}>
        <div className={styles.postImg}>
            <img src='https://picsum.photos/200' alt="" />
        </div>
        <div className={styles.postText}>
          <h3 className={styles.postTitle}>{data.title}</h3>
          <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum eaque doloremque eos quam maiores cum ullam doloribus illum repellendus nobis aliquid fuga laudantium deleniti saepe corrupti repellat, nisi est.</p>
          <small className={styles.postDate}>04/09/1997</small>
        </div>
            </Link>

    </div>
  )
}
