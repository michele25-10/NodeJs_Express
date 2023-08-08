const asyncHandler = require("express-async-handler");

//@desc registrare un utente
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {

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