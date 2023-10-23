// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dbConnect } from "@/utils/db"
import Lista from "@/models/lista"
import Video from "@/models/video"


dbConnect()

export default async function handler(req, res) {
  const { method, body, query : {id}} = req

    if (req.method == 'GET'){
      const lista = await Lista.findById(id)
      const videos = await Video.find({lista : lista})
      if (!lista) { res.status(404).json({'msg' : 'Lista no encontrada'})}
      res.status(200).json(lista)
    }
}

  


