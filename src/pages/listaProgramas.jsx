import React from 'react'
import Navbar from '@/components/navbarProgramas'
import Programacaja from '@/components/programacaja'
import styles from '@/styles/listaProgramas.module.css'



export default function listaprogramas() {
  return (
    <>
    <Navbar/>
    <div className={styles.programasContainer}>
    <h1>Programas</h1>
    <ul className={styles.filtro}>
      <li>Hombro</li>
      <li>Columna Lumbar</li>
      <li>Columna Dorsal</li>
      <li>Tobillo y pie</li>
    </ul>
    <Programacaja/>
    <Programacaja/>
    <Programacaja/>
    <Programacaja/>
    <Programacaja/>
    </div>
    
    </>
  )
}