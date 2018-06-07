console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    var notes = [];
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
        return notes;
    } catch (error) {
        return notes;
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var note = notes.filter((note) => note.title === title);
    return note.length === 1 ? note[0] : null;
};

var removeNote = (title) => {
    var notes = fetchNotes();
    notesWithoutNote = notes.filter((note) => note.title !== title);
    saveNotes(notesWithoutNote);

    return notes.length !== notesWithoutNote.length;
};

var printNote = (note) => {
    return `${note.title}\n---\n${note.body}\n`;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    printNote
};