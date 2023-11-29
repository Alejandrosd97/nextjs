
import { Inter } from 'next/font/google'
import '@/styles/Home.module.css'
import Hero from '@/components/hero'
import SobreMi from '@/components/sobreMi'
import Navbar from '@/components/navbar'
import { fotos } from '@/components/fotos'
import data from '../assets/data.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero titulo={data.titulos.alejandro} boton='Ver mas' enlace='#sobremi' subtitulo={data.titulos.sobreMi}/>
    <SobreMi data={data}/>
    </>
  )
}
