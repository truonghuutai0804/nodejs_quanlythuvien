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

    //GET admin/books/create
    create(req, res, next) {
        res.render('books/create');
    }

    //POST /admin/store
    store(req, res, next) {
        const book = new Book(req.body);
        book.save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new AdminContoller();
