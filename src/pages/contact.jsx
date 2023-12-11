import Form from '@/components/form'
import React from 'react'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import data from '../assets/dataAleman.js'




export default function contact() {
  return (
    <div>
        <Navbar/>
        <Hero titulo={data.titulos.contact} boton={data.titulos.ver} enlace='#contacto' subtitulo={data.titulos.contactSubtitulo}/>
        <Form data={data}/>
        

    </div>
  )
}
