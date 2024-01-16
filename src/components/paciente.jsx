import React from 'react'
import styles from './Paciente.module.css'
import Link from 'next/link'


export default function Paciente({data : {apellido, nombre, primeraVisita, diagnostico, id}}) {

  return (
    <Link href={`/pacientes/${id}`}>
    <div className={styles.paciente}>
        <span>{nombre} </span><span>{apellido}</span>
        <p>Última visita: {primeraVisita}</p>
        <p>Diagnóstico inicial: {diagnostico}</p>
    </div>
    </Link>
  )
}
