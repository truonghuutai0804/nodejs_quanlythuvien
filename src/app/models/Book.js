const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Book = new Schema(
    {
        _id: Schema.Types.ObjectId,
        nameBook: { type: String, minlength: 1, maxlength: 255, require: true },
        slug: { type: String, slug: 'nameBook', unique: true },
        descriptionBook: { type: String, minlength: 1, maxlength: 6000 },
        imageBook: { type: String, maxlength: 255 },
        categoryBook: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
        authorBook: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Author',
            },
        ],
        publisherBook: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Publisher',
            },
        ],
        yearPubliserBook: [
            {
                type: Date,
            },
        ],
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Book', Book);
