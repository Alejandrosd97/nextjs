import Hero from '@/components/hero'
import React from 'react'
import Navbar from '@/components/navbar'
import ServiciosGrid from '@/components/serviciosGrid'
import data from '../assets/dataAleman.js'
import styles from '@/styles/servicios.module.css'



export default function servicios() {
  return (
    <div>
      <Navbar/>
        <Hero titulo={data.titulos.servicios} boton={data.titulos.ver} enlace='#servicios' subtitulo={data.titulos.serviciosSubtitulo}/>
        <div className={styles.contenedor}>
        <h2>{data.navbar.servicios}</h2>
        <p id='servicios'> 
          {data.servicios.main}
        </p>
        </div>
        <ServiciosGrid data={data}/>
    </div>
  )
}
