import React, { useRef } from "react";
import ResumeHeader from "../components/ResumeSections/ResumeHeader";
import ResumeSkills from "../components/ResumeSections/ResumeSkills";
import ResumeProjects from "../components/ResumeSections/ResumeProjects";
import ResumeEducation from "../components/ResumeSections/HistorySection";
import EducationExperience from "../assets/EducationExperience";
import JobExperience from "../assets/JobExperience";
import SkillsExperience from "../assets/SkillsExperience";
import ReactToPrint from "react-to-print";
import { MDBBtn } from "mdb-react-ui-kit";
import DownloadIcon from "@mui/icons-material/Download";
import resumeProjects from "../assets/ResumeProjects";

export default () => {
  let componentRef = useRef(null);
  return (
        /*d-flex  flex-column flex-lg-row justify-content-lg-center align-items-lg-center  my-lg-5*/
    <div className=" w-100 h-100 container-lg my-5 px-2  mx-lg-0 p-lg-0">
      <div className="resumeBG w-100" ref={(el) => (componentRef = el)}>
        <ResumeHeader />

        <div className="px-lg-3 divColVMain">
          <div className=" d-flex  flex-column flex-lg-row justify-content-lg-between ">
            <div className="w-100 divColH px-3 mx-1">
              <ResumeEducation data={EducationExperience} title="Education" hrDiv={{color: "#0d53ce", size: "8rem"}}/>
              <ResumeEducation data={JobExperience} title="Job Experience" hrDiv={{color: "#0d53ce", size: "12rem"}}/>
            </div>
            <div className="w-100 px-3">
              <ResumeSkills data={SkillsExperience} hrDiv={{color: "#0d53ce", size: "5rem"}}/>
            </div>
          </div>
          <div className="divColV mt-2 px-3">
            <ResumeProjects data={resumeProjects} hrDiv={{color: "#0d53ce", size: "7rem"}}/>
          </div>
        </div>

      </div>
          <ReactToPrint
                trigger={() => {
                      return (
                            <MDBBtn className="ResumePrint mt-4 mt-lg-3">
                                  Download or Print Resume <DownloadIcon />
                            </MDBBtn>
                      );
                }}
                content={() => componentRef}
          />
   </div>
  );
};
