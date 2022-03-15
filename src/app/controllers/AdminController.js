const Book = require('../models/Book');
// const Category = require('../models/Category');
// const Author = require('../models/Author');
// const AuBook = require('../models/AuBook');
// const Publisher = require('../models/Publisher');
// const PubBook = require('../models/PubBook');

const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class AdminContoller {
    //GET admin/stored/books
    storedBooks(req, res, next) {

        // PubBook.find({})
        //     .populate({ modal: 'Book', path: 'Sach' })
        //     .populate({ modal: 'Publisher', path: 'Nxb' })
        //     .then((pubbooks) =>
        //             console.log(pubbooks)
        //     )
        //     .catch(next);
    

        // Book.findOne({})
        // .populate({ modal: 'Category', path: 'loaiSach' })
        // .then((books) =>
        //     // console.log(books)
        //     console.log(books.loaiSach.tenloai)
        // )
        // .catch(next);


// dưới này phải có, t ko có sửa đâu
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
            .then(() => res.redirect('/admin/stored/books'))
            .catch((error) => {});
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
