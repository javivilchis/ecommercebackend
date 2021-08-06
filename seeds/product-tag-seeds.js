const { ProductTag } = require('../models');

const productTagData = [
  {
    id:1,
    product_id: 1,
    tag_id: 6,
  },
  {
    id:1,
    product_id: 1,
    tag_id: 7,
  },
  {
    id:1,
    product_id: 1,
    tag_id: 8,
  },
  {
    id:1,
    product_id: 2,
    tag_id: 6,
  },
  {
    id:1,
    product_id: 3,
    tag_id: 1,
  },
  {
    id:1,
    product_id: 3,
    tag_id: 3,
  },
  {
    id:1,
    product_id: 3,
    tag_id: 4,
  },
  {
    id:1,
    product_id: 3,
    tag_id: 5,
  },
  {
    id:1,
    product_id: 4,
    tag_id: 1,
  },
  {
    id:1,
    product_id: 4,
    tag_id: 2,
  },
  {
    id:1,
    product_id: 4,
    tag_id: 8,
  },
  {
    id:1,
    product_id: 5,
    tag_id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
