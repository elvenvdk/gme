import React, { useState } from 'react';

import './Tabs.scss';

const Tabs = ({
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

  const handleTabLeft = () => {
    setTabs({
      ...tabs,
      left: true,
      right: false,
    });
  };

  const handleTabRight = () => {
    setTabs({
      ...tabs,
      left: false,
      right: true,
    });
  };

  return (
    <div className='tabs'>
      <div className='tabs-tab-row'>
        <div
          className={`tab-left ${left && 'tab-selected'}`}
          onClick={handleTabLeft}
        >
          {tabLeftTitle}
        </div>
        <div
          className={`tab-right ${right && 'tab-selected'}`}
          onClick={handleTabRight}
        >
          {tabRightTitle}
        </div>
      </div>
      <div className='tabs-content'>
        {left ? tabLeftChildren : tabRightChildren}
      </div>
    </div>
  );
};

export default Tabs;
