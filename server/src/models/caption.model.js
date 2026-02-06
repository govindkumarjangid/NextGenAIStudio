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
    platform: {
        type: String,
        trim: true,
        default: "instagram",
    },
    style: {
        type: String,
        trim: true,
        default: "default",
    },
    output: {
        type: mongoose.Schema.Types.Mixed,
        default: {},
    },
}, {
    timestamps: true,
});
const Caption = mongoose.model("Caption", captionSchema);

export default Caption;