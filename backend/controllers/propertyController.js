const db = require('../models/index');
const asyncHandler = require('express-async-handler');
const {Op} = require('sequelize');
const pageSize = require('../utilities/constants');
const paginate = require('../utilities/paginate');


// @desc Search properties
// @route GET /api/properties/search
// @access Public

const searchProperties = asyncHandler(async (req, res) => {
    const property = req.query.name;
    const properties = await db.Property.findAll({
        where: {
            title: {[Op.iLike]: "%"+property+"%"}
        }
    });
    return res.json({data: {properties}, message: 'successfully fetched.'})
});

// @desc Get all properties
// @route GET /api/properties
// @access Public

const getProperties = asyncHandler(async (req, res) => {
    const {category} = req.query;
    const pageNumber = Number(req.query.pageNumber) || 1;
    // properties without pagination
    // if(!pageNumber) {
    //     const allProperties = await db.Property.findAll({});
    //     return res.status(200).json({data: {properties: allProperties}, message: 'successfully fetched.'});
    // }
    let properties;
    if(category !== undefined) {
        properties = await db.Property.findAndCountAll({
            include: [db.Category],
            where: {
                '$category.name$' : category
            },
            ...paginate(pageNumber),
            order: [['id', 'DESC']]
        });
    } else {
        properties = await db.Property.findAndCountAll({
            ...paginate(pageNumber),
            order: [['id', 'DESC']]
        });
    }
    const totalPages = Math.ceil(properties.count / pageSize);

    return res.status(200).json({data: {
        properties: properties.rows, 
        totalItems: properties.count, 
        totalPages,
        pageNumber,
        }
        , message: 'successfully fetched.'});
})

// @desc Add a property
// @route POST /api/properties
// @access Public
const addProperty = asyncHandler(async (req, res) => {
    const {title, address, price, bed, bath, area, isVerrified, onSale, category, road, direction} = req.body;
    
    const newCategory = await db.Category.findOne({where: {name: category}});

    let attachments = [];
    if(req.files.length > 0) {
        req.files.forEach(item => {
            attachments.push('property/' + item.filename)
        })
    }

    const property = await db.Property.create({title, address, price, bed, bath, area, isVerrified, onSale, categoryId: newCategory.id, attachments, road, direction});
    res.status(200).json({data: property, message: 'Successfully created.'});
})

// @desc Get a single property
// @route GET /api/properties/:id
// @access Public

const getPropertyById = asyncHandler(async (req, res) => {
    const property = await db.Property.findOne({where: {id: req.params.id}});
    if(!property) {
        res.status(400)
        throw new Error('Property is not found.')
    }

    res.status(200).json({data: property, message: 'Successfully fetched.'});
})

// @desc Update a Property
// @route PUT /api/properties/:id
// @access Public

const updateProperty = asyncHandler(async (req, res) => {
    const {title, address, price, bed, bath, area, isVerrified, onSale, category, road, direction} = req.body;

    const newCategory = await db.Category.findOne({where: {name: category}});

    let attachments = [];
    if(req.files.length > 0) {
        req.files.forEach(item => {
            attachments.push('property/' + item.filename)
        })
    }
    const property = await db.Property.findOne({where: {id: req.params.id}});
    if(!property) {
        res.status(400)
        throw new Error('Property is not found.')
    }

    if(attachments.length > 0) {
        await db.Property.update({title, address, price, bed, bath, area, isVerrified, onSale, categoryId : newCategory.id, attachments, road, direction}, {where: {id: req.params.id}});
    } else {
        await db.Property.update({title, address, price, bed, bath, area, isVerrified, onSale, categoryId : newCategory.id, road, direction}, {where: {id: req.params.id}});
    }
    
    res.status(200).json({message: 'Successfully updated.'});
})

// @desc Delete a Property
// @route DELETE /api/properties/:id
// @access Public

const deleteProperty = asyncHandler(async (req, res) => {
    const property = await db.Property.findOne({where: {id: req.params.id}});
    if(!property) {
        res.status(400)
        throw new Error('Property is not found.')
    }

    await db.Property.destroy({where: {id: req.params.id}});
    res.status(200).json({message: 'Successfully deleted.'});
})

module.exports = {getProperties, addProperty, updateProperty, deleteProperty, getPropertyById, searchProperties};