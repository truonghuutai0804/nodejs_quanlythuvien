const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Borrow = new Schema(
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
        ngayMuon:  { type: Date, require: true },
        ngayHen:  { type: Date, require: true },
        ngayTra:  { type: Date, require: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Borrow', Borrow);