console.log('Starting note.js');

var addNote = (title, body) => {
console.log(`Post Title: ${title} and Post Body: ${body}`);
}

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