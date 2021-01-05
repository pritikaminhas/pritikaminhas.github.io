import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.jsx";
import VolunteerExperience from "./VolunteerExperience.jsx";
import WorkExperience from "./WorkExperience";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/work-experience" component={WorkExperience}></Route>
      <Route
        exact
        path="/volunteer-experience"
        component={VolunteerExperience}
      ></Route>
    </Switch>
  );
};

export default Main;
