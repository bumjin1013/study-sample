import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const AddFormPage = ({addTodoSubmit}) => {
  const [formData,setFormData] = useState({title:'',context:''});
  const submitForm = (e) => {
    	e.preventDefault();
      console.log(formData);
      addTodoSubmit({complete:true,...formData})
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Form layout="vertical"  >
      <Form.Item label="title"  required  onChange={handleChange} >
        <Input placeholder="input title" name="title"/>
      </Form.Item>
       <Form.Item label="context"  onChange={handleChange} >
        <Input.TextArea name="context" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={submitForm}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

// ReactDOM.render(<AddFormPage />, mountNode);
export default AddFormPage;