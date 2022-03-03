const express = require('express');
const router = express.Router();

const booksController = require('../app/controllers/BooksController');
const infobooksController = require('../app/controllers/InfoBookController');


router.get('/:slug', infobooksController.show);
router.get('/', booksController.index);

module.exports = router;
