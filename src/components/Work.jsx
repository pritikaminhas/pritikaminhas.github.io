/* @flow */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "./Work.css";

type Props = {
  company: string,
  title: string,
  startDate: string,
  endDate: string,
  description: string,
  id: string,
  skills?: [],
};

const Work = (props: Props) => {
  const { company, title, startDate, endDate, description, skills } = props;

  const briefcase = <FontAwesomeIcon icon={faBriefcase} />;
  const building = <FontAwesomeIcon icon={faBuilding} />;
  const calendar = <FontAwesomeIcon icon={faCalendar} />;

  return (
    <div className="container">
      <div className="iconCustom">
        {briefcase} <br />
        {building} <br />
        {calendar}
      </div>
      <div className="text">
        {title} <br />
        {company} <br />
        {startDate} - {endDate}
      </div>
      <div className="text">
        {description} <br />{" "}
        {skills ? (
          <div className="text">
            {skills.map((skill) => (
              <span className="tag">{skill}</span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Work;
