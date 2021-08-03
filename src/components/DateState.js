import React, { useState } from "react";
import axios from "axios";

//creating a functional component for deleting data for a state from the Covid collection in mongoDB
function DateState() {

    //Defining the Server URL where the requests are to be sent
    const url = "http://localhost:4000";

    //Initializing a Stateful result var object to store the input data
    const [data, setData] = useState({
        date: "",
        state: ""
    });

    //Initializing a Stateful result var object to store the result
    const [result, setResult] = useState([]);


    //Defining a funtion to handle change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
        //Resetting the result for next search
        setResult([]);
    }

    //Defining a function to submit the data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("dataaaaa", data);
        //Posting the data to the server to the database
        axios.post(`${url}/date/state`, data).then(res => {
            console.log(res.data);
            setResult(res.data);
            if(res.data.length === 0){
                alert(`No Entries found for ${data.state} on ${data.date}`);
            }
        }).catch(err => console.log(err));

    }

    //HTML to be rendered when component is called
    return <form onSubmit={handleSubmit}>

        <div className="container">
            <div className="mb-3">

                <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                <input style={{ width: '300px' }} name="date" onChange={handleChange} value={data.date} type="text" className="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YYYY" />
                <label htmlFor="exampleFormControlInput1" className="form-label">State</label>
                <input style={{ width: '300px' }} name="state" onChange={handleChange} value={data.state} type="text" className="form-control" id="exampleFormControlInput1" placeholder="State with first letter capital" />

            </div>
            <button type="submit" className="btn btn-primary">Get Data</button>
            {/* <h1>{data.state} {data.date}</h1>
            {result.map(item => <p key = {item._id}>{`Date: ${item.date} State: ${item.state} Cases: ${item.cases} Deaths: ${item.deaths}`}</p>)} */}

            {result.length ? <h4 className="state-title" style={{marginTop: "30px"}}>{`Entries for ${data.state} on ${data.date}`}</h4> : null }
            {/* {result.length == 0 ? <h4 style={{marginTop: "30px"}}>{`No Entries found for ${data.state} on ${data.date}`}</h4> : null } */}
            {/* {result.map(item => <p>{`On: ${item.date}  -  In: ${item.state}  -  Cases: ${item.cases}  -  Deaths: ${item.deaths}`}</p>)} */}
            {result.map(item => <div key={item._id} className="container"><h5>{item.state}</h5><h6>{item.date}</h6><p>Cases: <b>{item.cases}</b>  -  Deaths: <b>{item.deaths}</b></p></div>)}
        </div>

    </form>
}
export default DateState;