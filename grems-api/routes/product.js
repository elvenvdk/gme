const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const Product = require('../models/product');
const { tokenVerify } = require('../middleware/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('product works!');
});

/**
 * @route post api/product
 * @description product create route
 * @access Private
 */

router.post('/', async (req, res) => {
  try {
    console.log({ req: req.body });
    let form = new formidable.IncomingForm();
    console.log('FORM TIME');
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      console.log('PROCESS FORM');
      if (err)
        return res.status(400).json({
          error: 'Image could not be uploaded',
          error_msg: err.message,
        });
      const {
        name,
        description,
        price,
        category,
        quantity,
        sold,
        sale_type,
        shipping,
      } = fields;
      console.log({ fields });

      // const dbProduct = Product.findOne({ name });
      // if (dbProduct)
      //   return res.status(400).json({
      //     error:
      //       'A product by that name is already in the database.  Please enter a different product',
      //   });

      if (
        !name ||
        !description ||
        !price ||
        !category ||
        !quantity ||
        !shipping
      )
        return res.status(400).json({ error: 'All fields are required' });

      let product = new Product(fields);
      console.log({ product });

      if (files.photo) {
        if (files.photo.size > 1000000) {
          return res
            .status(400)
            .json({ error: 'Image should be less than 1mb in size' });
        }
        product.photo.data = fs.readFileSync(files.photo.path);
        product.photo.contentType = files.photo.type;
      }
      product.save((err, result) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(result);
      });
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

module.exports = router;
