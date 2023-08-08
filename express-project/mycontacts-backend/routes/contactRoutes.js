const express = require('express');
const router = express.Router();
const { getContacts, createContact, updateContact, getContact, deleteContact } = require("../controllers/contactController");
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);  //tutte le function di contact sono private
router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;