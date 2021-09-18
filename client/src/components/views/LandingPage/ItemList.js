import React from 'react';
import './css.css';
import Item from './Item';

const ItemList = () => {


  return (
    <div>
      <h1>ItemList Template</h1>
      <Item count="1">item1</Item>
      <Item count="2">item2</Item>
      <Item count="3">item3</Item>
      <Item count="4">item4</Item>
    </div>
  );
};

export default ItemList;