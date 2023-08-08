const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
//@desc registrare un utente
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Tutti i campi sono obbligatori");
    }
    //controllo che la mail non sia già all'interno del database
    const userAvailable = await User.findOne({ email: email }).exec();
    if (userAvailable) {
        res.status(400);
        throw new Error("Utente già esistente");
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    //creo l'utente
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
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Tutti i campi sono obbligatori");
    }

    const user = await User.findOne({ email: email }).exec();
    if (user && (bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            /*Payload incorporato all'interno del token */
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" });
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email o password errate!");
    }
});

//@desc info utente corrente
//@route POST /api/users/current
//@access public
const currentUser = asyncHandler(async (req, res) => {

});

module.exports = { registerUser, loginUser, currentUser };