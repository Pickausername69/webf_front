import userEvent from '@testing-library/user-event';
import React, {useState} from 'react'
import {User} from '../components/fetchdata.components'

export const CreateNewRow=()=>{
    const[isClicked,setClicked]=useState(false);
    const[getName,setName]=useState("");
    const[getEmail,setEmail]=useState("");
    const[isSuccess, setSuccess]=useState(false);

    const requestOptions = {
        method: 'POST',        
        headers: { 'Accept': 'application/json',
        'Content-Type': 'application/json', },
        body: JSON.stringify({ 
            name: getName,
            email: getEmail
         }),       
    };

    const CreateClick=()=>{
        console.log(requestOptions);
        fetch('http://localhost:9090/demo/add', requestOptions)
        .then(response => response.json())
        .then(x => setSuccess(x));
        setClicked(true);
    

    }

    return <div>
            <label>Name:</label>
            <input type="text" id="fname" name="fname" onChange={evt =>setName(evt.target.value)}></input>
            <label>Email:</label>
            <input type="text" id="femail" name="femail" onChange={evt =>setEmail(evt.target.value)}></input>
            <button type='button' onClick={CreateClick}>Create!</button>
            <p>{isClicked ? (isSuccess ? "New row created!" : "Failed to create row!") : ""}</p>
        </div>
}