import React, { useState } from 'react'
import styles from '@/styles/mispacientes.module.css'
import Paciente from '@/components/paciente'
import NavbarProgramas from '@/components/otroNav'
import PacienteForm from '@/components/pacienteForm'


export default function Mispacientes({data}) {
  const [search, setSearch] = useState('')

  const sugerencias = data.filter((p)=> p.nombre.toLowerCase().includes(search.toLowerCase())
   || p.apellido.toLowerCase().includes(search.toLowerCase()))


  const pacientes = sugerencias.map((p)=>{
    return <Paciente key={p.id} data={p}/>
  })
  return (
    <div className={styles.fondo}>
      <NavbarProgramas/>
      <div className={styles.contenedor}>
          <h1>MIS PACIENTES</h1>
          
          <div className={styles.misPacientes}>
              <PacienteForm/>
              <input type="text"
                onChange={(e)=>setSearch(e.target.value)}
                placeholder='Buscar paciente' className='form-control mt-3' />
              {pacientes}
          </div>

          
      </div>
    </div>
  )
}


export const getServerSideProps = async (ctx) =>{
  const { cookie } = ctx.req.headers;
  const res = await fetch('http://localhost:3000/api/paciente',{
    headers: { cookie }
  })
  const data = await res.json()

  return {
    props :{
      data
    }
  }
}
