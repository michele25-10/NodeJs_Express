const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000; //prendo la porta dal file .env

//Aggiunto il middleware
app.use("/api/contacts", require("./routes/contactRoutes"))

app.listen(port, () => {
    console.log('Server running on port ' + port);
}); 