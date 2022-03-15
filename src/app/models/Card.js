const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Card = new Schema(
    {           
        _id: Schema.Types.ObjectId,
        sinhvien: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
        },
        ngayCap:  { type: Date, require: true },
        ngayHet:  { type: Date, require: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Card', Card);