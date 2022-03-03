const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.post('/store', adminController.store);
router.get('/books/create', adminController.create);
router.get('/stored/books', adminController.storedBooks);

module.exports = router;
