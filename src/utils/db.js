import { connect, connection } from 'mongoose'

import 'dotenv/config'

const conn = {
    isConnected : false
}

export async function dbConnect (){
    if (conn.isConnected) {
        return
    }
    const db = await connect(process.env.MONGODB_KEY)
}

connection.on('connected', ()=>{
    console.log('conectado')
})

connection.on('error', (e)=>{
    console.log(e)
})