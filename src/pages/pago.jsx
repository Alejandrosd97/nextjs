import NavbarProgramas from '@/components/otroNav'
import React from 'react'


export default  function Pago({data}) {
 console.log(data)

  return (
    
    <div>
        <NavbarProgramas/>
         {data.map((p)=>{
                return <div key={p.id}>
                            <h3>{p.nickname}</h3>
                            <h4>{p.unit_amount / 100}</h4>
                        </div>
            })}
      
    </div>
  )
}


export const getServerSideProps = async (ctx) =>{
  const { cookie } = ctx.req.headers;
  const res = await fetch('http://localhost:3000/api/precios',{
    headers: { cookie }
  })
  const data = await res.json()

  return {
    props :{
      data
    }
  }
}

