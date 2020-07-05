import React, { useEffect, useState } from 'react';

import RelatedProducts from '../relatedProducts/RelatedProducts';
import Tabs from '../../common/tabs/Tabs';
import { formatCurrency } from '../../../helpers';

import api from '../../../api';

import './ProductDetail.scss';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);

  const _productId = match.params.productId;

  console.log({ _productId });

  const getProductDetail = async () => {
    const _product = await api.getProduct(_productId);
    console.log({ _product });
    setProduct(_product);
  };

  useEffect(() => {
    getProductDetail();
  }, [_productId]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
  };

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
            <input
              className='quantity-input'
              type='number'
              onChange={(e) => handleQuantityChange(e)}
              value={quantity}
            />
            <button className='add-to-cart'>Add To Cart</button>
          </div>
        </div>
      </div>
      <section className='product-desc-reviews'>
        <Tabs
          tabLeftTitle='Description'
          tabRightTitle='Reviews'
          tabLeftChildren={
            <>
              <section className='product-description'>
                <h2 className='product-description-header'>Description</h2>
                <p>{product.description}</p>
              </section>
              <section className='related-section'>
                <h2 className='related-section-header'>Related Products</h2>
                <RelatedProducts productId={_productId} />
              </section>
            </>
          }
          tabRightChildren={<div>No Reviews Yet</div>}
        />
      </section>
    </div>
  );
};

export default ProductDetail;
