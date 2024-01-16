import {React, useState} from 'react'
import styles from './AcordeonItemm.module.css'
import {useRouter} from 'next/router'



export default function AcordeonItem(props) {
  const router = useRouter()





  const [edit, setEdit] = useState(false)
  const [form, setForm] = useState({
    comentarios : '',
    completada :true
  })

  const config = {
    method : 'PUT',
    headers : {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(form)
  }

  function changeForm(event){
    setForm(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
  }

  function sendForm(e){
    e.preventDefault()
    fetch(`http://localhost:3000/api/sesion/${props.id}`, config)
    .then((res)=>res.json())
    .then((data)=>{
      //console.log(data)
      router.reload()
    })
    .catch((e)=>{
      console.log(e)
    })
  }
    
  return (
    <li className = {styles.lista}> 
        <label className={styles.barra} htmlFor={props.number}>
          {props.titulo} <span className={styles.flecha}>&#x3e;</span>

        </label> 
        <input id={props.number} className={styles.hiddenInput} name='accordion' type="radio" />
        <div className={styles.content}>
        
        {props.video &&  <div className={styles.videoContainer}><iframe src="https://player.vimeo.com/video/873778793?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="video_prueba2"></iframe><script src="https://player.vimeo.com/api/player.js"></script></div>}
        
        <div className={styles.descripcion}> 
        {!props.video && !props.descripcion &&
        <form onSubmit={(e)=>sendForm(e)} className={styles.editForm}>
            <textarea
              name='comentarios'
              className='form-control'
              onChange={(e)=> changeForm(e)}
            />
            
              <button type='submit' className={styles.editButton}>Guardar</button>
          </form>}
          {!props.video && edit &&
        <form onSubmit={(e)=>sendForm(e)} className={styles.editForm}>
            <textarea
              defaultValue={props.descripcion}
              name='comentarios'
              className='form-control'
              onChange={(e)=> changeForm(e)}
            />
          <div className={styles.btns}>
            <button type='submit' className={styles.editButton}>Guardar</button>
            <button onClick={()=>setEdit(false)} className={styles.cancelButton}>Cancelar</button>
          </div>          
        </form>}
        {props.descripcion && !edit && <p>{props.descripcion}</p>}
        {!props.video && !edit && props.descripcion && <button className={styles.editButton} onClick={()=>setEdit(!edit)}> Editar</button>}
        </div>
        </div>
    </li>
            
  )
}




