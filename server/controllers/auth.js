import User from "../models/Users.js";
import bcrypt from "bcrypt"


export const registerUsers = async (req, res) => {

    try {

        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({

            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,

        });

        //save user and response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {

        console.log(error);
        res.status(500).send(error.message)
    }
}

export const login = async (req, res) => {

    try {

        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send("user not found")

        const password = req.body.password;
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).send("wrong password");

        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json(error)
    }

}


