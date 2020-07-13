import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { formatCurrency } from '../../../helpers';

import api from '../../../api';

import './ProductList.scss';

const ProductList = () => {
  const [_products, set_products] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const products = await api.getProducts();
      console.log({ products });
      if (products.error) console.log({ ERROR: products.error });
      set_products(products);
    } catch (err) {
      console.log({ err });
    }
  };

  const getProductDetail = (productId) => {
    history.push(`/product/${productId}`);
  };

  const { products } = _products;

  const renderProducts = () => {
    return products.map((p, idx) => {
      return (
        <div
          key={idx}
          className='products-item'
          onClick={() => getProductDetail(p._id)}
        >
          <img
            className='products-item-img'
            src={`${process.env.REACT_APP_GREMS_API}/products/photo/${p._id}`}
            alt='Peach Cobbler in Jar'
          />
          <h3 className='products-item-name'>{p.name}</h3>
          <p className='products-item-desc'>{p.description}</p>
          <p className='products-item-price'>{formatCurrency(p.price)}</p>
        </div>
      );
    });
  };

  if (!products) return <div>Loading products...</div>;

  return <section className='products'>{renderProducts()}</section>;
};

export default ProductList;
