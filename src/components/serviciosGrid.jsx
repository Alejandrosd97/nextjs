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
                <p className={styles.centro}>masajes terapéuticos personalizados que combinan la experiencia de la fisioterapia con la relajación profunda</p>
    
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
                <p className={styles.centro}>Exercitationem atque reprehenderit vel! Quidem rem totam consectetur cumqus, vitae labore temporibus dolor cupiditate veritatis commodi.</p>
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
                <p className={styles.centro}>es una técnica especializada que utilizo para abordar problemas musculoesqueléticos y fasciales de manera efectiva</p>
            </div>
            </div>
        </div>

    </div>
  )
}
