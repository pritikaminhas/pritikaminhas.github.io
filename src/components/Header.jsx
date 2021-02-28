import React from "react";
import "./Header.css";
import Button from "./Button";

const Header = () => {
  const title = <div className="title">pritika minhas</div>;
  const subtitle = (
    <div className="subtitle">
      third year mechatronics engineering @ uwaterloo.
    </div>
  );

  const status = (
    <div className="subtitle">
      currently designing @ develop for good. <br />
      usually on the hunt for internships in software dev. <br />
    </div>
  );

  const links = <Button />;

  const wip = "more coming soon.";

  return (
    <div>
      {title}
      {subtitle}
      {status}
      {links}
      <br />
      {wip}
    </div>
  );
};

export default Header;
