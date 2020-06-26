import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { formatCurrency } from '../../../helpers';

import api from '../../../api';

const RelatedProducts = ({ productId }) => {
  const [products, setProducts] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const _products = await api.getProducts();
    if (!_products.error) console.log(_products.error);
    setProducts(_products);
  };

  const getRelatedProducts = () => {
    console.log({ productId, products });
    return products.products
      .filter((p) => p._id !== productId)
      .map((p, idx) => {
        return (
          <div
            key={idx}
            className='products-item'
            onClick={() => history.push(`/product/${productId}`)}
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

  if (!products) return <div>Loading Related Products...</div>;

  return <div>{getRelatedProducts()}</div>;
};

export default RelatedProducts;
