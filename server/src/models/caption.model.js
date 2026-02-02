import mongoose from "mongoose";

const captionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        trim: true,
        default: "",
    },
}, {
    timestamps: true,
});
const Caption = mongoose.model("Caption", captionSchema);

export default Caption;