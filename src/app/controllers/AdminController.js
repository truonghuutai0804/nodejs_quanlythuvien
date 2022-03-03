const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

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

    //GET admin/books/:id/edit
    edit(req, res, next) {
        Book.findById(req.params.id)
            .then((book) =>
                res.render('books/edit', {
                    book: mongooseToObject(book),
                }),
            )
            .catch(next);
    }

    //POST /admin/stored
    store(req, res, next) {
        const book = new Book(req.body);
        book.save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    //PUT admin/books/:id
    update(req, res, next) {
        Book.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/stored/books'))
            .catch(next);
    }
}

module.exports = new AdminContoller();
