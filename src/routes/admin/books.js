const express = require('express');
const router = express.Router();

const adminController = require('../../app/controllers/AdminController');

router.post('/stored', adminController.store);
router.get('/create', adminController.create);
router.get('/:id/edit', adminController.edit);
router.put('/:id', adminController.update);
router.delete('/:id', adminController.destroy);

module.exports = router;

