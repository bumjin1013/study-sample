import React, { useState, useEffect } from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios';
import './LandingPage.css'
import ItemList from './ItemList';

function LandingPage() {
    
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
    

    
    return (
        <>
            <div className="app">
                {/* <FaCode style={{ fontSize: '4rem' }} /><br /> */}
                {/* <button onClick={getUserInfo}>유저 정보 불러오기</button> */}
                <section className="section-list main-section">
                    <ItemList/>
                </section>
                <section className="detail main-section">Detail Page</section>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
        </>
    )
}

export default LandingPage
