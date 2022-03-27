const express = require('express');
const router = express.Router();

const adminController = require('../../app/controllers/AdminController');
//AUTHORS
router.post('/stored', adminController.storeAuthor);
router.get('/create', adminController.createAuthor);
router.get('/:id/edit', adminController.editAuthor);
router.put('/:id', adminController.updateAuthor);
router.delete('/:id', adminController.destroyAuthor);

module.exports = router;
