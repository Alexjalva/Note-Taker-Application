const fs = require('fs');
const path = require('path');

let notesArray;
fs.readFile('db/db.json', "utf8", (err,data) => {
if(err){
     throw err;
    }
notesArray=JSON.parse(data);
});

// ROUTING

module.exports = (app) => {
 

  app.get('/api/notes', (req, res) => res.json(notesArray));

  app.post('/api/notes', (req, res) => {

    let newNote = req.body;
    notesArray.push(newNote);
    fs.writeFile('db/db.json', JSON.stringify(notesArray), err => {
        if(err) {
            throw err;
        }
    }); 

    console.log(`posted note ${newNote}`);
    res.redirect('/');
  });


};
