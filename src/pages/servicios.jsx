import Hero from '@/components/hero'
import React from 'react'
import Navbar from '@/components/navbar'
import ServiciosGrid from '@/components/serviciosGrid'


export default function servicios() {
  return (
    <div>
      <Navbar/>
        <Hero titulo='Servicios' boton='Ver' enlace='#servicios' subtitulo='Descubre lo que soy puedo hacer por ti'/>
        <h2>Servicios</h2>
        <ServiciosGrid/>
    </div>
  )
}
