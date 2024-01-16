import {React, useEffect, useState} from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import data from '../assets/dataAleman.js'



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
        <div className={styles.titulo}>
            <Link href='/' onClick={toggleMenu}>            
                <img src="/logoNegro-simple.png" alt="" />
            </Link>

        </div>
        <ul className={menu ? styles.active : styles.hidden}>
            <Link href='/' onClick={toggleMenu}><li style={textColor}>{data.navbar.sobreMi}</li></Link>
            <Link href='/servicios' onClick={toggleMenu}><li style={textColor}>{data.navbar.servicios}</li></Link>
            <Link href='/contact' onClick={toggleMenu}><li style={textColor}>{data.navbar.contacto}</li></Link>
            {/* <Link href='/ejercicio' onClick={toggleMenu}><li style={textColor}> Ejercicio</li></Link> */}
        </ul>
            {
                menu ? <AiOutlineClose className={styles.icon} style={textColor} size={20} onClick={toggleMenu}/> 
                : <AiOutlineMenu className={styles.icon} style={textColor} size={20} onClick={toggleMenu}/>
            }
           
       
    </div>
  )
}
