import { useState } from "react";

function ExperienceForm({ addJob }) {
  const [experience, setExperience] = useState({
    title: "",
    company: "",
    start: "",
    end: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addJob(experience);
    setExperience({ title: "", company: "", start: "", end: "" });
  };

  const handleChange = (event) => {
    setExperience({ ...experience, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Work Experience</h1>
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={experience.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={experience.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="start"
            value={experience.start}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="end"
            value={experience.end}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Add Experience</button>
        </div>
      </form>
    </div>
  );
}

export default ExperienceForm;
