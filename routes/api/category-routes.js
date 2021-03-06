const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const CategoryData = await Category.findAll({ 
      include: [
        { 
        model: Product,Category, 
        through: product_id, as: 'product id',
        attributes: [
          'category_name',
          'product_name'
        ]
        }
    ]
    });

    const categories = CategoryData.map((category) => category.get({ plain: true }));

    res.status(200).json(categories);

    } catch(err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // try {
  //   const singleproduct = await Product.findByPk(req.params.id, {
  //     include: [
  //       { 
  //       model: Product,Category, 
  //       through: product_id, as: 'product id',
  //       attributes: [
  //         'category_name',
  //         'product_name'
  //         ]
  //       }
  //   ]
  //   });
    
  //   if (!singleproduct) {
  //     res.status(404).json({ message: 'No product found with this id!' });
  //     return;
  //   }

  //   res.status(200).json(singleproduct);
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
