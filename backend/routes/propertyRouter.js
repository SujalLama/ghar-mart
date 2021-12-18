const {getProperties, addProperty, updateProperty, deleteProperty, getPropertyById, searchProperties} = require('../controllers/propertyController')
const router = require('express').Router();
const {upload} = require('../helpers/filehelpers');

router.route('/').get(getProperties).post(upload.array('property', 3), addProperty);
router.route('/search').get(searchProperties);
router.route('/:id').get(getPropertyById).put(updateProperty).delete(deleteProperty);

module.exports = router;