import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../configs/jwttoken.js";


export const registerUser = async (req, res) => {
    try {
        const{username, email, password} = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

         if(!username || !email || !password)
            return res.status(400).json({ message: "All fields are required" });

        if(!/\S+@\S+\.\S+/.test(email))
            return res.status(400).json({ message: "Invalid email format" });

        if(password.length < 6)
            return res.status(400).json({ message: "Password must be at least 6 characters long" });


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", token: generateToken(newUser) });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
        console.log(error);
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }
        res.status(200).json({ success: true, message: "Login successful", user});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
        console.log(error);
    }
}

export const handlecredit = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: "Credits fetched successfully", credits: user.credits });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
        console.log(error);
    }
}

export const deductCredits = async (userId, amount = 2) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        if (user.credits < amount) {
            throw new Error("Insufficient credits");
        }
        user.credits -= amount;
        await user.save();
        return user.credits;
    } catch (error) {
        throw error;
    }
}