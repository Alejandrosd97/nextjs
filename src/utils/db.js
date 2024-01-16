import { connect, connection } from 'mongoose'

import 'dotenv/config'

const conn = {
    isConnected : false
}

export async function dbConnect (){
    // if (conn.isConnected) {
    //     return
    // }
    // const db = await connect(process.env.MONGODB_KEY)

    console.log('recuerda cambiar db conection a mongodb')
}

connection.on('connected', ()=>{
    console.log('conectado')
})

connection.on('error', (e)=>{
    console.log(e)
})