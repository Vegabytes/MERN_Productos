const notesCtrl = {};

const Note = require('../models/Note');


notesCtrl.getNotes = async (req,res) => {
    const notes = await Note.find();
    res.json({message: notes});
}


notesCtrl.createNote = async (req,res) => {
    const { title, description, author} = req.body;
    const newNote = new Note({
        title, description, author
    })
    await newNote.save();
    res.json({message: 'Note saved'});
}

notesCtrl.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message:'Note deleted'});
}

notesCtrl.updateNote = async (req,res) => { 
    const { title, description, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title, description, author
    });
    res.json({message:'Note updated'});
}


notesCtrl.getNote = async (req,res) => {
    console.log(req.params.id);
    const note = await Note.findById(req.params.id);
    res.json({message:note});
}

module.exports = notesCtrl;