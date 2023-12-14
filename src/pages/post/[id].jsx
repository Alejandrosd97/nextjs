import {React, useState, useEffect, useContext } from 'react'

import NavbarProgramas from '@/components/navbarProgramas'




export default function BlogDetail(props) {

  
    
  return (
    <>

  <NavbarProgramas/>

    {/* post anterior */}
    { prevNextPost[0] && <div className={styles.postPrevio}
      onMouseEnter={()=>setPreviousPostLink(true)}
      onMouseLeave={()=>setPreviousPostLink(false)}>
      <span className='link-previo'>POST PREVIO</span> 
      <div className={previousPostLink ? "foto-previo" : "foto-previo hidden" }>
        <img src='https://pagina-raul.vercel.app/api/post' alt="foto" />
        <div className='tarjeta-previo'>
          <h3 className='titulo-previo'>{prevNextPost[0]? prevNextPost[0].title : ''}</h3>
          <small className='small-lateral'>{ prevNextPost[0] ? prevNextPost[0].date.split('T')[0] : ''}</small>
          <a href={`https://raulfisio-frontend-definitivo.vercel.app/blog/post/${prevNextPost[0].id}`}><button>Leer publicación</button></a>
        </div>
      </div>
    </div>}


    {/* post siguiente */}

     {prevNextPost[1] && <div className='post-siguiente'
      onMouseEnter={()=>setNextPostLink(true)}
      onMouseLeave={()=>setNextPostLink(false)}>
      <div className={nextPostLink ? "foto-siguiente" : "foto-siguiente hidden" }>
        <img src='https://picsum.photos/400/300' alt="foto" />
        <div className='tarjeta-siguiente'>
          <h3 className='titulo-siguiente'>{prevNextPost[1].title}</h3>
          <small className='small-lateral'>{prevNextPost[1].date.split('T')[0]}</small>
          <a href='#'><button>Leer publicación</button></a>
        </div>
      </div>
      <span className='link-siguiente'>POST SIGUIENTE</span> 
    </div>}




    <div className='contenedor-detalle mt-3'>
        { post.category && <span className='span-category'>{post.category}</span>}
        { post.title && <h1 className='titulo-detalle mt-0'>{post.title}</h1>}
        <img className='foto-principal mb-5' src={post.image ? post.image : fotoIndia2} alt="" />

        <div className="links-mobile">
        {prevNextPost[0] && <a href={`https://raulfisio-frontend-definitivo.vercel.app/blog/post/${prevNextPost[0].id}`}><button>{prevNextPost[0].title}</button></a>}  
        {prevNextPost[1] && <a href={`https://raulfisio-frontend-definitivo.vercel.app/blog/post/${prevNextPost[1].id}`}><button>{prevNextPost[1].title}</button></a>}  
        </div>

        
        <p className='post-contenido'>{reactStringReplace(post.content, '\n', (match, i) => (
            <br/>))}
            </p>
        
        <div className='comentarios'>

        </div>
        
    </div>
    </>
  )

  }
