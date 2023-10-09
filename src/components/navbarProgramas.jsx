import {React, useEffect, useState} from 'react'
import styles from './NavbarProgramas.module.css'
import Link from 'next/link'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'

export default function NavbarProgramas() {
    const [menu, setMenu] = useState(false)


    function toggleMenu(){
        setMenu(prev => !prev)
    }

  return (
    <div  className={styles.navbar}>
        <div className={styles.titulo}>
            ALEJANDRO SANTAMARIA
        </div>
        <ul className={menu ? styles.active : styles.hidden}>
            <Link href='/' onClick={toggleMenu}><li > Sobre mi</li></Link>
            <Link href='/experiencia' onClick={toggleMenu}><li >Experiencia</li></Link>
            <Link href='/servicios' onClick={toggleMenu}><li > Servicios</li></Link>

            <Link href='/contact' onClick={toggleMenu}><li> Contacto</li></Link>
            <Link href='/listaProgramas' onClick={toggleMenu}><li> Programas</li></Link>
        </ul>
            {
                menu ? <AiOutlineClose className={styles.icon} size={20} onClick={toggleMenu}/> 
                : <AiOutlineMenu className={styles.icon} size={20} onClick={toggleMenu}/>
            }
           
       
    </div>
  )
}
