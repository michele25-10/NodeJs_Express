//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Ottieni tutti i contatti" });
}

const asyncHandler = require('express-async-handler');
/*Con la funzione asincrona non ci sarà la necessità di un tryCatch block, il modulo 
di nodeJs asyncHandler si occuperà in modo autonomo di rilevare l'errore e passarlo all'errorHandler*/

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Ottieni il contatto' + req.params.id });
});

//@desc Post contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Tutti i dati sono obbligatori");
    }
    res.status(201).json("The request body is: " + req.body);
});

//@desc Update contact
//@route Put /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Modifica il contatto' + req.params.id });
});

//@desc Delete contact
//@route delete /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Elimina il contatto' + req.params.id });
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };