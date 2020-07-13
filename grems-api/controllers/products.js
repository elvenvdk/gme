const formidable = require('formidable');
const fs = require('fs');
const Product = require('../models/product');
const { tokenVerify } = require('../middleware/auth');

/**
 * @function getProducts
 * @description get products all products
 * @access public
 */

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (err) {
    res.status(400).json({ error: err.messaage });
  }
};

/**
 * @function getProduct()
 * @description get single product
 * @access public
 */

exports.getProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log({ productId });
    let product = await Product.findOne({ _id: productId });
    console.log({ product });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.messaage });
  }
};

/**
 * @function getProductImage()
 * @description get product's image
 * @access public
 */

exports.getProductImage = async (req, res) => {
  try {
    const { productId } = req.params;
    let product = await Product.findOne({ _id: productId });
    res.set('Content-Type', product.photo.contentType);
    res.send(product.photo.data);
  } catch (err) {
    res.status(400).json({ error: err.messaage });
  }
};

/**
 * @function  createProduct()
 * @description product create
 * @access Private
 */

exports.createProduct = async (req, res) => {
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
};

/**
 * @function deleteProduct
 * @description product delete
 * @access Private
 */

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    let product = await Product.findOne({ _id: productId });
    const productName = product.name;
    await Product.remove({ _id: productId });
    res.send(`${productName} has been removed`);
  } catch (err) {
    res.status(400).json({ error: err.messaage });
  }
};
