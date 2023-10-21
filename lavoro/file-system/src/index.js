const { createDirectory } = require('../common/directory');
const { createFile } = require('../common/file');
const { createZip } = require('../common/zip');

async function app() {
    await createDirectory();
    await createFile();
    await createZip();
};

app();

