import React from 'react'
import styles from './ServGrid.module.css'


export default function ServiciosGrid({data}) {
  return (
    <div className={styles.contenedor}>
        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='/masaje4.jpg' alt="fotografía de una persona recibiendo un masaje" />
            </div>
            <div className={styles.content}>

                <h3 className={styles.centro}>
                    {/* Masaje terapéutico */}
                     {data.servicios.masaje}
                </h3>
                <p className={styles.centro}>
                    {data.servicios.masajeExplicacion}

                    {/* Masajes terapéuticos personalizados que combinan la experiencia de la fisioterapia con la relajación profunda */}
                    </p>

            </div>
        </div>

        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='/ejercicio.jpg' alt="Fotografía de unas mancuernas en el suelo" />
            </div>
            <div className={styles.content}>
                <div>
                <h3 className={styles.centro}>
                    {/* Ejercicio terapéutico */}
                    {data.servicios.ejercicio}

                    </h3>
                <p className={styles.centro}>
                    {data.servicios.ejercicioExplicacion}

                    {/* Diseño programas de ejercicios personalizados que ayudan a fortalecer, rehabilitar y mejorar la función física de mis pacientes */}
                    </p>
            </div>
            </div>
        </div>

        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='/muletas.jpg' alt="Fotografía de unas muletas" />
            </div>
            <div className={styles.content}>
                <div>
                <h3 className={styles.centro}>
                    {/* Rehabilitación */}
                    {data.servicios.rehabilitacion}

                    </h3>
                <p className={styles.centro}>
                    {data.servicios.rehabilitacionExplicacion}

                    {/* Tras una cirugía ortopédica, te ayudaré a recuperarte más rápido y de manera segura, restaurando la función y minimizando las molestias */}
                    </p>
            </div>
            </div>
        </div>

        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='/osteopatia.jpg' alt="" />
            </div>
            <div className={styles.content}>
                <div>
                <h3 className={styles.centro}>
                    {/* Fibrolisis */}
                    {data.servicios.fibrolisis}

                    </h3>
                <p className={styles.centro}>
                    {data.servicios.fibrolisisExplicacion}

                    {/* Mediante ganchos especializados abordo problemas musculoesqueléticos y fasciales de manera efectiva */}
                    </p>
            </div>
            </div>
        </div>

    </div>
  )
}
