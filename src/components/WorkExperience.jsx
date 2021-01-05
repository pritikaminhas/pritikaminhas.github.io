import React from "react";
import { Link } from "react-router-dom";
import Work from "./Work";
import "./Experience.css";

const WorkExperience = () => {
  const jobs = [
    {
      company: "Morgan Stanley",
      title: "Software Engineer",
      startDate: "09/2020",
      endDate: "12/2020",
      description:
        "Collaborated with product managers and designers to deliver new features for a webpage accessed over 100,000 times monthly.",
      skills: ["Javascript", "ReactJS", "HTML/CSS", "Java", "API Development"],
    },

    {
      company: "Cinchy",
      title: "Platform Developer",
      startDate: "01/2020",
      endDate: "04/2020",
      description:
        "Spearheaded the development of a performance benchmarking tool in C++ to provide a quantitative measurement of the platform's capabilities.",
      skills: ["C++", "C#", "Java"],
    },
    {
      company: "Cinchy",
      title: "AR Developer",
      startDate: "06/2019",
      endDate: "08/2019",
      description:
        "Developed an augmented reality data visualizer capable of processing file and web data for use with the core Cinchy software.",
      skills: ["C#", "Unity 3D", "Augmented Reality Development"],
    },
  ];

  return (
    <header className="header">
      <h1>Work Experience</h1>
      <div>
        {jobs.map((job, index) => (
          <Work
            key={job + index}
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
