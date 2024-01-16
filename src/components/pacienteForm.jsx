import {React, useState} from 'react'
import styles from './pacienteForm.module.css'
import {useRouter} from 'next/router'




export default function PacienteForm() {
    const router = useRouter()

    const [visible, setVisible] = useState(false)

    const [ form , setForm ] = useState({
        nombre:'', edad: null, apellido : '', antecedentes : '' , primeraVisita : '', diagnostico : ''
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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
        }
        fetch('http://localhost:3000/api/paciente', config)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            router.reload()

        })
        .catch(e=> console.log(e, e.name))
    }



  return (
    <>
    <div className={styles.input}>
        <button onClick={()=>setVisible(!visible)} className={styles.button}>
            { visible ? 'Cerrar' : 'Añadir paciente'}
        </button>
    </div>
    <div className={ visible ? styles.activo : styles.postContenedor}>
        <form onSubmit={enviarForm}>
            <div className={styles.row}>
                <div className={styles.rowInput}>
                    <label className={styles.label} htmlFor="nombre">Nombre:</label>
                    <input 
                        id='nombre' 
                        required
                        name='nombre' 
                        onChange={changeForm} 
                        className='form-control'
                        type="text" />
                </div>
                <div className={styles.rowInput}>
                <label className={styles.label} htmlFor="apellido">Apellido:</label>
                    <input 
                        id='apellido' 
                        required
                        name='apellido' 
                        onChange={changeForm} 
                        className='form-control'
                        type="text" />
                </div>
                <div className={styles.rowInput}>
                    <label className={styles.label} htmlFor="edad">Edad:</label>
                    <input 
                        id='edad' 
                        required
                        name='edad' 
                        onChange={changeForm} 
                        className='form-control'
                        type="number" />
                </div>

                <div className={styles.rowInput}>
                    <label className={styles.label}  htmlFor='post-foto'>Primera visita:</label>
                    <input 
                    className='form-control' 
                    type='date' 
                    id='url'
                    onChange={changeForm} 
                    name = 'primeraVisita'/>
                </div>
            </div>
            <div className={styles.row}>
            <div  className={styles.textArea}>
                <label htmlFor="antecedentes" className={styles.label}>Antecedentes:</label>
                <textarea 
                    className='form-control' 
                    onChange={changeForm} 
                    required
                    name='antecedentes' 
                    />
            </div>
            <div className={styles.textArea}>
                <label htmlFor="diagnostico" className={styles.label}>Diagnóstico inicial:</label>
                <textarea 
                    className='form-control' 
                    onChange={changeForm} 
                    required
                    name='diagnostico' 
                    id='contenido'/>
            </div>
            </div>
            
            <div className={styles.createPostBtns}>
                <button type='submit'
                    className={styles.button}>Guardar</button>
                <button className={styles.resetButton}>Borrar todo</button>
            </div>
        </form>
    </div>
    </>
  )
}
