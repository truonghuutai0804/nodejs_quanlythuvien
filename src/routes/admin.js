const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const infobooksController = require('../app/controllers/InfoBookController');

router.post('/store', infobooksController.store);
router.get('/books/create', infobooksController.create);
router.get('/stored/books', adminController.storedBooks);

module.exports = router;
