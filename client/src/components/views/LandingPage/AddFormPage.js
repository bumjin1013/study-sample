import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const AddFormPage = ({addTodoSubmit}) => {
  const submitForm = (e) => {
    	e.preventDefault();
      addTodoSubmit(true)
  }

  return (
    <Form layout="vertical"  >
      <Form.Item label="Field A" required>
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Field B"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={submitForm}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

// ReactDOM.render(<AddFormPage />, mountNode);
export default AddFormPage;