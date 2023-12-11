

import React, { useState, useEffect } from 'react'
import styles from './Form.module.css'
import Aos from 'aos' 
import 'aos/dist/aos.css'


export default function Form({data}) {
    
    useEffect(()=>{
        const animation = ()=>{
            Aos.init({duration:2000})
        }
        animation()}
        , []
        )
    

  return ( 
    <div data-aos='fade-right' className={styles.contenedorForm}>
        <h2 id='contacto' className='titulo'>{data.navbar.contacto}</h2>
        <p>{data.contacto.main}</p>


        <form>
            <div className={styles.row}>
                <div className={styles.inputBox}>
                    <input type="text" required={true} />
                    <span className={styles.text}>{data.contacto.nombre}</span>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.inputBox}>
                    <input type="email" required={true}/>
                    <span className={styles.text}>Email</span>
                </div>
            </div>

            <div className={styles.row}>
                <div className={`${styles.inputBox} ${styles.textArea}`}>
                    <textarea required={true} id="question"></textarea>
                    <span className={`${styles.text} ${styles.textAreaText}`}>{data.contacto.mensaje}</span>
                </div> 
            </div>
            <div className={`${styles.row} ${styles.privacidad}`}>
                {/* <input type='checkbox' required/>
                <p>He leído y acepto la Política de Privacidad </p> */}
            </div>

            <button id='boton' className={styles.enviar} type='submit'>{data.contacto.enviar}</button>


        </form>










        {/* <form className={styles.form}>
            <div className={styles.row}>
                <div className={styles.inputBox}>
                    <input type="text" required={true} />
                    <span className={styles.text}>Nombre</span>
                    <span className={styles.line}></span>
                </div>
            </div>


            <div className={styles.row}>
                <div className={styles.inputBox}>
                    <input type="email" required={true}/>
                    <span className={styles.text}>Email</span>
                    <span className={styles.line}></span>
                </div>
            </div>

            <div className={styles.row}>
                <div className={`${styles.inputBox} ${styles.textArea}`}>
                    <textarea required={true} id="question"></textarea>
                    <span className={`${styles.text} ${styles.textAreaText}`}>Mensaje</span>
                    <span className={styles.line}></span>
                </div> 
            </div>
            <div className={`${styles.row} ${styles.privacidad}`}>
                <input type='checkbox' required/>
                <p>He leído y acepto la Política de Privacidad </p>
            </div>

            <button id='boton' className={styles.enviar} type='submit'>Enviar</button>
        </form> */}

        {/* <a href='https://wa.me/34675644493' target='_blank'>whatsapp</a> */}
      
    </div>
  )
}
