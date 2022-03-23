const Book = require('../models/Book');
const Category = require('../models/Category');
const Author = require('../models/Author');
const Publisher = require('../models/Publisher');

const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class AdminContoller {
    //GET admin/stored/books
    storedBooks(req, res, next) {

        Book.find({})
            .populate({ modal: 'Category', path: 'categoryBook'})
            .populate({ modal: 'Author', path: 'authorBook'})
            .populate({ modal: 'Publisher', path: 'publisherBook'})
            .then((books) =>{
            //    res.json(books),
                res.render('admin/stored-books', {
                    books: multipleMongooseToObject(books),
                })
            }
            )
            .catch(next);
    }

    //GET admin/books/create
    async create(req, res, next) {
        let categories = await Category.find({})
                .then()
                .catch(next);

        let authors = await Author.find({})
                .then()
                .catch(next);

        let publishers = await Publisher.find({})
                .then()
                .catch(next);

        res.render('books/create', {
            categories: multipleMongooseToObject(categories),
            authors: multipleMongooseToObject(authors),
            publishers: multipleMongooseToObject(publishers),
        })
        //res.render('books/create');
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
            .then(() => res.redirect('/admin/stored/books'))
            .catch((error) => {
                console.log(error);
            });
    }

    //PUT admin/books/:id
    update(req, res, next) {
        Book.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/stored/books'))
            .catch(next);
    }

    //DELETE admin/books/:id
    destroy(req, res, next) {
        Book.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new AdminContoller();
