const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Category = new Schema(
    {
        _id: Schema.Types.ObjectId,
        tenloai: { type: String, require: true },
    },

);

module.exports = mongoose.model('Category', Category);
