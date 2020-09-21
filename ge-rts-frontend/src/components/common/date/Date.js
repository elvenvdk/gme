import React from 'react';
import { DatePicker } from 'antd';

const Date = ({ onChange, className, ...rest }) => {
  return (
    <DatePicker
      format='MM/DD/YYYY'
      className={`p-4 my-2 text-lg border rounded-none w-full ${className}`}
      onChange={(date) => onChange(date)}
      allowClear={false}
      {...rest}
    />
  );
};

export default Date;
