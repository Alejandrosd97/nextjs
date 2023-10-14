import { model, Schema, models} from 'mongoose'

const listaSchema = new Schema({
    titulo:{ 
        type: String,
        required :true
    },
    descripcion: { 
        type: String,
        required :true
    },
    fecha: Date,
    categoria : { 
        type: String,
        required :true
    },
    url : { 
        type: String,
        required :true
    },
    videos : [{
        type : Schema.Types.ObjectId,
        ref: 'Video'
    }]
})

listaSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = document._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default models.Lista || model('Lista', listaSchema)






