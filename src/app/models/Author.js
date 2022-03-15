const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Author = new Schema(
    {
        _id: Schema.Types.ObjectId,
        tentg: { type: String, require: true },
    },

);

module.exports = mongoose.model('Author', Author);