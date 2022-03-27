
const express = require('express');
const router = express.Router();
const adminController = require('../../app/controllers/AdminController');

const booksRouter = require('./books');
const authorsRouter = require('./authors');
const categoriesRouter = require('./categories');


router.use('/books', booksRouter);
router.use('/authors', authorsRouter);
router.use('/categories', categoriesRouter);

router.get('/stored/authors', adminController.storedAuthors);
router.get('/stored/categories', adminController.storedCategories);
router.get('/stored/books', adminController.stored);

module.exports = router;
