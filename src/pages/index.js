
import { Inter } from 'next/font/google'
import '@/styles/Home.module.css'
import Hero from '@/components/hero'
import SobreMi from '@/components/sobreMi'
import Slider from '@/components/slider'
import { fotos } from '@/components/fotos'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero/>
    <SobreMi/>
    <Slider fotos={fotos}/> 
    </>
      
       
  )
}
