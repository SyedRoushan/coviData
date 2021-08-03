import React from "react"
import { Link } from "react-router-dom";

//Creating a functional States component 
function States() {

    //Initializing a states array to display all the US states on the page
    const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

    //HTML to be rendered when component is called
    return <div className="container">
        <h4 className="state-title" style={{ margin: "20px 0", fontWeight: "boldest" }}>Select State to view data</h4>
        {states.map((state, index) => <Link className="state-result" style={{ textDecoration: 'none', fontWeight: "bold" }} key={index} to={`/states/${state}`}><h5>{state}</h5></Link>)}
    </div>
}
export default States;