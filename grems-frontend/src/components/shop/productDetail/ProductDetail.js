import React, { useEffect, useState } from 'react';

import { formatCurrency } from '../../../helpers';

import api from '../../../api';

import './ProductDetail.scss';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});

  const _productId = match.params.productId;

  console.log({ _productId });

  const getProductDetail = async (productId) => {
    const _product = await api.getProduct(productId);
    console.log({ _product });
    setProduct(_product);
  };

  useEffect(() => {
    getProductDetail(_productId);
  }, []);

  console.log({ product });

  if (!product) return <h1>Loading product...</h1>;

  return (
    <div className='product-detail'>
      <div className='product-detail-toprow'>
        <img
          src={`${process.env.REACT_APP_GREMS_API}/products/photo/${product._id}`}
          alt='Cobbler Jar Image'
          className='product-img'
        />
        <div className='product-text-wrapper'>
          <h2 className='product-text-wrapper-title'>{product.name}</h2>
          <div className='product-text-wrapper-price'>
            {formatCurrency(product.price)}
          </div>
          <p className='product-text-wrapper-desc'>{product.description}</p>
          <div className='product-text-wrapper-quantity'>
            <input className='quantity-input' type='number' />
            <button className='add-to-cart'>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
