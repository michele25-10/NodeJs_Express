const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Aggiungi il nome del contatto"],
    },
    email: {
        type: String,
        required: [true, "Aggiungi l'email del contatto"],
    },
    phone: {
        type: String,
        required: [true, "Aggiungi il telefono del contatto"],
    }

}, { timestamps: true }
);
module.exports = mongoose.model("contact", contactSchema)

