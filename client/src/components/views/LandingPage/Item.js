import React from 'react';
import './css.css';
import { Menu } from 'antd';
const Item = ({id,title,context,checked,date}) => {
  return (
    <div className="item-container">
      <div className="title">item{id} : {title}</div>
      <div className="text">
        {context}
      </div>
    </div>
  );
};

export default Item;