import prisma from '@/lib/prisma'




export default async function handler(req, res) {
    const {body} = req
    try{
    const publi = await prisma.publi.create({
        data : body
    })
    res.status(201).json(publi)
  }
  catch(e){
    console.log(e)
  }

}

  
