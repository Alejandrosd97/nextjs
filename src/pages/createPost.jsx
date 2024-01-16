import { React, useState } from 'react'
import NavbarProgramas from '@/components/otroNav'
import styles from '@/styles/createPost.module.css'
import { useRouter } from 'next/router'




export default function CreatePost() {
    const router = useRouter()


    const [form, setForm] = useState({
        title: '', content: '', imageUrl: 'https://ik.imagekit.io/tycsvln58/raul_logo.png?updatedAt=1698695402308'
    })


    function changeForm(event) {
        setForm(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function enviarForm(e) {
        e.preventDefault()


        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }

        fetch('http://localhost:3000/api/post', config)
            .then(res => res.json())
            .then(data => {
                router.push('/blog')

            })
            .catch(e => console.log(e, e.name))
    }



    return (
        <>
            <NavbarProgramas />
            <div className={styles.postContenedor}>
                <h1>NUEVO POST</h1>
                <form onSubmit={enviarForm}>
                    <label className={styles.label} htmlFor="titulo">Título del post:</label>
                    <input
                        id='titulo'
                        required
                        name='title'
                        onChange={changeForm}
                        className='form-control'
                        type="text" />
                    <label htmlFor="contenido" className={styles.label}>Contenido:</label>
                    <textarea
                        className='form-control'
                        onChange={changeForm}
                        required
                        name='content'
                        id='contenido' />


                    <label className={styles.label} htmlFor='post-foto'>Url de la foto de cabecera:</label>
                    <input
                        className='form-control'
                        type='text'
                        value='https://ik.imagekit.io/tycsvln58/raul_logo.png?updatedAt=1698695402308'
                        id='url'
                        onChange={changeForm}
                        name='imageUrl' />

                    <div className={styles.createPostBtns}>
                        <button type='submit'>Publicar</button>
                        <button className={styles.cancelButton}>Borrar todo</button>
                    </div>
                </form>
            </div>
        </>
    )
}
