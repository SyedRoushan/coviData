import React, { useState, useEffect } from "react";
import axios from "axios";

//Creating a functional StateData component to display statewise data
function StateData(props) {

    //Defining the Server URL where the requests are to be sent
    const url = "http://localhost:4000";

    //Initializing a Stateful result var object to store the result
    const [result, setResult] = useState("");

    //Loading the state data on the page load using useEffect and defining the dependency array
    useEffect(() => {
        axios.post(`${url}/get/state`, props.match.params).then(res => setResult(res.data)).catch(err => console.log(err));
    }, [props.match.params]);

    //HTML to be rendered when component is called
    return <div className="container">
        <h1 className="state-title">{props.match.params.state}</h1>
        <h1 className="state-result">{result}</h1>
    </div>
}
export default StateData;