const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000; //prendo la porta dal file .env

app.get('/api/contacts', (req, res) => {
    res.send("Ottieni tutti i contatti");
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
}); 