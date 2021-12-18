'use strict';

const categories = [
  {id: 1, name: 'bangalow'},
  {id: 2, name: 'office'},
  {id: 3, name: 'land'},
  {id: 4, name: 'flats'},
]

const properties = [
  {
    title: "House on Sale, Kathmandu",
    address: "kathmandu",
    price: 500000,
    categoryId: 1,
    bed: 2,
    bath: 2,
    area: '0-4-0',
    road: '5m',
    direction: 'North',
    isVerrified: true,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "Rent for the office, Kathmandu",
    address: "bhaktapur",
    price: 1000000,
    categoryId: 2,
    bed: 4,
    bath: 2,
    area: '0-6-0',
    road: '5ft',
    direction: 'South',
    isVerrified: false,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "Land on Sale, lalitpur",
    address: "kathmandu",
    price: 2500000,
    categoryId: 3,
    bed: 0,
    bath: 0,
    area: '0-8-0',
    road: '2m',
    direction: 'North',
    isVerrified: false,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "Flats for living, Kathmandu",
    address: "kathmandu",
    price: 750000,
    categoryId: 4,
    bed: 8,
    bath: 2,
    area: '0-4-0',
    road: '8m',
    direction: 'East',
    isVerrified: true,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "Mansion on Sale, Kathmandu",
    address: "kathmandu",
    price: 500000,
    categoryId: 1,
    bed: 10,
    bath: 4,
    area: '0-9-0',
    road: '5m',
    direction: 'East',
    isVerrified: false,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "Office space at affordable price, Kathmandu",
    address: "kupandol",
    price: 1000000,
    categoryId: 2,
    bed: 4,
    bath: 2,
    area: '0-6-0',
    road: '5ft',
    direction: 'South',
    isVerrified: false,
    onSale: false,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "Land with good price, lalitpur",
    address: "kathmandu",
    price: 3500000,
    categoryId: 3,
    bed: 0,
    bath: 0,
    area: '0-8-0',
    road: '2m',
    direction: 'North',
    isVerrified: true,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "Flats for Rent, Gokerna",
    address: "gokarna",
    price: 900000,
    categoryId: 4,
    bed: 8,
    bath: 2,
    area: '0-4-0',
    road: '8m',
    direction: 'East',
    isVerrified: false,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "Property on Sale, Kathmandu",
    address: "kathmandu",
    price: 500000,
    categoryId: 1,
    bed: 6,
    bath: 2,
    area: '0-9-0',
    road: '5m',
    direction: 'East',
    isVerrified: false,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "House on Sale, chitwan",
    address: "chitwan",
    price: 3500000,
    categoryId: 1,
    bed: 9,
    bath: 3,
    area: '0-9-0',
    road: '5m',
    direction: 'East',
    isVerrified: false,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
  {
    title: "House at affordable price, bhaktapur",
    address: "bhaktapur",
    price: 23900000,
    categoryId: 1,
    bed: 5,
    bath: 3,
    area: '0-9-0',
    road: '5m',
    direction: 'East',
    isVerrified: false,
    onSale: true,
    createdAt: '2021-12-17 17:35:23+05:45',
    updatedAt: '2021-12-17 17:35:23+05:45'
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('categories', categories, {});
     await queryInterface.bulkInsert('properties', properties, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('properties', null, {});
    await queryInterface.bulkDelete('categories', null, {});
  }
};
