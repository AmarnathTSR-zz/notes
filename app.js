console.log('starting app!.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./note');

var argv = yargs.argv;
console.log(argv);

var command = argv._[0];

console.log(`Command : ${command}`);
if (command == 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note title already exist. please enter the new title');
    }
} else if (command == 'list') {
    var readNotes = notes.listNotes();
    console.log(`No of ${readNotes.length} Note(s)`);
    readNotes.forEach((note) => {
        notes.logNote(note);
    });
} else if (command == 'remove') {
    removeresult = notes.removeNote(argv.title);

    if (removeresult) {
        console.log('Notes have been succesfully removed');
    } else {
        console.log('Notes Not found');
    }

} else if (command == 'read') {
    var note = notes.readNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note Not available');
    }

} else {
    console.log('Command Not recognised');
};