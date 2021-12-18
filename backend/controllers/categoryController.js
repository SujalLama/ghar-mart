const db = require('../models/index');
const asyncHandler = require('express-async-handler');

// @desc Get all categories
// @route GET /api/categories
// @access Public

const getCategories = asyncHandler(async (req, res) => {
    const categories = await db.Category.findAll({});

    return res.status(200).json({data: {
        categories
        }
        , message: 'successfully fetched.'});
})

// @desc Add a category
// @route POST /api/categories
// @access Public
const addCategory = asyncHandler(async (req, res) => {
    const {name} = req.body;
    const category = await db.Category.create({name});
    res.status(200).json({data: category, message: 'Successfully created.'});
})

// @desc Get a single category
// @route GET /api/categories/:id
// @access Public

const getCategoryById = asyncHandler(async (req, res) => {
    const category = await db.Category.findOne({where: {id: req.params.id}});
    if(!category) {
        res.status(400)
        throw new Error('Category is not found.')
    }

    res.status(200).json({data: category, message: 'Successfully fetched.'});
})

// @desc Update a Category
// @route PUT /api/categories/:id
// @access Public

const updateCategory = asyncHandler(async (req, res) => {
    const {name} = req.body;
    const category = await db.Category.findOne({where: {id: req.params.id}});
    if(!category) {
        res.status(400)
        throw new Error('Category is not found.')
    }

    await db.Category.update({name}, {where: {id: req.params.id}});
    res.status(200).json({message: 'Successfully updated.'});
})

// @desc Delete a Category
// @route DELETE /api/categories/:id
// @access Public

const deleteCategory = asyncHandler(async (req, res) => {
    const category = await db.Category.findOne({where: {id: req.params.id}});
    if(!category) {
        res.status(400)
        throw new Error('Category is not found.')
    }

    await db.Category.destroy({where: {id: req.params.id}});
    res.status(200).json({message: 'Successfully deleted.'});
})

module.exports = {getCategories, addCategory, updateCategory, deleteCategory, getCategoryById};