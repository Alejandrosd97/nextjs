'use client'

import NavbarProgramas from '@/components/otroNav'
import React from 'react'
import { Stripe} from 'stripe'


export default async function Precio() {
    const stripe =  new Stripe(process.env.STRIPE_SECRET_KEY)
    const precios = await stripe.prices.list()

  return (
    
    <div>
        <NavbarProgramas/>
         {listaPrecios.map((p)=>{
                return <div key={p.id}>
                            <h3>{p.nickname}</h3>
                            <h4>{p.unit_amount / 100}</h4>
                        </div>
            })}
      
    </div>
  )
}

