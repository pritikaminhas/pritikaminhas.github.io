import React from "react";
import { Link } from "react-router-dom";
import Work from "./Work";
import "./Experience.css";

const VolunteerExperience = () => {
  const roles = [
    {
      company: "UW Women in Engineering Society",
      title: "Director",
      startDate: "November 2020",
      endDate: "Present",
      description:
        "Promoting equity in engineering, spearheading event planning focused on career development and inclusivity, and working with various departments within the Engineering Faculty to improve retention rate of women in engineering. ",
    },
    {
      company: "UW Engineering Society",
      title: "First Year Mentor",
      startDate: "September 2019",
      endDate: "Present",
      description:
        "Mentoring first year Mechatronics Engineering students to help facilitate their transition into post-secondary, provide emotional and academic support, and help them set viable goals.",
    },

    {
      company: "WEEF",
      title: "Class Representative",
      startDate: "September 2018",
      endDate: "Present",
      description:
        "Allocating thousands of dollars of funding each semester by analyzing upwards of 450 budget proposals based on importance to the engineering community and ability to fulfill guidelines. ",
    },
    {
      company: "Rewriting the Code",
      title: "Student Leader",
      startDate: "May 2020",
      endDate: "August 2020",
      description:
        "Worked within a team of three to host over 30 events for 125 students in a manner that strengthens the community and facilitates professional growth.",
    },
  ];

  return (
    <header className="header">
      <h1>Volunteer & Leadership Experience</h1>
      <div>
        {roles.map((job) => (
          <Work
            company={job.company}
            title={job.title}
            startDate={job.startDate}
            endDate={job.endDate}
            description={job.description}
            skills={job.skills}
          />
        ))}
        <div className="navi">
          Head back to the{" "}
          <Link to="/" className="link">
            landing page
          </Link>{" "}
          or to my{" "}
          <Link to="/work-experience" className="link">
            work experience
          </Link>
          !
        </div>
      </div>
    </header>
  );
};

export default VolunteerExperience;
