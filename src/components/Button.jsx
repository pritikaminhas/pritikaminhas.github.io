import React from "react";
import "./Button.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Button = () => {
  const email = <FaEnvelope className="icon" />;
  const linkedIn = <FaLinkedin className="icon" />;

  return (
    <div>
      <button
        className="button"
        onClick={() =>
          window.open("https://www.linkedin.com/in/pritikaminhas/", "_blank")
        }
      >
        {linkedIn}
      </button>

      <button
        className="button"
        onClick={() => window.open("mailto:hello@pritikaminhas.com")}
      >
        {email}
      </button>
    </div>
  );
};

export default Button;
