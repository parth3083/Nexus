// models.js
const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
    Sorted_image_string: String,
    name:String
});

const Image = mongoose.model('Image', imgSchema);
module.exports = Image;