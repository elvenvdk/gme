import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setGlobal } from 'reactn';

import api from '../../../api';

import './ProductList.scss';

const ProductList = () => {
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

  console.log({ _products });

  const { products } = _products;

  const renderProducts = () => {
    return products.map((p, idx) => {
      console.log({ id: p._id });

      return (
        <section
          className='products'
          onClick={() => getProductDetail(p._id)}
          key={idx}
        >
          <div className='products-item'>
            <img
              className='products-item-img'
              src={`${process.env.REACT_APP_GREMS_API}/products/photo/${p._id}`}
              alt='Peach Cobbler in Jar'
            />
            <h3 className='products-item-name'>{p.name}</h3>
            <p className='products-item-desc'>{p.description}</p>
            <p className='products-item-price'>{p.price}</p>
          </div>
        </section>
      );
    });
  };

  if (!products) return <div>Loading products...</div>;

  return <>{renderProducts()}</>;
};

export default ProductList;
