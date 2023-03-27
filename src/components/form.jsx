import React, { useState } from 'react'
import styles from './Form.module.css'


export default function Form() {
    const [focus1, setFocus1] = useState(false)
    const [focus2, setFocus2] = useState(false)
    const [focus3, setFocus3] = useState(false)

  return (
    <div>
        <h2 className='titulo'>CONTACT</h2>
        <form className={styles.form}>
            <div className={styles.row}>
                <span className={focus1 ? styles.labelActive : styles.labelHidden}>Name:</span>
                <input onFocus={()=>setFocus1(true)} onBlur={()=>setFocus1(false)} placeholder='Name' type="text" required={true} id='name'/>
            </div>
            <div className={styles.row}>
                <label className={focus2 ? styles.labelActive : styles.labelHidden} htmlFor="email">Email:</label>
                <input onFocus={()=>setFocus2(true)} onBlur={()=>setFocus2(false)} type="email" required={true} id='email'/>
            </div>
            <div className={styles.row}>
                <label className={focus3 ? styles.labelActive : styles.labelHidden} htmlFor="question">Query:</label>
                <textarea className='textarea' onFocus={()=>setFocus3(true)} onBlur={()=>setFocus3(false)} required={true} id="question"></textarea>
            </div>
        </form>
    </div>
  )
}
