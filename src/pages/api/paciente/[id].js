import { dbConnect } from "@/utils/db"
import Post from "@/models/post"
import prisma from '@/lib/prisma'
import * as jose from 'jose'




//dbConnect()

export default async function handler(req, res) {
    const { query: { id } } = req

    // const publicKey = await jose.importJWK(
    //     {
    //         kty: 'RSA',
    //         e: 'AQAB',
    //         n: '13oBZRhCiwFJLcPg99LkZZ9mdhSiTKAQZYq32k_ti5SBBjerkh-WzOMAO664r_qyLkqHUSp3u5SbXyseZEpN3XPWGKSxjsy-1JyEFTdLSYe6f9gfrmxkUF_7DTpq0gn6rntP05g2-wFW50YO7mosfdslfrTJYWHFhJALabAeYirYD7-9kqq9ebfFMF4sRRELbv9oi36As6Q9B3Qb5_C1rAzqfao_PCsf9EPsTZsVVVkA5qoIAr47lo1ipfiBPxUCCNSdvkmDTYgvvRm6ZoMjFbvOtgyts55fXKdMWv7I9HMD5HwE9uW839PWA514qhbcIsXEYSFMPMV6fnlsiZvQQ',
    //     }, 'PS256',
    // )

//        const { publicKey, privateKey } = await jose.generateKeyPair('PS256')
//        const pkcs8Pem = await jose.exportPKCS8(privateKey)

// console.log(pkcs8Pem)
//     const jwe = await new jose.CompactEncrypt(
//         new TextEncoder().encode('Its a dangerous business, Frodo, going out your door.Its a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your doorIts a dangerous business, Frodo, going out your door'),
//     )
//         .setProtectedHeader({ alg: 'RSA-OAEP-256', enc: 'A256GCM' })
//         .encrypt(publicKey)


//     const { plaintext, protectedHeader } = await jose.compactDecrypt(jwe, privateKey)
    //console.log(new TextDecoder().decode(plaintext))

    const paciente = await prisma.paciente.findUnique({
        where: {
            id: id,
        }
    })

    const sesiones = await prisma.sesion.findMany({
        where: {
            pacienteId: paciente.id
        }
    })

    res.status(200).json({
        paciente,
        sesiones
    })

}