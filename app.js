// import * as notes from './notes.js';

console.log("App running");


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')

// const notes = require('./notes.js').default;


const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command == 'add') {
    var note = notes.addNote(argv.title, argv.body);
    var message = note ? `Note created. Title: ${note.title} Body: ${note.body}` : 'Could not create note.';
    console.log(message);

} else if (command === 'list') {
    var allNotes = notes.getAll();
    if (allNotes){
        allNotes.forEach(note => {
            console.log(`${note.title}\n---\n${note.body}\n`);
        });
    }else{
        console.log('No notes found');
    }
    
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    var message = note ? `${note.title}\n---\n${note.body}` : 'Note not found';
    console.log(message);
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `Removed note: ${argv.title}` : 'Note not removed';
    console.log(message);

} else {
    console.log('Command not recognized');
}