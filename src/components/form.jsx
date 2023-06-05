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
                <input type="text" required={true} />
                <span >Name</span>

            </div>
            <div className={styles.row}>
                <input type="email" required={true}/>
                <span>Email</span>
            </div>
            <div className={styles.row}>
                <textarea required={true} id="question"></textarea>
                <span>Message</span>
            </div>
        </form>
    </div>
  )
}
