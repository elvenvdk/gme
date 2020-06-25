import React, { useState } from 'react';

const Tabs = ({
  children,
  tabLeftTitle,
  tabRightTitle,
  tabLeftChildren,
  tabRightChildren,
}) => {
  const [tabs, setTabs] = useState({
    left: true,
    right: false,
  });

  const { left, right } = tabs;

  return (
    <div className='tabs'>
      <div className='tabs-tab-row'>
        <div className='tab-left'>{tabLeftTitle}</div>
        <div className='tab-right'>{tabRightTitle}</div>
      </div>
      <div className='tabs-content'></div>
    </div>
  );
};

export default Tabs;
