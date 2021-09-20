import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import axios from "axios";
import "./LandingPage.css";
import ItemList from "./ItemList";

function LandingPage() {
    const [itemList, setItemList] = useState([
        { id: 0, title: "기본 todo1", context: "context", checked: false ,date:"2021-09-15"},
        { id: 1, title: "기본 todo2", context: "context", checked: true,date:"2021-09-16" },
        { id: 2, title: "기본 todo3", context: "context", checked: false,date:"2021-09-17" },
    ]);
    const [itemCount, setItemCount] = useState(3);
    const [Title, setTitle] = useState("title");
    const [Date, setDate] = useState("2021-22-22");
    const [Context, setContext] = useState("내용");
    const [Checked, setChecked] = useState();

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
    const addTodo = () => {
        setItemList([...itemList,{ id: itemCount, title: "기본 todo3", context: "context", checked: false,date:"2021-09-17" }]);
        setItemCount(itemCount+1);
    }
   

    return (
        <>
            <div className="app">
                <section className="section-list main-section">
                    <ItemList items={itemList} />
                </section>
                <section className="detail main-section">
                    Detail Page
                    <button onClick={addTodo}>button</button>
                </section>
            </div>
            <div style={{ float: "right" }}>
                Thanks For Using This Boiler Plate by John Ahn
            </div>
        </>
    );
}

export default LandingPage;
