import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Please provide an email'],
    },
    username:{
        type: String,
        unique: [true, 'Username already exists'],
        required: [true, 'Please provide a username'],
        match: [/^[a-zA-Z0-9]+$/, 'Please provide a valid username'],
    },
    image:{
        type: String,
    },
    });

const User = models.User || model('User', UserSchema);  // if models.User exists, use it; otherwise, create a new model called 'User' using the UserSchema

export default User;