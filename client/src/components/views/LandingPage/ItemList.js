import React from 'react';
import './css.css';
import Item from './Item';

const ItemList = ({items}) => {
  const itemList = items.map(({id,checked,text}) => (
    <Item 
    key={id}
      id={id}
      checked={checked}
      text={text}
      />
  ));
  console.log(itemList);
  return (
    <div>
      <h1>ItemList Template</h1>
      {itemList}
    </div>
  );
};

export default ItemList;