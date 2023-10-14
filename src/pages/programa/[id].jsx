import NavbarProgramas from '@/components/navbarProgramas'
import Programa from '@/components/programa'

import {React, useParams} from 'react'

export default function programa({data}) {


  return (
    <>
    <NavbarProgramas/>
    <Programa/>
    <p>{data.titulo}</p>
    </>
  )
}

export const getServerSideProps = async ({query}) =>{
  const res = await fetch(`http://localhost:3000/api/lista/${query.id}`)
  const data = await res.json()
  return {
    props :{
      data
    }
  }
}