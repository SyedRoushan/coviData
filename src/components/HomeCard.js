import React from "react";
import { Link } from "react-router-dom";

//Creating a functional card component for homepage
function HomeCard(props) {

    //HTML to be rendered when component is called
    return <Link style={{ textDecoration: 'none' }} to={props.route}>
        <div className="card">
            <h5 className="card-headings">{props.heading}</h5><p className="heading-description">{props.description}</p>
        </div>
    </Link>
}
export default HomeCard;