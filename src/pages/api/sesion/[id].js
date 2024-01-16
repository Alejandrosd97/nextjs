import prisma from '@/lib/prisma'


export default async function handler(req, res)  {
    const {query : {id}} = req
    const {fecha, pacienteId, numero, comentarios, completada} = req.body

    if (req.method === 'POST'){
        const sesion = await prisma.sesion.create({
            data : {
                fecha,
                numero,
                pacienteId : id,
            }
        })

    console.log(sesion)
    res.status(200).json(sesion)
    }

    if(req.method === 'PUT'){
        console.log('dentro')
        const updatedSesion = await prisma.sesion.update({
        where: {
            id: id,
        },
        data: {
            comentarios,
            fecha,
            numero,
            completada
        }, 
        })
        console.log(updatedSesion)

        res.status(200).json(updatedSesion)
    }
    

    if(req.method === 'DELETE'){
        const deletedSesion = await prisma.sesion.delete({
        where: {
            id: id,
        }
        })

        res.status(200).json(deletedSesion)
    }
}