import React from 'react';
import CustomizeOptions from '../customizeOptions/CustomizeOptions';
import OrderSection from '../orderSection/OrderSection';
import './Flavors.scss';
import FlavorsList from './flavorsList/FlavorsList';

const Flavors = () => {
  return (
    <div className='flavors'>
      <h1 className='flavors-header'>Current Flavors</h1>
      <p className='flavors-headertext'>
        The following flavors are currently availble for purchase online,please
        note that the flavors shown here may not all be available at our retail
        outlets.
      </p>
      <FlavorsList />
      <CustomizeOptions />
      <OrderSection />
    </div>
  );
};

export default Flavors;
