import express from "express"
import mongoose from "mongoose";

export const getUser = async (req: express.Request, res: express.Response) => {
    // 1. Create an interface representing a document in MongoDB.
    interface IUser {
        name: string;
        email: string;
        avatar?: string;
    }

    // 2. Create a Schema corresponding to the document interface.
    const userSchema = new mongoose.Schema<IUser>({
        name: { type: String, required: true },
        email: { type: String, required: true },
        avatar: String
    });

    // 3. Create a Model.
    const User = mongoose.model<IUser>('User', userSchema);

    const user = new User({
        name: 'Bill',
        email: 'bill@initech.com',
        avatar: 'https://i.imgur.com/dM7Thhn.png'
    });
    await user.save();
    res.send("Hello World !!")
};