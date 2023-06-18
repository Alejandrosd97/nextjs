import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Slider.module.css'
import {FaArrowRight} from 'react-icons/fa'
 

export default function slider({fotos}) {

    const [current, setCurrent] = useState(0)

    function nextFoto(){
        setCurrent(current === fotos.length - 1 ? 0 : current +1 )
    }

    function previousFoto(){
        setCurrent(current === 0 ? fotos.length - 1 : current -1)
    }


    const sliderFotos = fotos.map((foto, index)=>{
        return (
            <div key={index} className={index === current ? styles.current : styles.hidden}>
                <FaArrowRight onClick={previousFoto} size={60} className={styles.arrowLeft} style={{transform:'rotate(180deg)'}}/>
                {
                index === current && 
                <Image fill={true} className='foto' src={foto} alt="" />
                }
                <FaArrowRight onClick={nextFoto} className={styles.arrowRight} size={60}/>

            </div>
        )
    })
  return (
    <div className='carrusel'>
        <h2 className={styles.titulo}>Gallery</h2>
        {sliderFotos}
    </div>
    
  )
}
