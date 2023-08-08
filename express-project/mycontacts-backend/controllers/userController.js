const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@desc registrare un utente
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Tutti i campi sono obbligatori");
    }

    const userAvailable = await User.findOne({ email: email }).exec();
    if (userAvailable) {
        res.status(400);
        throw new Error("Utente già esistente");
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashedPassword });
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(404);
        throw new Error("Registrazione fallita");
    }
});

//@desc loggare un utente
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {

});

//@desc info utente corrente
//@route POST /api/users/current
//@access public
const currentUser = asyncHandler(async (req, res) => {

});

module.exports = { registerUser, loginUser, currentUser };