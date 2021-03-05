const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: {
        type: String,
        required: [true, 'A question is required'],
    }
});

module.exports = mongoose.model('Question', questionSchema); // The colecction name would be... questions!!!
