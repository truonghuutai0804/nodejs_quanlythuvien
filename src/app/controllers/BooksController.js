const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/mongoose');


//GET /books
class BooksContoller {
    index(req, res, next) {
        Book.find({})
            .then((books) => {
                res.render('books', {
                    books: multipleMongooseToObject(books),
                });
            })
            .catch(next);
    }
}

module.exports = new BooksContoller();
