const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Publisher = new Schema(
    {
        _id: Schema.Types.ObjectId,
        tennxb: { type: String, require: true },
    },

);

module.exports = mongoose.model('Publisher', Publisher);