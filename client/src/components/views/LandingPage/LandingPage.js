import React, { useState, useEffect } from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios';

function LandingPage() {
    
    const [Title, setTitle] = useState('title');
    const [Date, setDate] = useState('2021-22-22');
    const [Context, setContext] = useState('내용');
    const [Checked, setChecked] = useState();


    const addTodo = () => {

        let body = {
            title : Title,
            date : Date,
            context: Context,
        }

        axios.post("/api/users/addTodo", body)
            .then(response => {
                if(response.data){
                    console.log(response.data);
                } else {
                    console.log('err');
                }
            })
    }
    
    return (
        <>
            <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <button  onClick={addTodo}> add</button>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
           
            
        </>
    )
}

export default LandingPage
