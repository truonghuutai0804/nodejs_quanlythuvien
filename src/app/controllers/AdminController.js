const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/mongoose');

class AdminContoller {
    //GET admin/stored/books
    storedBooks(req, res, next) {
        Book.find({})
            .then((books) =>
                res.render('admin/stored-books', {
                    books: multipleMongooseToObject(books),
                }),
            )
            .catch(next);
    }
}

module.exports = new AdminContoller();
