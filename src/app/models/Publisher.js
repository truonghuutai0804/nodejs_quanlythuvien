const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Publisher = new Schema({
    _id: Schema.Types.ObjectId,
    namePublisher: { type: String, require: true },
    slug: { type: String, slug: 'namePublisher', unique: true },
});

module.exports = mongoose.model('Publisher', Publisher);
