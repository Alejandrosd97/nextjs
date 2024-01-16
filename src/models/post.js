import { model, Schema, models} from 'mongoose'



const postSchema = new Schema({
    title: { 
        type: String,
        required :true
    },
    content: { 
        type: String,
        required :true
    },
    date: Date,
    category : { 
        type: String,
        required :true
    },
    image : String

})

postSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = document._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default models.Post || model('Post', postSchema)

