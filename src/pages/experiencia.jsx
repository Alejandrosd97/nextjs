import Hero from '@/components/hero'
import React from 'react'
import ExperienciaComp from '@/components/experienciaComp'
import Navbar from '@/components/navbar'



export default function activities() {
  return (
    <div>
      <Navbar/>
        <Hero titulo='Experiencia' boton='Ver' enlace='#experiencia' subtitulo='Descubre lo que soy capaz de hacer'/>
        <ExperienciaComp/>
    </div>
  )
}
