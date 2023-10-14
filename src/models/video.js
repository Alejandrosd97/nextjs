import { model, Schema, models} from 'mongoose'

const videoSchema = new Schema({
    titulo:{ 
        type: String,
        required :true
    },
    descripcion: { 
        type: String,
        required :true
    },
    fecha : Date,
    categoria : { 
        type: String,
        required :true
    },
    url : { 
        type: String,
        required :true
    },
    lista : {
        type : Schema.Types.ObjectId,
        ref: 'Lista'
    }

})

videoSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = document._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default models.Video || model('Video', videoSchema)
