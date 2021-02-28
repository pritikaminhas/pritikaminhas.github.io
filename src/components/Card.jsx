import React from "react";
import "./Card.css";

const Card = (props: Props) => {
  const { title, company } = props;

  return (
    <div className="cardOutline">
      {title} <br /> @ {company}
    </div>
  );
};

export default Card;
