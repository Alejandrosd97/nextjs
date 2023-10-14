// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dbConnect } from "@/utils/db"
import Video from "@/models/video"

dbConnect()

export default async function handler(req, res) {

  switch (req.method) {
    case 'GET':
      const videos = await Video.find()
      res.status(200).json(videos)
      
      break;
  
    default:
      return res.status(400).json({msg : 'metodo no valido'})
      break;
  }

  
}
