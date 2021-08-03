import React, { useState } from "react";
import axios from "axios";

//creating a functional component for adding adding data to the Covid collection in mongoDB
function AddForm() {

    //Defining the Server URL where the requests are to be sent
    const url = "http://localhost:4000";

    //Initializing a Stateful data object to store the data
    const [data, setData] = useState({
        date: "",
        state: "",
        cases: 0,
        deaths: 0
    });

    //Initializing a Stateful result var object to store the result
    const [result, setResult] = useState({
        date: "",
        state: "",
        cases: 0,
        deaths: 0
    });

    
    //Defining a funtion to handle change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
        console.log(data);
        //Resetting the result for new search
        setResult("");
    }

    //Defining a function to submit the data
    const handleSubmit = (e) => {
        e.preventDefault();

        //Posting the data to the server to the database
        axios.post(`${url}/post`, data).then(res => {
            console.log(res);
            setResult(res.data);
        }).catch(err => console.log(err));
        setData({
            date: "",
            state: "",
            cases: 0,
            deaths: 0
        });
    }

    //HTML to be rendered when component is called
    return <form onSubmit={handleSubmit}>

        <div className="container">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                <input style={{ width: '300px' }} name="date" onChange={handleChange} value={data.date} type="text" className="form-control" id="exampleFormControlInput1" placeholder="DD/MM/YYYY" />
                <label htmlFor="exampleFormControlInput1" className="form-label">State</label>
                <input style={{ width: '300px' }} name="state" onChange={handleChange} value={data.state} type="text" className="form-control" id="exampleFormControlInput1" placeholder="State with first letter capital" />
                <label htmlFor="exampleFormControlInput1" className="form-label">Cases</label>
                <input style={{ width: '300px' }} name="cases" onChange={handleChange} value={data.cases} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Cases" />
                <label htmlFor="exampleFormControlInput1" className="form-label">Deaths</label>
                <input style={{ width: '300px' }} name="deaths" onChange={handleChange} value={data.deaths} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Deaths" />
            </div>
            <button type="submit" className="btn btn-primary">Add Data</button>
            {result.state ? <div><p style={{ marginTop: "30px" }}>Added record: </p><h5>{result.state}</h5> with date <h6>{result.date}</h6><p>Cases: <b>{result.cases}</b>  -  Deaths: <b>{result.deaths}</b></p></div> : null}
        </div>
    </form>
}
export default AddForm;