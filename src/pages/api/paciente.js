import prisma from '@/lib/prisma'




export default async function handler(req, res) {
    
    if (req.method === 'POST'){
        const { nombre, apellido, antecedentes, diagnostico, primeraVisita} = (req.body)
        const edadInt = parseInt(req.body.edad)
        try{
            const paciente = await prisma.paciente.create({
                data : {
                    nombre,
                    apellido,
                    antecedentes,
                    diagnostico,
                    primeraVisita,
                    edad : edadInt
                }
            })

            const sesion = await prisma.sesion.create({
                data : {
                    numero: 1,
                    pacienteId : paciente.id,
                    fecha : paciente.primeraVisita,
                    comentarios : paciente.diagnostico
                }
            })
        
        res.status(201).json({paciente, sesion})
    }
    catch(e){
        console.log(e)
  }
    }

  
        const allPacientes = await prisma.paciente.findMany()
        res.status(200).json(allPacientes)
    
    

}
