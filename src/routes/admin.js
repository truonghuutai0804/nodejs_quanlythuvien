const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.post('/stored', adminController.store);
router.get('/books/create', adminController.create);
router.get('/books/:id/edit', adminController.edit);
router.put('/books/:id', adminController.update);
router.delete('/books/:id', adminController.destroy);
router.get('/stored/books', adminController.storedBooks);

module.exports = router;
