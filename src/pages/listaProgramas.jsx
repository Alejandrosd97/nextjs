import React from 'react'
import Navbar from '@/components/navbar'
import Programacaja from '@/components/programacaja'


export default function listaprogramas() {
  return (
    <>
    <Navbar/>
    <div>
    <h1>Programas</h1>
    <Programacaja/>
    <Programacaja/>
    <Programacaja/>
    <Programacaja/>
    <Programacaja/>
    </div>
    </>
  )
}