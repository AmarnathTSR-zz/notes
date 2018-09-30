const fs = require('fs');

console.log('Starting note.js');

// Adding Notes  
//  1- check notes-data.json file already available or not
// 2- check now notes title already exist or not
//  3- add post finally using push method

var fetchnote = () => {
    try {
        var NoteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(NoteString);
        return notes;
    } catch (err) {
        console.log(`${err} : Notes File Not Exist`);
        return err;
    }
}


var savenotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {

    // asign empty array
    var notes = fetchnote();

    //    Getting input value in note 
    var note = {
        title,
        body
    };

    // 1- check notes-data.json file already available or not
    // check title already exist in notes using filter function

    var duplicatenotes = notes.filter((note) => note.title === title);

    // Push new note if new note not exist in notes-data.json

    if (duplicatenotes.length == 0) {
        notes.push(note);
        savenotes(notes);
        return note;
    } else {

    }

};

var listNotes = () => {
    console.log('List of Post');

};

var removeNote = (title) => {

    //Fetching all notes
    var notes = fetchnote();

    // filter the notes which is not equals to given title (!==) in this case we got array value without given title
    filterednotes = notes.filter((note) => note.title !== title);

    console.log(filterednotes);

    savenotes(filterednotes);

    return notes.length !== filterednotes.length;


}

var readNote = (title) => {
    console.log(`Read ${title}`);
   var notes = fetchnote();
  var readfilter = notes.filter((note)=>note.title === title);

  console.log(readfilter);
  return readfilter[0];
}

var logNote = (note) => {
    console.log('Here Showing Notes');
    console.log('---------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
module.exports = {
    addNote,
    listNotes,
    removeNote,
    readNote,
    logNote
};