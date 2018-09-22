console.log('starting app!.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./note');

var argv = yargs.argv;
console.log(argv);

var command = argv._[0];

console.log(`Command : ${command}`);
if(command == 'add'){
    notes.addNote(argv.title, argv.body);
}
else if(command == 'list'){
  notes.listNotes();
}
else if(command == 'remove'){
notes.removeNote(argv.title);
}
else if(command == 'read'){
    notes.readNote(argv.title);
}
else{
    console.log('Command Not recognised');
}
