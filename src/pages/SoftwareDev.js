import React from "react";
import ProjectRenderer from "../components/Wrapper/ProjectRenderer";
import ResumeProjects from "../assets/ResumeProjects";

export default () => {
  return (
    <div className="container p-5 my-2">
      <h1 className="mb-5">My Computer Science Projects</h1>
      <div className="d-flex flex-row flex-wrap ">
        <ProjectRenderer
          data={ResumeProjects.filter((el) => el.type === "cs")}
        />
      </div>
    </div>
  );
};
