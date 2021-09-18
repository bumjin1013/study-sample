import React, { useState, useEffect } from 'react';
import { FaCode } from "react-icons/fa";
import axios from 'axios';
import './LandingPage.css'
import ItemList from './ItemList';

function LandingPage() {
    const [itemList, setItemList] = useState([]);
    // const [count, setCount] = useState(0);
    // let body = {
    //     userEmail: 'selina2000@naver.com'
    // }
    
    // const [User, setUser] = useState();

    // const getUserInfo = () => {
    //     axios.get("/api/users/getUser").then((response) => {
    //         if (response.data) {
    //             setUser(response.data.email); 
    //             console.log(response.data.email)
    //         } else {
    //           alert("err");
    //         }
    //       });
    // }
    
    function Clicked() {
        setItemList([ {id : 0, text: '기본 todo1', checked : false},
        {id : 1, text: '기본 todo2', checked : true},
        {id : 2, text: '기본 todo3', checked : false},]);
    }
    return (
        <>
            <div className="app">
                {/* <FaCode style={{ fontSize: '4rem' }} /><br /> */}
                {/* <button onClick={getUserInfo}>유저 정보 불러오기</button> */}
                <section className="section-list main-section">
                    <ItemList items={itemList} />
                </section>
                <section className="detail main-section">Detail Page
                <button onClick={Clicked}>button</button>
                </section>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
        </>
    )
}

export default LandingPage
