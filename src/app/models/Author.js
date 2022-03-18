const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Author = new Schema({
    _id: Schema.Types.ObjectId,
    nameAuthor: { type: String, require: true },
    slug: { type: String, slug: 'nameAuthor', unique: true },
    owner: {
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Author',
        },
    },
});

module.exports = mongoose.model('Author', Author);
