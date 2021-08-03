import React, { useState } from "react";
import axios from "axios";

//creating a functional component for deleting data for a state from the Covid collection in mongoDB
function CasesSingleDay() {

    //Defining the Server URL where the requests are to be sent
    const url = "http://localhost:4000";

    //Initializing a Stateful result var object to store the input data
    const [data, setData] = useState({
        cases: 0
    });

    //Initializing a Stateful result var object to store the result
    const [result, setResult] = useState([]);

    //Defining a function to submit the data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("dataaaaa", data);
        //Posting the data to the server to the database
        axios.post(`${url}/date/case`, data).then(res => {
            console.log(res.data);
            setResult(res.data);
        }).catch(err => console.log(err));
    }

    //HTML to be rendered when component is called
    return <form onSubmit={handleSubmit}>

        <div className="container">
            <div className="mb-3">

                <label htmlFor="exampleFormControlInput1" className="form-label">Cases</label>
                <input style={{ width: '300px' }} name="cases" onChange={(e) => {setData({cases: e.target.value}); setResult([])}} value={data.cases} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Cases" />

            </div>
            <button type="submit" className="btn btn-primary">Get Data</button>
            {result.length ? <h4 className="state-title" style={{marginTop: "30px"}}>{`${result.length} Entries with more cases than ${data.cases} in a single day`}</h4> : null }
            {result.map(item => <div key={item._id} className="container"><h5>{item.state}</h5><h6>{item.date}</h6><p>Cases: <b>{item.cases}</b>  -  Deaths: <b>{item.deaths}</b></p></div>)}
        </div>

    </form>
}
export default CasesSingleDay;