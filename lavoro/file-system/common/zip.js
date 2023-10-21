const JSZip = require('jszip');
const fs = require('fs');
const moment = require('moment');
const { deleteFile } = require('./file');

const createZip = async () => {
    const zip = new JSZip();

    try {
        const zipName = moment().format('YYYYDDMMHHmmss') + '.zip';

        fs.readdir('./data', (err, files) => {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            files.forEach(function (file) {
                const pathFile = './data/' + file;
                console.log(pathFile);
                const fileContent = fs.readFileSync(pathFile, { encoding: 'utf8', flag: 'r' });
                console.log(fileContent);
                zip.file(file, fileContent);
            });
            zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
                .pipe(fs.createWriteStream(zipName))
                .on('finish', function () {
                    deleteFile('./data');
                });
        });

    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    createZip
}