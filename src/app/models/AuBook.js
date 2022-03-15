const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const AuBook = new Schema(
    {   
        _id: Schema.Types.ObjectId,
        Sach: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        },
        Tacgia: {
            type: Schema.Types.ObjectId,
            ref: 'Author',
        },
    }
)

module.exports = mongoose.model('AuBook', AuBook);