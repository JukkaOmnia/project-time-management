const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PresenterSchema = new Schema({
    name: {
        type: String,
    },
    evaluatorName:{
        type:String,
    },
    presentationTopic: {
        type: String,
    },
    article:{
        type:String,
    },
     id: {
        type: Intl,
    },
    currentTime:{
        type:Date,
    },
    timeOn:{
        type:Date,
    },
    keyword:{
        type:Object,
    }
});

const Student = mongoose.model('Student', PresenterSchema);
module.exports = Student;
