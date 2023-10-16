import React from 'react'
import Navbar from '@/components/navbarProgramas'
import Programacaja from '@/components/programacaja'
import styles from '@/styles/listaProgramas.module.css'



export default function listaprogramas({data}) {
  return (
    <>
    <Navbar/>
    <div className={styles.programasContainer}>
    <h1>Programas</h1>
    <p className={styles.introduccion}>En mi constante búsqueda de proporcionar el mejor cuidado de salud y bienestar a mis pacientes, he creado esta página dedicada a videos de ejercicio terapéutico. Estoy encantado de compartir estos recursos contigo y te animo a explorar, aprender y, lo más importante, aplicar estos ejercicios terapéuticos en tu vida diaria. ¡Juntos, podemos trabajar para que te sientas en tu mejor forma!</p>
    <ul className={styles.filtro}>
      <li>Hombro</li>
      <li>Columna Lumbar</li>
      <li>Columna Dorsal</li>
      <li>Tobillo y pie</li>
    </ul>
    {data.map((p)=>{
      return <Programacaja key={p.id} id={p.id} titulo ={p.titulo} descripcion={p.descripcion} categoria={p.categoria} url={p.url}/>
    })}
    </div>
    
    </>
  )
}

export const getServerSideProps = async (ctx) =>{
  const res = await fetch('http:/localhost:3000/api/lista')
  const data = await res.json()

  // const respuesta = await fetch('http:/localhost:3000/api/video')
  // const datos = await respuesta.json()

  return {
    props :{
      data
    }
  }
}