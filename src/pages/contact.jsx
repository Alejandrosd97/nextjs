import Form from '@/components/form'
import React from 'react'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'



export default function contact() {
  return (
    <div>
        <Navbar/>
        <Hero titulo='Contacto' boton='¡Hablemos!' enlace='#contacto' subtitulo='Escríbeme un mensaje a través del siguiente formulario'/>

        <Form/>

    </div>
  )
}
