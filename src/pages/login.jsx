import React, {useState} from 'react'
import styles from '@/styles/login.module.css'


import {useSession, signIn, signOut} from 'next-auth/react'



export default function Login() {

    const {data :session} = useSession()



    return(
        <div>
            <h1>login</h1> 
            {session? <div><p>Inicia sesion</p> <button onClick={()=>signOut()}>Iniciar sesión</button></div> 
            : <div><p>Inicia sesion</p> <button onClick={()=>signIn()}>Iniciar sesión</button></div>}
        </div>

    )
   
}
