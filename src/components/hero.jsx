import {React, useEffect, useState} from 'react'
import styles from './Hero.module.css'
import {motion} from 'framer-motion'

export default function Hero(props) {

      const [visibility, setVisibility]= useState('#efefef')
      const [button, setButton] = useState('inline')

  useEffect(()=>{
        function changeVisibility(){
        if (window.scrollY > 200){
            setVisibility('transparent')
        }
        else if(window.scrollY > 250){
            setVisibility('transparent')
        }
        else{ 
            setVisibility('#efefef')
        }
        }

        function changeButton(){
        if (window.scrollY > 250){
            setButton('none')
        }
        else{ 
            setButton('inline')
        }
        } 
        window.addEventListener('scroll', changeVisibility)
        window.addEventListener('scroll', changeButton)

    }, [])

  return (
    <div className={styles.hero}>
       <motion.div animate={{opacity : 1}} transition={{ duration : 2}} style={{color: visibility, transition:'0.1s'}} className={styles.main}>
            <h1>{props.titulo}</h1>
            <p>{props.subtitulo}</p>
            <a href={props.enlace}><button style={{display: button, transition:'0.3s'}} className={styles.mainButton}>{props.boton}</button></a>
            
        </motion.div>
    </div> 
  ) 
}
