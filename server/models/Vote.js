const {Schema, model} = require('mongoose');

const schema = new Schema({
    number: {type: Number, required: true},
    date: {type: Date, required: true},
   
});

module.exports = model('Vote', schema);
