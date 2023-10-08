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
                <div>
                <h3>titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque reprehenderit vel! Quidem rem totam consectetur cumque, dolore voluptatibus quia, unde quos voluptas, vitae labore temporibus dolor cupiditate veritatis commodi.</p>
            </div>
            </div>
        </div>

        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='https://picsum.photos/400/300' alt="" />
            </div>
            <div className={styles.content}>
                <div>
                <h3>titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque reprehenderit vel! Quidem rem totam consectetur cumque, dolore voluptatibus quia, unde quos voluptas, vitae labore temporibus dolor cupiditate veritatis commodi.</p>
            </div>
            </div>
        </div>
        
        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='https://picsum.photos/400/300' alt="" />
            </div>
            <div className={styles.content}>
                <div>
                <h3>titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque reprehenderit vel! Quidem rem totam consectetur cumque, dolore voluptatibus quia, unde quos voluptas, vitae labore temporibus dolor cupiditate veritatis commodi.</p>
            </div>
            </div>
        </div>

        <div className={styles.caja}>
            <div className={styles.imgBox}>
                <img src='https://picsum.photos/400/300' alt="" />
            </div>
            <div className={styles.content}>
                <div>
                <h3>titulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque reprehenderit vel! Quidem rem totam consectetur cumque, dolore voluptatibus quia, unde quos voluptas, vitae labore temporibus dolor cupiditate veritatis commodi.</p>
            </div>
            </div>
        </div>

    </div>
  )
}
