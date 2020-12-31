import React from "react";
import "./Header.css";
import Button from "./Button";

const Header = () => {
  const title = <div className="title">pritika minhas</div>;
  const subtitle = (
    <div className="subtitle">
      third year mechatronics engineering student @ uwaterloo
      <br />
      swe @ morgan stanley, currently recruiting for summer 2021 internships
    </div>
  );

  const links = <Button />;

  return (
    <div>
      {title}
      {subtitle}
      {links}
    </div>
  );
};

export default Header;
