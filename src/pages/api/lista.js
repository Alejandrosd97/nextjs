// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dbConnect } from "@/utils/db"
import Lista from "@/models/lista"

dbConnect()

export default async function handler(req, res) {
  const { method, body, query : {id}} = req

  switch (req.method) {
    case 'GET':
      const lista = await Lista.find()
      if (!lista) { res.status(404).json({'msg' : 'Lista no encontrada'})}
      res.status(200).json(lista)
      
      break;
  
    default:
      return res.status(400).json({msg : 'metodo no valido'})
      break;
  }

  
}
