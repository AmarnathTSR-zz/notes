// 1st we need to include buit in modules
const fs = require('fs');

// 2nd we will include external modules
const _ = require('lodash');
const yargs = require('yargs');

// 3rd finally include our own module
const notes = require('./note');

// add yargs to add note for CLI - Command line interface

var argv = yargs
    .command('add', 'create New note', {
        title: {
            describe: 'this is the title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'this is the Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List of all notes')

    .command('remove', 'Remove note using title', {
        title: {
            describe: 'this is the title of note',
            demand: true,
            alias: 't'
        }
    })
    .command('read', 'read the note for given title', {
        title: {
            describe: 'this is the title of note',
            demand: true,
            alias: 't'
        }
    })
    .argv;



var command = argv._[0];

console.log(`Give Command is : ${command}`);

// Here we are check the given command (add, list, remove and read)
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