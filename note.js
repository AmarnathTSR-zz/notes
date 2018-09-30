const fs = require('fs');

console.log('Starting note.js');

// Adding Notes  
//  1- check notes-data.json file already available or not
// 2- check now notes title already exist or not
//  3- add post finally using push method

var fetchnote = () =>
{
    try{
        var NoteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(NoteString);
        return notes;
        }
        catch (err){
        console.log(`${err} : Notes File Not Exist`);
        return err;
        }
}


var savenotes =()=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {

    // asign empty array
var notes =fetchnote();

//    Getting input value in note 
var note ={
    title,
    body
};

// 1- check notes-data.json file already available or not



// check title already exist in notes using filter function

var duplicatenotes = notes.filter((note)=> note.title==title );

// Push new note if new note not exist in notes-data.json

if(duplicatenotes.length == 0)
{
    notes.push(note);
   savenotes(notes);
    return note;
}
else
{
 
}

};

var listNotes = () => {
console.log('List of Post');

};

var removeNote = (title) => {
    console.log(`Removed : ${title}`);
}

var readNote = (title) => {
    console.log(`Read ${title}`);
}
module.exports = {
    addNote,
    listNotes,
    removeNote,
    readNote
};