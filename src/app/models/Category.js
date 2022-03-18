const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Category = new Schema({
    _id: Schema.Types.ObjectId,
    nameCategory: { type: String, require: true },
    slug: { type: String, slug: 'nameCategory', unique: true },
});

module.exports = mongoose.model('Category', Category);
