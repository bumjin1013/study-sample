import React from 'react';
import './css.css';
import Item from './Item';
import { List, Typography, Divider } from 'antd';

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
      <List
      header={<div>ItemList Template</div>}
      bordered
      dataSource={itemList}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>title : {item.props.text}</Typography.Text> {item}
        </List.Item>
      )}
    />
      
    </div>
  );
};

export default ItemList;