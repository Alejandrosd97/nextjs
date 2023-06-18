import {React, useEffect, useState} from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
    const [color, setColor]= useState('white')
    const [bgColor, setBgColor]= useState('transparent')
    const [shadow, setShadow]= useState(false)
    const [menu, setMenu] = useState(false)


    function toggleMenu(){
        setMenu(prev => !prev)
    }


     

    useEffect(()=>{
        function changeColor(){
        if (window.scrollY > 600){
            setColor('black')
            setBgColor('white')
            setShadow('0 10px 150px rgba(0, 0, 0, 0.1)')
        }
        else{
            setColor('whitesmoke')
            setBgColor('transparent')
            setShadow('none')
        }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    const navbarColor = {backgroundColor: `${bgColor}`, boxShadow : `${shadow}`}
    const textColor = {color:`${color}`}

  return (
    <div style={navbarColor} className={styles.navbar}>
        <div style={textColor} className={styles.titulo}>
            ALEJANDRO SANTAMARIA
        </div>
        <ul className={menu ? styles.active : styles.hidden}>
            <Link href='/' ><li style={textColor}> Sobre mi</li></Link>
            <Link href='/experiencia' onClick={toggleMenu}><li style={textColor} >Experiencia</li></Link>
            <Link href='/contact' onClick={toggleMenu}><li style={textColor}> Contacto</li></Link>
            <Link href='/listaProgramas' onClick={toggleMenu}><li style={textColor}> Programas</li></Link>
        </ul>
            {
                menu ? <AiOutlineClose className={styles.icon} size={20} onClick={toggleMenu}/> 
                : <AiOutlineMenu className={styles.icon} size={20} onClick={toggleMenu}/>
            }
           
       
    </div>
  )
}
