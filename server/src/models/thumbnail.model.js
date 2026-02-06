import moogoose from 'mongoose';

const ThumbnailSchema = new moogoose.Schema({
    userId:{
        type: moogoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title:{
     type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        trim: true,
    },
    style:{
        type: String,
        required: true,
        enum:["Bold & Graphic","Tech/Futuristic","Minimalist","Photorealistic","Illustrated"]
    },
}, {
    timestamps: true,
});

const Thumbnail = moogoose.model('Thumbnail', ThumbnailSchema);

export default Thumbnail;