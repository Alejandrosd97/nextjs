import {React} from 'react'

import NavbarProgramas from '@/components/otroNav'
import LinkAnterior from '@/components/linkAnterior'
import LinkPosterior from '@/components/linkPosterior'

import reactStringReplace from 'react-string-replace'
import styles from '@/styles/postDetail.module.css'




export default function BlogDetail({post, todos}) {



    //console.log(post)
    //console.log(todos)
//   const [previousPostLink, setPreviousPostLink]= useState(false)
//   const [nextPostLink, setNextPostLink]= useState(false)
//   const [prevNextPost, setPrevNextPost] = useState([])

  

        
       let prevNextPost

        const postActual = todos.map(p => p.id).indexOf(post.id)
        const prev = postActual -1
        const next = postActual +1
        //console.log(postActual)
        //console.log(todos.length)

        if (postActual > 0 && postActual < todos.length -1){
          prevNextPost = [todos[prev], todos[next]]
          console.log('aqui')
        }
        else if (postActual >= todos.length -1){
          prevNextPost = [todos[prev], null]
        }
        else{
          prevNextPost = [null, todos[next]]
        }

        //console.log(prevNextPost)

  return (
    <>

  <NavbarProgramas/>
  <LinkAnterior prevNextPost={prevNextPost}/>
<LinkPosterior prevNextPost={prevNextPost}/>


    <div className={styles.contenedorDetalle}>
        <h1 className={styles.tituloDetalle}>{post.title}</h1>
        <img className={styles.fotoPrincipal} src='https://picsum.photos/seed/picsum/200/300' alt="" />

        
        <p className={styles.postContenido}>{reactStringReplace(post.content, '\n', (match, i) => (
            <br/>))}
            </p>
        
    </div>
    </>
  )
}




export const getServerSideProps = async (ctx) =>{
  const res = await fetch(`http://localhost:3000/api/post/${ctx.query.id}`)
  const post = await res.json()


  const respuesta = await fetch(`http://localhost:3000/api/post`)
  const todos = await respuesta.json()
    console.log(todos)

  return {
    props :{
      post,
      todos
    }
  }
}