// var obj = {
//     name: 'Akshay'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj)
// console.log(stringObj);

// var personString = '{"name": "Akshay","age": 22}';

// var jsonObj = JSON.parse(personString);

// console.log(typeof jsonObj);
// console.log(jsonObj);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json')

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
