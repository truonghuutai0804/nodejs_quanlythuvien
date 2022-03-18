const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Borrow = new Schema(
    {
        _id: Schema.Types.ObjectId,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        staff: {
            type: Schema.Types.ObjectId,
            ref: 'Staff',
        },
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        },
        borrowDate: { type: Date, require: true, default: Date.now },
        appointmentDate: { type: Date, require: true },
        returnDate: { type: Date },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Borrow', Borrow);
