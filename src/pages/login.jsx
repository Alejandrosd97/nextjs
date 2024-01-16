import {React, useState, useEffect} from 'react'
import NavbarProgramas from '@/components/otroNav'
import styles from '@/styles/login.module.css'
import {useRouter} from 'next/router'
import { useSearchParams } from 'next/navigation'


export default function Login() {
    const router = useRouter()
    const searchParams = useSearchParams()
 
    const next = searchParams.get('next')
   
    const [ form , setForm ] = useState({
        email:'', password:''
    })


    function changeForm(event){
        setForm(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    // function valueForm (value){
    //     setForm(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             category: value.value
    //         }
    //     })
    // }



    
    function enviarForm(e){
        e.preventDefault() 

        const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)

        }
        fetch('http://localhost:3000/api/login', config)
        .then(res=>res.json())
        .then(data=>{
            if (next){
                router.push(`/${next}`)
            }
            else{
                router.push('/pacientes')
            }
        // .catch(e=> console.log(e, e.name))
    })}

  return (
    <>
    <NavbarProgramas/>
    <div className={styles.loginContenedor}>
        <h1>LOGIN</h1>
        <form onSubmit={enviarForm}>
            <label className='mb-1' htmlFor="email">Email</label>
            <input 
                id='email' 
                required
                name='title' 
                onChange={changeForm} 
                className="form-control" 
                type="email" />
            <label className='mt-3 mb-1' htmlFor="contenido">Contraseña:</label>
            <input 
                className="form-control " 
                onChange={changeForm} 
                required
                name='password' 
                id='contenido'/>
            
            <div className='create-post-btns  mt-3'>
                <button type='submit'
                    className='btn btn-primary'>Publicar</button>
                <button className='btn btn-danger'>Borrar todo</button>
            </div>
        </form>
    </div>
    </>
  )
}
