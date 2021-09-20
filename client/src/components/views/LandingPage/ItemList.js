import React from 'react';
import './css.css';
import Item from './Item';
import { List, Typography, Divider } from 'antd';

const ItemList = ({items}) => {
  const itemList = items.map(({id,title,context,checked,date}) => (
    <Item 
    key={id}
      id={id}
      title={title}
      context={context}
      checked={checked}
      date={date}
      />
  ));
  console.log(itemList);
  return (
    <div>
      <List
      header={<div>ItemList</div>}
      bordered
      dataSource={itemList}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>title : {item.props.title}</Typography.Text> {item}
        </List.Item>
      )}
    />
      
    </div>
  );
};

export default ItemList;