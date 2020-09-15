const express = require('express');
const Category = require('../models/category');
const { tokenVerify } = require('../middleware/auth');

const router = express.Router();

/**
 * @route get api/category
 * @description get all categories route
 * @access Private
 */

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(400).json({ error: err.messaeg });
  }
});

/**
 * @route post api/category
 * @description category create route
 * @access Private
 */

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const category = new Category({ name });
    await category.save();
    res.send({ msg: `Category: ${name} successully added` });
  } catch (error) {
    res.status(401).json({
      error:
        'There was a problem adding a new category.  Might be due to category names',
    });
  }
});

/**
 * @route put api/category
 * @description category update route
 * @access Private
 */

router.put('/:categoryId', async (req, res) => {});

/**
 * @route delete api/category
 * @description category create route
 * @access Private
 */

router.delete('/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  try {
    let category = await Category.findOne({ _id: categoryId });
    const categoryName = category.name;
    await category.remove({ _id: categoryId });
    res.send(`${categoryName} has been removed`);
  } catch (err) {
    res.status(400).json({ error: err.messaage });
  }
});

module.exports = router;
