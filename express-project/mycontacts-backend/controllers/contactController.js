const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

/*Con la funzione asincrona non ci sarà la necessità di un tryCatch block, il modulo 
di nodeJs asyncHandler si occuperà in modo autonomo di rilevare l'errore e passarlo all'errorHandler*/

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error('Contatto non trovato');
    } else {
        res.status(200).json(contact);
    }
});

//@desc Post contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Tutti i dati sono obbligatori");
    }
    const contact = await Contact.create({ name, email, phone });
    res.status(201).json(contact);
});

//@desc Update contact
//@route Put /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contatto non trovato');
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updateContact);
});

//@desc Delete contact
//@route delete /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contatto non trovato');
    }
    await Contact.remove();
    res.status(200).json(contact);
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };