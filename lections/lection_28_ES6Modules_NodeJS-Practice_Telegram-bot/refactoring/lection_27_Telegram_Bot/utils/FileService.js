const fs = require('fs');

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, usersData) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            const parsedUsersData = JSON.parse(usersData);
    
            resolve(parsedUsersData);
        });
    });
}
const writeFile = (path, rawData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(rawData, null, '\t'), err => {
            if (err) {
                console.error(err);
                reject(err);
            }
            resolve();
        });
    });
}


module.exports = {
    readFile,
    writeFile
};