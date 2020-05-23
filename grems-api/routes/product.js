const express = require('express');
const fs = require('fs');
const Product = require('../models/product');
const { tokenVerify } = require('../middleware/auth');

const router = express.Router();

/**
 * @route get api/product
 * @description get products route
 * @access public
 */

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (err) {
    res.status(400).json({ error: err.messaage });
  }
});

/**
 * @route get api/product/:productId
 * @description get single product route
 * @access public
 */

router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    let product = await Product.findOne({ _id: productId });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.messaage });
  }
});

/**
 * @route post api/product
 * @description product create route
 * @access Private
 */

router.post('/', async (req, res) => {
  console.log({ Product: req.body });
  try {
    const product = await new Product({ ...req.body });
    await product.save();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route put api/product
 * @description product update route
 * @access Private
 */

router.put('/:productId', async (req, res) => {
  try {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(400).json({ error: err.message });

      let product = req.product;
      const { productId } = req.params;
      console.log(productId);
      product = { ...fields };
      console.log({ product_fields: product });

      // 1kb = 1000

      // 1mb = 1000000

      if (files.photo) {
        if (files.photo.size > 1000000)
          res.status(400).json({
            error: 'Image should be less than One Megabyte (1mb) in size...',
          });

        if (product.photo !== undefined) {
          product.photo.data = fs.readFileSync(files.photo.path);
          product.photo.contentType = files.photo.type;
        }
      }

      await Product.findOneAndUpdate(
        { _id: productId },
        { ...product },
        { new: true },
      );
      res.send('Product successfully updated');
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route delete api/product
 * @description product create route
 * @access Private
 */

router.delete('/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    let product = await Product.findOne({ _id: productId });
    const productName = product.name;
    await Product.remove({ _id: productId });
    res.send(`${productName} has been removed`);
  } catch (err) {
    res.status(400).json({ error: err.messaage });
  }
});

/**
 * @route update api/product/sold
 * @description update product sold route
 * @access private
 */

//  router.put('/sold/:productId', async (req, res) => {
//   const { productId } = req.params;
//   const product = Product.findOne({_id: })
//  })

module.exports = router;
