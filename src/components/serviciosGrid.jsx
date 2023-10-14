import React from 'react'
import styles from './ServGrid.module.css'


export default function ServiciosGrid() {
  return (
    <div className={styles.contenedor}>
        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='https://picsum.photos/400/300' alt="" />
            </div>
            <div className={styles.content}>
                
                <h3 className={styles.centro}>Masaje terapéutico</h3>
                <p className={styles.centro}>Masajes terapéuticos personalizados que combinan la experiencia de la fisioterapia con la relajación profunda</p>
    
            </div>
        </div>

        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='/ejercicio.jpg' alt="" />
            </div>
            <div className={styles.content}>
                <div>
                <h3 className={styles.centro}>Ejercicio terapéutico</h3>
                <p className={styles.centro}>Diseño programas de ejercicios personalizados que ayudan a fortalecer, rehabilitar y mejorar la función física de mis pacientes</p>
            </div>
            </div>
        </div>
        
        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='/muletas.jpg' alt="" />
            </div>
            <div className={styles.content}>
                <div>
                <h3 className={styles.centro}>Rehabilitación</h3>
                <p className={styles.centro}>Tras una cirugía ortopédica, te ayudaré a recuperarte más rápido y de manera segura, restaurando la función y minimizando las molestias</p>
            </div>
            </div>
        </div>

        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='https://picsum.photos/400/300' alt="" />
            </div>
            <div className={styles.content}>
                <div>
                <h3 className={styles.centro}>Fibrolisis</h3>
                <p className={styles.centro}>Mediante ganchos especializados abordo problemas musculoesqueléticos y fasciales de manera efectiva</p>
            </div>
            </div>
        </div>

    </div>
  )
}
