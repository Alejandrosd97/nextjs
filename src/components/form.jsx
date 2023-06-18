

import React, { useState, useEffect } from 'react'
import styles from './Form.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Form() {
    const [focus1, setFocus1] = useState(false)
    const [focus2, setFocus2] = useState(false)
    const [focus3, setFocus3] = useState(false)


    useEffect(()=>{
        const animation = ()=>{
            Aos.init({duration:2000})
        }
        animation()}
        , []
        )
    

  return ( 
    <div data-aos='fade-right' className={styles.contenedorForm}>
        <h2 id='contacto' className='titulo'>CONTACTO</h2>
        <p>Escríbeme un mensaje y me pondré en contacto contigo lo antes posible</p>
        <form className={styles.form}>
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
        </form>
    </div>
  )
}
