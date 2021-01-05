import React from "react";
import { Link } from "react-router-dom";
import Work from "./Work";
import "./Experience.css";

const WorkExperience = () => {
  const jobs = [
    {
      company: "Morgan Stanley",
      title: "Software Engineering Co-op",
      startDate: "September 2020",
      endDate: "December 2020",
      description:
        "Collaborated with product managers and designers to deliver enhanced web experiences to over 100,000 monthly users.",
      skills: [
        "Javascript",
        "ReactJS",
        "HTML/CSS",
        "Java",
        "JSP",
        "GWT",
        "API Development",
      ],
    },

    {
      company: "Cinchy",
      title: "Platform Developer Co-op",
      startDate: "January 2020",
      endDate: "April 2020",
      description:
        "Spearheaded the development of a performance benchmarking tool in C++ to provide an quantitative measurement of the platform's capabilities.",
      skills: ["C++", "C#", "Java"],
    },
    {
      company: "Cinchy",
      title: "AR Developer Co-op",
      startDate: "June 2019",
      endDate: "August 2019",
      description:
        "Developed an augmented reality data visualizer capable of processing file and web data for use with the core Cinchy software.",
      skills: ["C#", "Unity 3D", "Augmented Reality Development"],
    },
  ];

  return (
    <header className="header">
      <h1>Work Experience</h1>
      <div>
        {jobs.map((job) => (
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
          <Link to="/volunteer-experience" className="link">
            volunteer & leadership experience
          </Link>
          !
        </div>
      </div>
    </header>
  );
};

export default WorkExperience;
