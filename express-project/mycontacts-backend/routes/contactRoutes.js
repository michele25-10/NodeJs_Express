const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Ottieni tutti i contatti" });
});

router.route('/').post((req, res) => {
    res.status(200).json({ message: "Crea un contatto" });
});

router.route('/:id').put((req, res) => {
    res.status(200).json({ message: "Modifica il contatto" });
});

router.route('/:id').delete((req, res) => {
    res.status(200).json({ message: "Elimina il contatto" });
});

module.exports = router;