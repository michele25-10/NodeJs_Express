//Funzione che crea dei file randomici con al loro interno stringhe randomiche

const fs = require('fs');
const { dirname, join } = require('path');
const moment = require('moment');

const createFile = async () => {
    for (let i = 0; i < 10; i++) {
        const fileName = moment().format('YYYYMMDDHHmmss') + i.toString();
        const path = './data/' + fileName + ".txt";
        data = await generateRandomString(10000);
        fs.writeFile(path, data, { flag: 'wx' }, function (err) {
            if (err) throw err;
            console.log("It's saved!");
        });
    }
};

async function generateRandomString(iLen) {
    var sRnd = '';
    var sChrs = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    for (var i = 0; i < iLen; i++) {
        var randomPoz = Math.floor(Math.random() * sChrs.length);
        sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    }
    return sRnd;
}

module.exports = {
    createFile
};