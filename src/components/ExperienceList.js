function ExperienceList({ experience }) {
  return (
    <div>
      {experience.map((job) => (
        <div className="job-container" key={job.title}>
          <p>{job.title}</p>
          <p>{job.company}</p>
          <p>{job.start}</p>
          <p>{job.end}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceList;
