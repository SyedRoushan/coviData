import React from "react";
import AddForm from "./components/AddForm";
import DeleteStateData from "./components/DeleteStateData";
import DateState from "./components/DateState";
import CasesSingleDay from "./components/CasesSingleDay";
import States from "./components/States";
import StateData from "./components/StateData";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Creating a functional App component 
function App() {

  //HTML to be rendered when component is called
  return (
    //Router componenet to route to specific routes
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddForm} />
          <Route path="/update" component={AddForm} />
          <Route path="/states" exact component={States} />
          <Route path="/states/:state" component={StateData} />
          <Route path="/delete" component={DeleteStateData} />
          <Route path="/date/state" component={DateState} />
          <Route path="/cases" component={CasesSingleDay} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;