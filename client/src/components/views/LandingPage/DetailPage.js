import React, { useState, useEffect } from "react";

import "./css.css";
const DetailPage = ({ selectDetail,handleItemChange,handleItemDelete}) => {
  // 초기화, 나중에 다른 페이지를 만들어야 한다. 
  const [modifyData,setModifyData] = useState({title:selectDetail.title, context:selectDetail.context, modify:false});
  
    if(selectDetail.id === undefined  ) {
        console.log(selectDetail);
        // selectDetail =   { id: 0, title: "기본 todo1", context: "context1", checked: false ,date:"2021-09-15"};
    
    }
   
    const handleSubmit = () => {
      console.log('modify',modifyData);
      handleItemChange({newTitle:modifyData.title,newContext : modifyData.context, id:selectDetail.id});
      selectDetail = undefined;
      console.log(selectDetail);
      setModifyData({...modifyData,modify:false})
    }
    const handleChange = (event) => {
      const { name, value } = event.target;
      setModifyData({ ...modifyData, [name]: value });
    };
    const handleDelete = () => {
      handleItemDelete(selectDetail.id);
    }
        // 다른 item을 클릭하면 수정모드를 종료해야 되는데 어떻게 해야하지   forceUpdate();?
    return (
        <>
        {selectDetail.id === undefined  ?  <DetailInitPage/>
        :<DetailMainPage selectDetail={selectDetail} handleChange={handleChange} handleSubmit={handleSubmit} handleDelete={handleDelete} />
        }
          
        </>
    );
};

const DetailInitPage = () => {
  return (
    <div>
      <h1>Detail Page</h1>
    </div>
  )
}
const DetailMainPage = ({ selectDetail,handleChange,handleSubmit,handleDelete}) => {
  const [mode,setMode] = useState('default');
  const handleClickSubmit = () => {
    setMode('default');
    handleSubmit();
  }
  return (
    <div id="Detail-Page">
    <div className="detail-page-title">
      {/* 기본값을 줄떄 value가 아니고 defaultValue를 사용해야 한다.  */}
        {mode==='modify' ?<input placeholder="input title" name="title" defaultValue={selectDetail.title} onChange={handleChange}/> :`Title : ${selectDetail.title}`}

        <span className="detail-page-date">{selectDetail.date}</span>
        <div className="detail-btns">
          <button onClick={() => setMode('modify')}>modify</button>
          <button onClick={handleDelete}>delete</button>
        </div>
    </div>

    <div className="detail-page-context">
        detail page context Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Aliquid, necessitatibus culpa corrupti error
        doloribus quo repellat optio non debitis voluptas eligendi
        distinctio, natus, exercitationem sint dolor fuga! Facilis,
        atque est!
        <p>
        {mode==='modify' ?<input placeholder="input context" name="context" defaultValue={selectDetail.context} onChange={handleChange}/> :`context : ${selectDetail.context}`}

        </p>
    </div>
    {mode==='modify' ? <button onClick={handleClickSubmit}>submit</button> : '' }
</div>
  );
};

export default DetailPage;
