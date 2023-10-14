import Hero from '@/components/hero'
import React from 'react'
import Navbar from '@/components/navbar'
import ServiciosGrid from '@/components/serviciosGrid'


export default function servicios() {
  return (
    <div>
      <Navbar/>
        <Hero titulo='Servicios' boton='Ver' enlace='#servicios' subtitulo='Descubre lo que puedo hacer por ti'/>
        <h2 style={{textAlign : 'center', marginTop : '50px' , marginBottom : '40px', fontSize : '40px'}}>Servicios</h2>
        <p style={{width:'90%', maxWidth:'600px', margin:'auto', marginBottom : '60px', textAlign : 'center'}}> Te invito a conocer los servicios personalizados que ofrezco para mejorar tu salud, bienestar y calidad de vida. Mi enfoque se centra en ti y en ayudarte a alcanzar tus metas de salud y movimiento. ¡Descubre cómo puedo ser parte de tu camino hacia una vida activa y sin dolor!</p>
        <ServiciosGrid/>
    </div>
  )
}
