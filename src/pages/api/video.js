// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dbConnect } from "@/utils/db"
import Lista from "@/models/lista"
import Video from "@/models/video"

dbConnect()

export default async function handler(req, res) {
  const { method, body, query} = req
  

  switch (req.method) {
    case 'GET':
      const videos = await Video.find()
     
      res.status(200).json(videos)
      
      break;

    case 'POST':
      const {titulo, descripcion, url, lista} = body

      const lis = await Lista.findOne({titulo: lista}).exec()
      console.log(lis)

      if (!lis){
        return res.status(400).json({msg : 'La lista no existe'})
      }

      const newVideo = new Video({
        titulo: titulo,
        descripcion: descripcion,
        url: url,
        lista: lis
    })


       // console.log(lis.videos)
        if (lis.videos){
            lis.videos = lis.videos.concat(newVideo._id)
            await lis.save()
        }
        else {
            newVideo.lis = lis._id
            await newVideo.save()
        }
       
        //console.log(lis.videos)


    const newV = await newVideo.save()
    return res.status(201).json(newV)

      
  
    default:
      return res.status(400).json({msg : 'metodo no valido'})
      break;
  }

  
}

