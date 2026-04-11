import Resume from "../models/Resume.model.js";
import wrapasync from "../utils/wrapasync.js";

export const createResume = async (req, res) => {
    try {
        const {
            _id,
            title,
            personal_info,
            professional_summary,
            experience,
            education,
            project,
            skills,
            template,
            accent_color,
            public: isPublic
        } = req.body;

        // If _id is provided, update existing resume
        if (_id) {
            const updatedResume = await Resume.findByIdAndUpdate(
                _id,
                {
                    title,
                    personal_info,
                    professional_summary,
                    experience,
                    education,
                    project,
                    skills,
                    template,
                    accent_color,
                    public: isPublic
                },
                { new: true, runValidators: true }
            );

            if (!updatedResume) {
                return res.status(404).json({ success: false, message: "Resume not found" });
            }

            return res.status(200).json({
                success: true,
                message: "Resume updated successfully",
                resume: updatedResume
            });
        }

        // Create new resume
        const newResume = new Resume({
            userId: req.user._id,
            title: title || "Untitled Resume",
            personal_info,
            professional_summary,
            experience,
            education,
            project,
            skills,
            template,
            accent_color,
            public: isPublic
        });

        const savedResume = await newResume.save();

        res.status(201).json({
            success: true,
            message: "Resume created successfully",
            resume: savedResume
        });

    } catch (error) {
        console.error("Error creating resume:", error);
        res.status(500).json({ success: false, message: "Failed to create resume", error: error.message });
    }
}


export const getResumes = wrapasync(async (req, res) => {
    const userId = req.user._id;
    if (!userId) return res.status(400).json({ success: false, message: "User ID is required" });
    const resumes = await Resume.find({ userId });
    console.log(resumes)
    res.status(200).json({ success: true, resumes });
})