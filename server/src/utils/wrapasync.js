const wrapasync = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (error) {
            console.log("Error : ", error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
}

export default wrapasync;