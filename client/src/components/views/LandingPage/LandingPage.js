import React, { useState, useEffect } from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios';

function LandingPage() {
    
    let body = {
        userEmail: 'selina2000@naver.com'
    }
    
    const [User, setUser] = useState();

    const getUserInfo = () => {
        axios.get("/api/users/getUser").then((response) => {
            if (response.data.success) {
                setUser(response.data); 
            } else {
              alert("err");
            }
          });

          console.log(User);
    }
    

    
    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <button onClick={getUserInfo}>유저 정보 불러오기</button>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
        </>
    )
}

export default LandingPage
