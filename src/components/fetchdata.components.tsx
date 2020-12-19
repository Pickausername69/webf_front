import React, {useState} from 'react'
export interface User{
    id: number
    name: string
    email: string
}


export const FetchUrl=()=>{

    const [data,setData]=useState<User[] | null>(null);
    const[isFetched,setFetched]=useState(false);
    const[isClicked,setClicked]=useState(false);
    const fetching=()=>{
        console.log("try to fetch");
        fetch('http://localhost:9090/demo/all')
        .then(resp => resp.json())
        .then((fetchedData: User[])=>{
            setData(fetchedData)
            setFetched(true);
            setClicked(true);
        })
        console.log("fetched");
    }

    const renderTable =()=>{
    return <table id='tb' style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                {renderTableHead()}
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
    }

    const renderTableHead=()=>{
        return <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
    }

    const renderTableData =()=> {
        return data?.map((e, index) => {
           const { id, name, email } = e
           return (
              <tr key={id} >
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }

    return <div>
        <button type='button' onClick={fetching}>Fetch</button>
        {isFetched ? renderTable()
          : (isClicked ? <p>Failed</p> : <p></p>)}
        </div>
}