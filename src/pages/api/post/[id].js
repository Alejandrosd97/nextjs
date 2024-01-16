import { dbConnect } from "@/utils/db"
import Post from "@/models/post"
import prisma from '@/lib/prisma'



//dbConnect()

export default async function handler(req, res)  {
    const {query : {id}} = req
    console.log(id)

    const post = await prisma.publi.findUnique({
        where: {
        id: id,
        }})
    console.log(post)

        res.status(200).json(post)


    
    // Post.findById(id)
    //     .then(post => {
    //         if (post) { 
    //             res.json({ post})
    //      }
    //         else { res.status(404).end() }
    //     })
    //     .catch((error) => {
    //         console.log('este es el error', error)
    //     })
}