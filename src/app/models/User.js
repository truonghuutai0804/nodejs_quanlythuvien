const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Student = new Schema(
    {
        _id: Schema.Types.ObjectId,
        nameUser: { type: String, require: true },
        phoneUser: { type: String, require: true },
        emailUser: { type: String, require: true },
        classUser: { type: String, require: true },
        facultyUser: { type: String },
        majorUser: { type: String },
        addressUser: { type: String, require: true },
        issueDate: { type: Date },
        expirationDate: { type: Date },
        contentViolate: { type: [String] },
        penalizeViolate: { type: [String] },
        levelViolate: { type: [String] },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Student', Student);
