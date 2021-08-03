import React from "react";
import { Link } from "react-router-dom";

//Creating a functional Navigation bar component 
function NavBar() {

    //HTML to be rendered when component is called
    return <div>
        <nav>
            <Link style={{ textDecoration: 'none' }} to="/"><h1 className="title">COVI<span>Data</span></h1></Link>
            <ul>
                <Link style={{ textDecoration: 'none' }} to="/add"><li className="nav-links"><b>Add Record</b></li></Link>
                <Link style={{ textDecoration: 'none' }} to="/update"><li className="nav-links"><b>Update Record</b></li></Link>
                <Link style={{ textDecoration: 'none' }} to="/states"><li className="nav-links"><b>State Data</b></li></Link>
                <Link style={{ textDecoration: 'none' }} to="/delete"><li className="nav-links"><b>Delete Records for a State</b></li></Link>
                <Link style={{ textDecoration: 'none' }} to="/date/state"><li className="nav-links"><b>Get by Date and State</b></li></Link>
                <Link style={{ textDecoration: 'none' }} to="/cases"><li className="nav-links"><b>Get by Number of Cases</b></li></Link>
            </ul>
        </nav>
    </div>
}
export default NavBar;