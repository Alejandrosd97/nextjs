import { connect, connection } from 'mongoose'

const connectionString = 'mongodb+srv://Alejandro:lisboaportugal@api-tutorial.gcrbz.mongodb.net/nextjs?retryWrites=true&w=majority'


const conn = {
    isConnected : false
}

export async function dbConnect (){
    if (conn.isConnected) {
        return
    }
    const db = await connect(connectionString)
    console.log(db.connections[0].readyState)
    console.log(db.connection.db.name)
}

connection.on('connected', ()=>{
    console.log('conectado')
})

connection.on('error', (e)=>{
    console.log(e)
})