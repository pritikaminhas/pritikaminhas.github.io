import React from "react";
import "./Header.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const title = <div className="title">pritika minhas</div>;
  const subtitle = (
    <div className="subtitle">
      third year mechatronics engineering student @ uwaterloo.
    </div>
  );

  const status = (
    <div className="subtitle">
      previously swe @ morgan stanley.
      <br />
      currently searching for summer 2021 internships in software development.
    </div>
  );

  const links = <Button />;

  const blurb = (
    <div className="subtitle">
      <div className="linkSection">
        check out my{" "}
        <Link to="/work-experience" className="mainLink">
          previous internships
        </Link>{" "}
        or{" "}
        <Link to="/volunteer-experience" className="mainLink">
          volunteer & leadership experience
        </Link>
        {"!"}
      </div>
      <div className="linkSection"></div>
    </div>
  );

  return (
    <div>
      {title}
      {subtitle}
      {status}
      {links}
      {blurb}
    </div>
  );
};

export default Header;
