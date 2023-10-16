
import { dbConnect } from "@/utils/db"
import Lista from "@/models/lista"
import Video from "@/models/video"


dbConnect()

export default async function handler(req, res) {
  const { method, query : {id}} = req

  const lista = await Lista.findById(id)
  const videos = await Video.find({lista : lista})

  return res.status(200).json(videos)
  
}

