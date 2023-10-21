const fs = require('fs');
const createDirectory = async () => {
    var dir = './data';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

module.exports = {
    createDirectory
}; 