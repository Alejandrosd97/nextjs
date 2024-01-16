//import { dbConnect } from "@/utils/db"
import prisma from '@/lib/prisma'



//dbConnect()

export default async function handler(req, res)  {
    const {query : {id}} = req
    //console.log(id)

    const post = await prisma.publi.findUnique({
        where: {
        id: id,
        }})
    console.log(post)

        res.status(200).json(post)

}