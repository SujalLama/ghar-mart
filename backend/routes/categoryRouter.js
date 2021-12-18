const { getCategories, addCategory, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryController');

const router = require('express').Router();

router.route('/').get(getCategories).post(addCategory);
router.route('/:id').get(getCategoryById).put(updateCategory).delete(deleteCategory);

module.exports = router;