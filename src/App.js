// Import the necessary components and hooks from React and the local file system
import React, { useState } from 'react';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import JobExperience from './components/JobExperience/JobExperience';
import Education from './components/Education/Education';
import Description from './components/Description/Description';
import SubmitButton from './components/SubmitButton/SubmitButton';
import './App.css';

// Define the main App component
function App() {
  // Declare state variables to store personal, jobs, educations, and description data
  const [personalData, setPersonalData] = useState({ firstName: '', lastName: '', email: '' });
  const [jobsData, setJobsData] = useState([{ company: '', role: '', startDate: '', endDate: '', error: false }]);
  const [educationsData, setEducationsData] = useState([{ institution: '', degree: '', startDate: '', endDate: '', error: false }]);
  const [descriptionData, setDescriptionData] = useState('');

  // Define a function to update jobs and educations data in the state when changes are made in the respective child components
  const handleDataChange = (dataType, index, newData) => {
    if (dataType === 'jobs') setJobsData(prevData => {
      // Create a new copy of the previous jobs data, update the specific job data, and return the updated data
      const updatedData = [...prevData];
      updatedData[index] = newData;
      return updatedData;
    });
    else if (dataType === 'educations') setEducationsData(prevData => {
      // Create a new copy of the previous educations data, update the specific education data, and return the updated data
      const updatedData = [...prevData];
      updatedData[index] = newData;
      return updatedData;
    });
  };

  // Render the main App component
  return (
    <div className="App">
      {/* Include each child component and pass the necessary props */}
      <PersonalDetails personalData={personalData} setPersonalData={setPersonalData} />
      <JobExperience jobs={jobsData} setJobs={setJobsData} handleDataChange={handleDataChange} />
      <Education educations={educationsData} setEducations={setEducationsData} handleDataChange={handleDataChange} />
      <Description descriptionData={descriptionData} setDescriptionData={setDescriptionData} />
      <SubmitButton
        personalData={personalData}
        jobsData={jobsData}
        educationsData={educationsData}
        descriptionData={descriptionData}
        setJobsData={setJobsData}
        setEducationsData={setEducationsData}
      />
    </div>
  );
}

// Export the App component so it can be used elsewhere
export default App;