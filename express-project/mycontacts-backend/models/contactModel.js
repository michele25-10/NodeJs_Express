const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
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

