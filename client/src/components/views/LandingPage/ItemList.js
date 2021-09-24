import React from 'react';
import './css.css';
import { List, Typography, Divider,Menu } from 'antd';

const ItemList = ({items,handleItemClick}) => {

  const itemList = items.map(({id,title,context,checked,date}) => (
    <li key={`item_${id}_li`} className="item-li">
      <Item 
    key={id}
      id={id}
      title={title}
      context={context}
      checked={checked}
      date={date}
      handleItemClick={handleItemClick}
      />
    </li>
  ));
  console.log(itemList);
  
  return (
    <div>
      {itemList}
    </div>
  );
};

const Item = ({id,title,context,checked,date,handleItemClick}) => {
  const handleClick = () => {
    handleItemClick({id,title,context,checked,date});
  }
  return (
    <div className="item-container" onClick={handleClick}>
      <div className="title">{title}</div>
      <div className="text">
      item{id} <br/>
        {context}
      </div>
    </div>
  );
};



export default ItemList;