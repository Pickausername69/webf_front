import React, {useState} from 'react'

export const DeleteRow=()=>{
    const[isClicked,setClicked]=useState(false);
    const[getId,setId]=useState("");
    const[isSuccess, setSuccess]=useState(false);

    const requestOptions = {
        method: 'DELETE',        
        headers: { 'Accept': 'application/json',
        'Content-Type': 'application/json', },
        body: JSON.stringify({ 
            id: getId,
         }),       
    };

    const UpdateClick=()=>{
        console.log(requestOptions);
        fetch('http://localhost:9090/demo/delete', requestOptions)
        .then(response => response.json())
        .then(x => setSuccess(x));
        setClicked(true);
    

    }

    return <div>
            <label>Delete By ID</label><br />
            <label>Id:</label>
            <input type="number" onChange={evt =>setId(evt.target.value)}></input>
            <button type='button' onClick={UpdateClick}>Delete!</button>
            <p>{isClicked ? (isSuccess ? "Deleted!" : "Failed to delete row!") : ""}</p>
        </div>
}