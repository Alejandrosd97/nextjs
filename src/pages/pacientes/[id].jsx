import {React, useState} from 'react'
import styles from '@/styles/mispacientes.module.css'
import Link from 'next/link'
import {useRouter} from'next/router'
import NavbarProgramas from '@/components/otroNav'
import AcordeonItem from '@/components/acordeonItem'


export default function PacienteDetail({data}) {
  const router = useRouter()
  const {paciente, sesiones} = data

   const [form, setForm] = useState({
    fecha : '',
    numero :sesiones.length +1
  })

  const [filtro, setfiltro] = useState('pasadas')

  const sesionesPasadas = sesiones.filter((s)=>{
    return s.completada == true
  })

  const sesionesProgramadas = sesiones.filter((s)=>{
    return s.completada == false
  })

  const sesionesPasadasArray = sesionesPasadas.map((s, index)=>{
    return <AcordeonItem id={s.id} key={s.id} number={index + 1} titulo={`Sesión ${s.numero} - ${s.fecha.split('T')[0]}`} descripcion={s.comentarios} url={`sdjskjnkjvdnv`}/>
  })

  const sesionesProgramadasArray = sesionesProgramadas.map((s, index)=>{
    return <AcordeonItem id={s.id} key={s.id} number={index + 1} titulo={`Sesión ${s.numero} - ${s.fecha.split('T')[0]}`} descripcion={s.comentarios} url={`sdjskjnkjvdnv`}/>
  })

  function changeForm(e){
    setForm(prevFormData => {
        return {
            ...prevFormData,
            [e.target.name]: e.target.value
        }
    })
    }


  const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
    }

  function enviarForm(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/api/sesion/${paciente.id}`, config)
    .then(res=>res.json())
    .then(data=>{
      router.reload()
    })
    .catch(e=> console.log(e, e.name))
  }

  return (
    <>
    <NavbarProgramas/>
    <div className={styles.contenedor}>
        <h1>{paciente.nombre} {paciente.apellido}</h1>
        <div className={styles.pacienteBtns}>
            <button className={styles.boton}>Editar datos</button>
            <form onSubmit={((e)=>enviarForm(e))}>
              <button type='submit' className={styles.boton}>Citar</button>
              <div className={styles.dateInput}>
                <input name='fecha' required onChange={(e)=>{changeForm(e)}} className='form-control' type="datetime-local" />
              </div>
            </form>
        </div>
       
        <ul>
            <li><span className={styles.dato}>Teléfono: </span></li>
            <li><span className={styles.dato}>Edad: </span> {paciente.edad}</li>
            <li><span className={styles.dato}>Profesión:</span> </li>
            <li><span className={styles.dato}>Antecendentes médicos: </span> {paciente.antecedentes}</li>
            <li><span className={styles.dato}>Diagnóstico inicial: </span>{paciente.diagnostico}</li>
            <li><span className={styles.dato}>Primera visita: </span>{paciente.primeraVisita}</li>
            <li><span className={styles.dato}>Número de sesiones: </span>{sesiones.length}</li>

        </ul>

        <h3>Sesiones</h3>
        <div className={styles.cajaFiltro}>
          <span onClick={()=>setfiltro('pasadas')} className={filtro==='pasadas'? styles.activo : ''}>Pasadas</span> 
          <span onClick={()=>setfiltro('programadas')} className={filtro==='programadas'? styles.activo : ''}>Programadas</span>
        </div>
       {filtro === 'pasadas' && <div className={styles.sesiones}>
          {sesionesPasadasArray}
        </div>}

        {filtro === 'programadas' && <div className={styles.sesiones}>
          {sesionesProgramadasArray}
        </div>}
    </div>
    </>
  )
}

export const getServerSideProps = async (ctx) =>{
  const { cookie } = ctx.req.headers;
  const res = await fetch(`http://localhost:3000/api/paciente/${ctx.query.id}`,{
    headers: { cookie }
  })
  const data = await res.json()
  console.log(data)

  return {
    props :{
      data
    }
  }
}
