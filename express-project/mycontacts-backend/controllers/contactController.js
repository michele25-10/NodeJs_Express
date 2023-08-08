const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");
/*Con la funzione asincrona non ci sarà la necessità di un tryCatch block, il modulo 
di nodeJs asyncHandler si occuperà in modo autonomo di rilevare l'errore e passarlo all'errorHandler*/


//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    //req.user --> è l'insieme dei dati presenti nel token dell'utente inseriti dentro lo user della richiesta
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findOne({ _id: req.params.id, user_id: req.user.id }).exec();
    if (!contact) {
        res.status(404);
        throw new Error('Contatto non trovato');
    } else {
        res.status(200).json(contact);
    }
});

//@desc Post contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Tutti i dati sono obbligatori");
    }
    const contact = await Contact.create({ name, email, phone, user_id: req.user.id });
    res.status(201).json(contact);
});

//@desc Update contact
//@route Put /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findOne({ _id: req.params.id }).exec();
    if (!contact) {
        res.status(404);
        throw new Error('Contatto non trovato');
    }

    if (contact.user_id.ToString() !== req.user.id) {
        res.status(403);
        throw new Error('Utente non è autorizzato ad accedere a questi dati');
    }

    const updateContact = await Contact.findOneAndUpdate(
        { _id: req.params.id },
        {
            user_id: req.user.id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        },
        { new: true }
    ).exec();
    res.status(200).json(updateContact);
});

//@desc Delete contact
//@route delete /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById({ _id: req.params.id }).exec();
    if (!contact) {
        res.status(404);
        throw new Error('Contatto non trovato');
    }

    if (contact.user_id.ToString() !== req.user.id) {
        res.status(403);
        throw new Error('Utente non è autorizzato ad accedere a questi dati');
    }

    await Contact.remove().exec();
    res.status(200).json(contact);
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };