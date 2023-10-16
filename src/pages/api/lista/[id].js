// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dbConnect } from "@/utils/db"
import Lista from "@/models/lista"
import Video from "@/models/video"


dbConnect()

export default async function handler(req, res) {
  const { method, body, query : {id}} = req
  //console.log(id)

  switch (req.method) {
    case 'GET':
      const lista = await Lista.findById(id)
      const videos = await Video.find({lista : lista})
      //console.log(lista)
      //console.log('videos', videos)
      if (!lista) { res.status(404).json({'msg' : 'Lista no encontrada'})}
      res.status(200).json(lista)
      break;

    case 'POST':
      const {titulo, descripcion, categoria, url} = body
  
    default:
      return res.status(400).json({msg : 'metodo no valido'})
      break;
  }

  
}

