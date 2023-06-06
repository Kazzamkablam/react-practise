import React from 'react';
import './JobExperience.css';

function JobExperience({ jobs, setJobs, handleDataChange }) {

  const handleJobChange = (event, index) => {
    const { name, value } = event.target;
    handleDataChange('jobs', index, { ...jobs[index], [name]: value });
  };

  const handleAddJob = () => {
    setJobs(prevJobs => [...prevJobs, { company: '', role: '', startDate: '', endDate: '', error: false }]);
  };

  const handleRemoveJob = (index) => {
    setJobs(prevJobs => prevJobs.filter((_, i) => i !== index));
  };

  return (
    <div className="job-experience">
      <h2>2. Job Experience</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <input
            name="company"
            value={job.company}
            onChange={(e) => handleJobChange(e, index)}
            placeholder="Company"
            className="input-field"
          />
          <input
            name="role"
            value={job.role}
            onChange={(e) => handleJobChange(e, index)}
            placeholder="Role"
            className="input-field"
          />
          <input
            name="startDate"
            type="date"
            value={job.startDate}
            onChange={(e) => handleJobChange(e, index)}
            className={`input-field ${job.error ? 'input-error' : ''}`}
          />
          <input
            name="endDate"
            type="date"
            value={job.endDate}
            onChange={(e) => handleJobChange(e, index)}
            className={`input-field ${job.error ? 'input-error' : ''}`}
          />
          <button className="remove-button" onClick={() => handleRemoveJob(index)}>Remove</button>
        </div>
      ))}
      <button className="add-button" onClick={handleAddJob}>Add another job</button>
    </div>
  );
}

export default JobExperience;