import {React} from 'react'
import styles from './Programa.module.css'
import AcordeonItem from '@/components/acordeonItem'


// const buscar = ()=>{
//   return fetch('http://localhost:3000/api/video')
//   .then((res)=>res.json())
  
// }

 
export default function Programa(props) {
 

  //console.log(vids)

  const {data} = props
  // const videos = videosOfProgram.map((v, index)=>{
  //   <AcordeonItem key={v.id} number={index} data={v}/>
  // })

  //console.log(videos)
  return (
    <div className={styles.acordeon}>
        <h1>{data.titulo}</h1>
        <p className={styles.descripcionGeneral}>{data.descripcion}</p>

      <ul>
            
      </ul>
</div>
  )
}


