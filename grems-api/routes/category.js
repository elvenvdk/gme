const express = require('express');
const formidable = require('formidable');
const Category = require('../models/category');
const { tokenVerify } = require('../middleware/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('category works!');
});

/**
 * @route post api/category
 * @description category create route
 * @access Private
 */

// router.post('/create', async (req, res) => {
//   try {
//     const category = new Category(req.body);
//     await category.save();
//     res.send(`${category.name} successfully saved`);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

router.post('/', async (req, res) => {
  try {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) => {
      if (err) return res.status(400).json({ error: err.message });

      const category = new Category(fields);
      category.save((err, result) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(result);
      });
    });
  } catch (err) {
    res.status(400).json({ error: err.messae });
  }
});

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
