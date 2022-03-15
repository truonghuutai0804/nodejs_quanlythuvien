const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Staff = new Schema(
    {           
        _id: Schema.Types.ObjectId,
        tensv: { type: String, require: true },
        lop:  { type: String, require: true },
        khoa:  { type: String },
        nganh:  { type: String },
        diachi:  { type: String, require: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Staff', Staff);