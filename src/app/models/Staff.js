const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Staff = new Schema(
    {
        nameStaff: { type: String, require: true },
        phoneStaff: { type: String, require: true },
        addressStaff: { type: String, require: true },
        emailStaff: { type: String, require: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Staff', Staff);
