const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Violate = new Schema(
    {           
        _id: Schema.Types.ObjectId,
        Sinhvien: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
        },
        Nhanvien: {
            type: Schema.Types.ObjectId,
            ref: 'Staff',
        },
        Sach: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        },
        Noidung:  { type: String, },
        Xuphat:  { type: String, },
        Mucdo:  { type: String, },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Violate', Violate);