const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HeroSchema = new Schema({
    id: Number,
    name: String,
    intelligence: Number,
    strength: Number,
    speed: Number,
    combat: Number,
    wealth: Number,
    image: String,



});



module.exports = mongoose.model('hero', HeroSchema);






