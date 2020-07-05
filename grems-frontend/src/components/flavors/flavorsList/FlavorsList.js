import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../common/button/Button';
import api from '../../../api';
import './FlavorsList.scss';

const FlavorsList = () => {
  const [_products, set_products] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await api.getProducts();
    console.log({ products });
    if (products.error) console.log(products.error);
    set_products(products);
  };

  const getProductDetail = (productId) => {
    history.push(`/product/${productId}`);
  };

  const { products } = _products;

  const renderProducts = () => {
    return products.map((p, idx) => {
      return (
        <div key={idx} className='flavors-wrapper-item'>
          <h3 className='flavors-wrapper-item-name'>{p.name}</h3>
          <img
            className='flavors-wrapper-item-img'
            src={`${process.env.REACT_APP_GREMS_API}/products/photo/${p._id}`}
            alt="Grandma Emma's Cobbler"
          />
          <p className='flavors-wrapper-item-desc'>{p.description}</p>
          <Button>Buy Now</Button>
        </div>
      );
    });
  };

  if (!products) return <div>Loading flavors...</div>;

  return <section className='flavors-wrapper'>{renderProducts()}</section>;
};

export default FlavorsList;
