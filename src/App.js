import Form from "./components/Form";
import Popup from "./components/Popup";
import { useState } from "react";
import "./App.css";

function App() {
  const [popupDisplay, setPopupDisplay] = useState(false);
  const [jobs, updateJobs] = useState([]);

  const addJob = (jobInfo) => {
    updateJobs([...jobs, jobInfo]);
  };
  console.log(jobs);

  return (
    <div className="App">
      <h1>Create a CV</h1>
      <button onClick={() => setPopupDisplay(true)}>Get Started</button>
      <Popup trigger={popupDisplay} setTrigger={setPopupDisplay}>
        <Form />
      </Popup>
    </div>
  );
}

export default App;
