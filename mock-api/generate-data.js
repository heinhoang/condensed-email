const jsf = require('json-schema-faker');
const fs = require('fs');
const path = require('path');
const dataSchema = require('./data');

const jsonData = jsf(dataSchema);
delete jsonData.id;
var json = JSON.stringify(jsonData);

fs.writeFile(path.join(__dirname, 'db.json'), json, function (err) {
    if (err) {
        return console.log(err);
    } else {
        console.log("Mock data generated.");
    }
});

// this's for version 5 only
// jsf.resolve(dataSchema).then((data) => {
//     fs.writeFile('../db.json', JSON.stringify(data), (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('finish generating mock data');
//         }
//     });
// });