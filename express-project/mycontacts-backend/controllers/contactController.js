//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Ottieni tutti i contatti" });
}

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: 'Ottieni il contatto' + req.params.id });
}

//@desc Post contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Tutti i dati sono obbligatori");
    }
    res.status(201).json("The request body is: " + req.body);
}

//@desc Update contact
//@route Put /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: 'Modifica il contatto' + req.params.id });
}

//@desc Delete contact
//@route delete /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: 'Elimina il contatto' + req.params.id });
}

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };