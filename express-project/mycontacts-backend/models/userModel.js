const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Inserisci username"],
    },
    email: {
        type: String,
        required: [true, "Inserisci l'email"],
        unique: [true, "email già esistente"],
    },
    password: {
        type: String,
        required: [true, "Inserisci la password"],
    }

}, { timestamps: true }
);
module.exports = mongoose.model("user", userSchema)

