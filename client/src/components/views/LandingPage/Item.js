import React from 'react';
import './css.css';
import { Menu } from 'antd';
const Item = ({text,id,checked}) => {
  return (
    <div className="item-container">
      <div className="title">item{id}</div>
      <div className="text">
        {text}
      </div>
    </div>
  );
};

export default Item;