import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        personal_info: {
            image: { type: String, default: "" },
            full_name: { type: String, required: true, trim: true },
            email: { type: String, required: true, trim: true },
            phone: { type: String, default: "" },
            location: { type: String, default: "" },
            profession: { type: String, default: "" },
            linkedin: { type: String, default: "" },
            github: { type: String, default: "" },
            website: { type: String, default: "" }
        },

        professional_summary: {
            type: String,
            default: ""
        },

        experience: [
            {
                id: { type: String },
                job_title: { type: String },
                company_name: { type: String },
                location: { type: String },
                start_date: { type: String },
                end_date: { type: String },
                description: { type: String }
            }
        ],

        education: [
            {
                id: { type: String },
                degree: { type: String },
                institution: { type: String },
                location: { type: String },
                start_date: { type: String },
                end_date: { type: String },
                score: { type: String }
            }
        ],

        project: [
            {
                id: { type: String },
                title: { type: String },
                tech_stack: [{ type: String }],
                link: { type: String },
                description: { type: String }
            }
        ],

        skills: [{ type: String }],

        template: {
            type: String,
            default: "classic"
        },

        accent_color: {
            type: String,
            default: "#3B82F6"
        },

        public: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true 
  }
);

const Resume = new mongoose.model("Resume", resumeSchema);

export default Resume;