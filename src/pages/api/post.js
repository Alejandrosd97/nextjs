import prisma from '@/lib/prisma'




export default async function handler(req, res) {
    console.log(req.body)
    if (req.method === 'POST'){
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

    else{
        const allPubli = await prisma.publi.findMany()
        res.status(200).json(allPubli)
    }
    

}
