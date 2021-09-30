import React, { useState, useEffect,forceUpdate } from "react";
import { FaCode } from "react-icons/fa";
import axios from "axios";
import "./LandingPage.css";
import ItemList from "./ItemList";
import DetailPage from './DetailPage';
import AddFormPage from "./AddFormPage";
function LandingPage() {
    const [itemList, setItemList] = useState([
        { id: 0, title: "기본 todo1", context: "context1", checked: false ,date:"2021-09-15"},
        { id: 1, title: "기본 todo2", context: "context2", checked: true,date:"2021-09-16" },
        { id: 2, title: "기본 todo3", context: "context3", checked: false,date:"2021-09-17" },
    ]);
    const [itemCount, setItemCount] = useState(3);
    const [Title, setTitle] = useState("title");
    const [Date, setDate] = useState("2021-22-22");
    const [Context, setContext] = useState("내용");
    const [Checked, setChecked] = useState();
    const [DetailPageSeleted, setDetailPageSeleted] = useState(true);
    const [selectDetail,setSelectDetail ] = useState({});
    //디비 관련
    // const addTodo = () => {
    //     let body = {
    //         title: Title,
    //         date: Date,
    //         context: Context,
    //     };

    //     axios.post("/api/users/addTodo", body).then((response) => {
    //         if (response.data) {
    //             console.log(response.data);
    //         } else {
    //             console.log("err");
    //         }
    //     });
    // };
    const addTodoClick = () => {

				setDetailPageSeleted(false);
    }
    const addTodoSubmitCompelete = ({complete,title,context}) => {
            setDetailPageSeleted(complete);
            setItemList([...itemList,{ id: itemCount, title: title, context: context, checked: false,date:"2021-09-17" }]);
    setItemCount(itemCount+1);
    }
    const handleItemClick = ({id,title,context,checked,date}) => {
        
        setSelectDetail({id,title,context,checked,date});
    }
    const handleItemChange = ({id,newTitle,newContext}) => {
        const newItemList = itemList.slice();
       
        setItemList( newItemList.map(item =>
            
            item.id === id ?{...item,title:newTitle, context:newContext} : item
          ) );
    }
    const handleItemDelete = (id) => {
        const newItemList = itemList.slice();
        setItemList(newItemList.filter((item) => item.id !== id ));
    }
    return (
        <>
            <div className="app">
                <section className="section-list main-section">
                    <div>
                        <button className="btn-add" onClick={addTodoClick}>item add +</button>
                    </div>
                    <ItemList items={itemList} handleItemClick={handleItemClick}/>
                </section>			
                <section className="detail main-section">
										{DetailPageSeleted ?  <DetailPage selectDetail={selectDetail} handleItemChange={handleItemChange} handleItemDelete={handleItemDelete}/> :  <AddFormPage addTodoSubmit={addTodoSubmitCompelete}/> }
                   	
                </section>
            </div>
            <div style={{ float: "right" }}>
                Thanks For Using This Boiler Plate by John Ahn
            </div>
        </>
    );
}

export default LandingPage;
