const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Book = new Schema(
    {
        name: { type: String, minlength: 1, maxlength: 255, require: true },
        slug: { type: String, slug: 'name', unique: true },
        description: { type: String, minlength: 1, maxlength: 6000 },
        image: { type: String, maxlength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Book', Book);
