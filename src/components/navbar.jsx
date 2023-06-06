import {React, useEffect, useState} from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    const [color, setColor]= useState('white')
    const [bgColor, setBgColor]= useState('transparent')

    useEffect(()=>{
        function changeColor(){
        if (window.scrollY > 600){
            setColor('black')
            setBgColor('white')
        }
        else{
             setColor('whitesmoke')
            setBgColor('transparent')
        }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    const navbarColor = {color:`${color}`, backgroundColor: `${bgColor}`}

  return (
    <div style={navbarColor} className={styles.navbar}>
        <div className={styles.titulo}>
            TITULO
        </div>
        <ul>
            <Link href='/'><li style={navbarColor}> About us</li></Link>
            <Link href='/activities'><li style={navbarColor}> Activities</li></Link>
            <Link href='/contact'><li style={navbarColor}> Contact</li></Link>
            <Link href='/programms'><li style={navbarColor}> Programms</li></Link>

            
        </ul>
    </div>
  )
}
