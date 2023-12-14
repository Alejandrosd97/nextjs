import React from 'react'
import styles from '@/styles/blog.module.css'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Post from '@/components/post'



export default function Blog() {
  
  return (
    <div>
      <Navbar/>
      <Hero titulo='Blog' subtitulo='Lee nuestro blog' enlace='Ver posts'/>
        <h1 className={styles.postsh2}>ÚLTIMAS PUBLICACIONES</h1>
        
          
        <div className={styles.contenedor}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
          

    </div>
  )
}

