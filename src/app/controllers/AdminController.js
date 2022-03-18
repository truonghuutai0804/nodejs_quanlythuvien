const Book = require('../models/Book');
const Category = require('../models/Category');
const Author = require('../models/Author');
const AuBook = require('../models/AuBook');
// const Publisher = require('../models/Publisher');
// const PubBook = require('../models/PubBook');

const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class AdminContoller {
    //GET admin/stored/books
    storedBooks(req, res, next) {
        AuBook.aggregate([
            {
                $lookup: {
                    from: 'books',
                    localField: 'Sach',
                    foreignField: '_id',
                    as: 'Sach',
                },
            },
            {
                $lookup: {
                    from: 'authors',
                    localField: 'Tacgia',
                    foreignField: '_id',
                    as: 'Tacgia',
                },
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'Sach.loaiSach',
                    foreignField: '_id',
                    as: 'loaiSach',
                },
            },
        ])
            .then((aubooks) => {
                //  res.json(aubooks)
                console.log(aubooks);
                res.render('admin/stored-books', {
                    aubooks: aubooks,
                });
            })
            .catch(next);

        // AuBook.find({})
        //     .populate({ modal: 'Book', path: 'Sach' })
        //     .populate({ modal: 'Author', path: 'Tacgia' })
        //     .then((aubooks) =>{
        //         // console.log(aubooks[0].Sach.loaiSach)
        //        aubooks = AuBook.aggregate( [
        //             {
        //               $lookup:
        //                 {
        //                   from: "categories",
        //                   localField: "_id",
        //                   foreignField: "loaiSach",
        //                   as: "loaiSach"
        //                 }
        //            }
        //          ] ),
        //         console.log(aubooks)
        //         }
        //     )
        //     .catch(next);

        // Book.find({})
        //     .populate({ modal: 'Category', path: 'loaiSach'})
        //     .then((books) =>
        //         // res.json(books)
        //         res.render('admin/stored-books', {
        //             books: multipleMongooseToObject(books),
        //         })
        //     )
        //     .catch(next);

        // dưới này phải có, t ko có sửa đâu
        // Book.find({})
        // .then((books) =>
        //     res.render('admin/stored-books', {
        //         books: multipleMongooseToObject(books),
        //     }),
        // )
        // .catch(next);
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
