import React, {useState} from 'react'

export const UpdateRow=()=>{
    const[isClicked,setClicked]=useState(false);
    const[getId,setId]=useState("");
    const[getName,setName]=useState("");
    const[getEmail,setEmail]=useState("");
    const[isSuccess, setSuccess]=useState(false);

    const requestOptions = {
        method: 'PUT',        
        headers: { 'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept" },
        body: JSON.stringify({ 
            id: getId,
            name: getName,
            email: getEmail
         }),       
    };

    const UpdateClick=()=>{
        console.log(requestOptions);
        fetch('http://localhost:9090/demo/update', requestOptions)
        .then(response => response.json())
        .then(x => setSuccess(x));
        setClicked(true);
    

    }

    return <div>
            <label>Update By ID</label><br />
            <label>Id:</label>
            <input type="number" id="fid" name="fid" onChange={evt =>setId(evt.target.value)}></input>
            <label>Name:</label>
            <input type="text" id="fname" name="fname" onChange={evt =>setName(evt.target.value)}></input>
            <label>Email:</label>
            <input type="text" id="femail" name="femail" onChange={evt =>setEmail(evt.target.value)}></input>
            <button type='button' onClick={UpdateClick}>Update!</button>
            <p>{isClicked ? (isSuccess ? "Updated!" : "Failed to update row!") : ""}</p>
        </div>
}