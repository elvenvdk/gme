import React, { useEffect, useState } from 'react';

import jarImg from '../../../assets/jarImg.png';
import api from '../../../api';

import './ProductDetail.scss';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});

  const _productId = match.params.productId;

  console.log({ _productId });

  const getProductDetail = async (productId) => {
    const _product = await api.getProduct(productId);
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
        <img src={jarImg} alt='Cobbler Jar Image' className='product-img' />
        <div className='product-text-wrapper'>
          <h2 className='product-text-wrapper-title'>{product.name}</h2>
          <div className='product-text-wrapper-price'>{product.price}</div>
          <p className='product-text-wrapper-desc'>{product.desc}</p>
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
