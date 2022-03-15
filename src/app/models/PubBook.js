const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const PubBook = new Schema(
    {   
        _id: Schema.Types.ObjectId,
        Sach: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        },
        Nxb: {
            type: Schema.Types.ObjectId,
            ref: 'Publisher',
        },
        namNxb:{ type: String, minlength: 1, maxlength: 255, require: true },
    }
)

module.exports = mongoose.model('PubBook', PubBook);