const express = require('express');
const router = express.Router();

const adminController = require('../../app/controllers/AdminController');
//CATEGORIES
router.post('/stored', adminController.storeCategory);
router.get('/create', adminController.createCategory);
router.get('/:id/edit', adminController.editCategory);
router.put('/:id', adminController.updateCategory);
//router.delete('/:id', adminController.destroyCategory);

module.exports = router;
