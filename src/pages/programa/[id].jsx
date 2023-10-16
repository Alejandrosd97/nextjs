import NavbarProgramas from '@/components/navbarProgramas'
import AcordeonItem from '@/components/acordeonItem'
import styles from '@/styles/programa.module.css'

import {React} from 'react'

export default function programa({data, datos}) {

  const videos = datos.map((v, index)=>{
     return <AcordeonItem key={index} number={index} titulo={v.titulo} descripcion={v.descripcion} url={v.url}/>
  })

  return (
    <>
    <NavbarProgramas/>

    <div className={styles.acordeon}>
        <h1>{data.titulo}</h1>
        <p className={styles.descripcionGeneral}>{data.descripcion}</p>

      <ul style={{paddingLeft : '0'}}>
            {videos}
      </ul>
</div>
    
   </>
  )
}

export const getServerSideProps = async ({query}) =>{
  const res = await fetch(`http:/localhost:3000/api/lista/${query.id}`)
  const data = await res.json()

  const respuesta = await fetch(`http:/localhost:3000/api/video/${query.id}`)
  const datos = await respuesta.json()
  console.log(datos)
  return {
    props :{
      data,
      datos
    }
  }
}