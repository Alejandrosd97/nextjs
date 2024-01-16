import React from 'react'
import styles from '@/styles/blog.module.css'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Post from '@/components/post'





export default function Blog({data}) {
  const posts = data.map((p)=>{
    return <Post key={p.id} data={p}/>
  })

    return (
    <div>
      <Navbar/>
      <Hero titulo='Blog' subtitulo='Lee nuestro blog' enlace='Ver posts'/>
        <h1 className={styles.postsh2}>ÚLTIMAS PUBLICACIONES</h1>
        
          
        <div className={styles.contenedor}>
         {posts}
        </div>
    </div>
  )
}



export const getServerSideProps = async (ctx) =>{
  const { cookie } = ctx.req.headers;

  const res = await fetch('http://localhost:3000/api/post/',{
    headers: { cookie }
  })
  const data = await res.json()

  return {
    props :{
      data
    }
  }
}
