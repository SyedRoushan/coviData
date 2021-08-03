import React from "react";
import HomeCard from "./HomeCard";

//Creating a functional Home page component 
function Home() {

    //HTML to be rendered when component is called
    //Passing props to each instance of a componenet for reuseability
    return <div className="home-container">
        <HomeCard route="/add" heading="Add Record" description="Add Record for a state with number of cases and deaths" />
        <HomeCard route="/update" heading="Update Record" description="Update Record for a state with number of cases and deaths" />
        <HomeCard route="/states" heading="State Data" description="Get number of cases and deaths in total for a specific state" />
        <HomeCard route="/delete" heading="Delete Records for a State" description="Delete Records for a specific state" />
        <HomeCard route="/date/state" heading="Get by Date and State" description="Get Records for a specific state on any date" />
        <HomeCard route="/cases" heading="Get by Number of Cases" description="Get States with more registered cases than given on a single day" />
    </div>
}
export default Home;