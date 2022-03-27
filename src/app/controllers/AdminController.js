const Book = require('../models/Book');
const Category = require('../models/Category');
const Author = require('../models/Author');
const Publisher = require('../models/Publisher');

const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class AdminContoller {

    //BOOKS    
    //GET admin/stored/books
    stored(req, res, next) {

        Book.find({})
            .populate({ modal: 'Category', path: 'categoryBook' })
            .populate({ modal: 'Author', path: 'authorBook' })
            .populate({ modal: 'Publisher', path: 'publisherBook' })
            .then((books) => {
                res.render('admin/stored-books', {
                    books: multipleMongooseToObject(books),
                })
            })
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

    //POST /admin/books/stored
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

    //AUTHORS
    //GET admin/stored/authors
    storedAuthors(req, res, next) {
        Author.find({})
            .populate({ modal: 'Book', path: 'owner' })
            .then((authors) => {
                // res.json(authors)
                res.render('admin/stored-authors', {
                    authors: multipleMongooseToObject(authors),
                })
            })
            .catch(next);
    }

    //GET admin/authors/create
    createAuthor(req, res, next) {
        res.render('authors/create')
    }
    //POST /admin/books/stored
    storeAuthor(req, res, next) {
        const author = new Author(req.body);
        author.save()
            .then(() => res.redirect('/admin/stored/authors'))
            .catch((error) => {
                console.log(error);
            });
    }

    //GET admin/authors/:id/edit
    editAuthor(req, res, next) {
        Author.findById(req.params.id)
            .then((author) =>
                res.render('authors/edit', {
                    author: mongooseToObject(author),
                }),
            )
            .catch(next);
    }

    //PUT admin/authors/:id
    updateAuthor(req, res, next) {
        Author.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/stored/authors'))
            .catch((error) => {
                console.log(error);
            });
    }

    //DELETE admin/authors/:id
    destroyAuthor(req, res, next) {
        Author.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //CATEGORY
    //GET admin/stored/categories
    storedCategories(req, res, next) {
        Category.find({})
            .then((categories) => {
                // res.json(authors)
                res.render('admin/stored-categories', {
                    categories: multipleMongooseToObject(categories),
                })
            })
            .catch(next);
    }

    //GET admin/categories/create
    createCategory(req, res, next) {
        res.render('categories/create')
    }

    //POST admin/categories/stored
    storeCategory(req, res, next) {
        const category = new Category(req.body)
        category.save()
            .then(() => { res.redirect('/admin/stored/categories') })
            .catch((err) => {
                console.log(err)
            })
    }

    //GET admin/authors/:id/edit
    editCategory(req, res, next) {
        Category.findById(req.params.id)
            .then((category) =>
                res.render('categories/edit', {
                    category: mongooseToObject(category),
                }),
            )
            .catch(next);
    }

    //PUT admin/authors/:id
    updateCategory(req, res, next) {
        //res.json(req.params.id)
        Category.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/stored/categories'))
            .catch((error) => {
                console.log(error);
            });
    }
}

module.exports = new AdminContoller();
