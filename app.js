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
  var note =  notes.addNote(argv.title, argv.body);
  if(note){
   console.log('Notes Save success');
   console.log('---------------');
   console.log(`Title: ${note.title}`);
   console.log(`Body: ${note.body}`);
  }
  else
  {
  console.log('Note title already exist. please enter the new title');
  }
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
