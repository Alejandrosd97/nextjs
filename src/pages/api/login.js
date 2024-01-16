// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dbConnect } from "@/utils/db"
import jwt from 'jsonwebtoken'
import {serialize} from 'cookie'

dbConnect()

export default async function handler(req, res) {
    const token = jwt.sign({
        exp : Math.floor(Date.now()/1000 * 60 * 60 * 24 * 30),
        nombre : 'ale',
        role : 'admin'
    }, '123')

    const serialized = serialize('myToken', token, {
        httpOnly : true,
        sameSite : 'strict',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path : '/'
    })

    res.setHeader('Set-Cookie', serialized)
    
    res.status(200).json('success')
    
}

  


