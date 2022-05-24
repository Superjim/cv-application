import { createContext } from "react";
import { useState } from "react";

const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [jobs, updateJobs] = useState([
    {
      title: "context title",
      company: "context company",
      start: "st",
      end: "end",
    },
  ]);

  console.log(jobs);

  return (
    <ExperienceContext.Provider value={{ jobs }}>
      {children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContext;
