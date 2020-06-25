const express = require('express');
const formidable = require('formidable');
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
    console.log({ id });
    let product = await Product.findOne({ _id: productId });
    console.log({ product });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.messaage });
  }
});

router.get('/photo/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    let product = await Product.findOne({ _id: productId });
    res.set('Content-Type', product.photo.contentType);
    res.send(product.photo.data);
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
  try {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
      if (err)
        return res.status(404).json({ error: 'Image could not be uploaded' });

      console.log({ name: fields.name });
      const foundProduct = await Product.find({ name: fields.name });
      if (foundProduct.length) {
        console.log({ foundProduct });
        return res.status(400).json({ error: 'Product already in database' });
      }
      let product = new Product(fields);
      if (files.photo) {
        product.photo.data = fs.readFileSync(files.photo.path);
        product.photo.contentType = files.photo.type;
      }

      await product.save();
      res.send({ msg: `Product successfully added.` });
    });
  } catch (err) {
    res.status(400).json({
      error: 'There was a problem adding this product',
      msg: err.message,
    });
  }
});

/**
 * @route put api/product
 * @description product update route
 * @access Private
 */

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
