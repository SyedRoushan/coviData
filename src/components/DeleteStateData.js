import React, { useState } from "react";
import axios from "axios";

//creating a functional component for deleting data for a state from the Covid collection in mongoDB
function DeleteStateData() {

    //Defining the Server URL where the requests are to be sent
    const url = "http://localhost:4000";

    //Initializing a Stateful result var object to store the input data
    const [data, setData] = useState({ state: "" });

    //Initializing a Stateful result var object to store the result
    const [result, setResult] = useState("");


    //Defining a function to submit the data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        //Posting the data to the server to the database
        axios.post(`${url}/delete`, data).then(res => {
            console.log(res);
            setResult(res.data);
        }).catch(err => console.log(err));
    }

    //HTML to be rendered when component is called
    return <form onSubmit={handleSubmit}>

        <div className="container">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">State</label>
                <input style={{ width: '300px' }} name="state" onChange={(e) => { setData({ state: e.target.value }); setResult("") }} value={data.state} type="text" className="form-control" id="exampleFormControlInput1" placeholder="State with first letter capital" />
            </div>
            <button type="submit" className="btn btn-primary">Delete Data</button>
            <h5 style={{ marginTop: "30px" }}>{result}</h5>
        </div>

    </form>
}
export default DeleteStateData;