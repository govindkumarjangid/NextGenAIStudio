import moogoose from 'mongoose';

const ThumbnailSchema = new moogoose.Schema({
    userId: { type: moogoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, trim: true },
    style: {
        type: String, required: true,
        enum: ["Bold & Graphic", "Tech/Futuristic", "Minimalist", "Photorealistic", "Illustrated"]
    },
    aspect_ratio: { type: String, enum: ["16:9", "1:1", "9:16"], default: "16:9" },
    color_scheme: {
        type: String,
        enum: ["vibrant", "sunset", "forest", "neon", "purple", "monochrome", "ocean", "pastel"],
        default: "vibrant"
    },
    text_overlay: { type: Boolean, default: false },
    image_url: { type: String, default: '', },
    prompt_used: { type: String, },
    user_prompt: { type: String, },
    isGenrating: {type: Boolean, default: true, }
}, {
    timestamps: true,
});

const Thumbnail = moogoose.model('Thumbnail', ThumbnailSchema);

export default Thumbnail;