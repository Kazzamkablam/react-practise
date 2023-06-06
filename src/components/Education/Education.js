import React from 'react';
import './Education.css';

function Education({ educations, setEducations, handleDataChange }) {

  const handleEducationChange = (event, index) => {
    const { name, value } = event.target;
    handleDataChange('educations', index, { ...educations[index], [name]: value });
  };

  const handleAddEducation = () => {
    setEducations(prevEducations => [...prevEducations, { institution: '', degree: '', startDate: '', endDate: '', error: false }]);
  };

  const handleRemoveEducation = (index) => {
    setEducations(prevEducations => prevEducations.filter((_, i) => i !== index));
  };

  return (
    <div className="education">
      <h2>3. Education</h2>
      {educations.map((education, index) => (
        <div key={index}>
          <input
            name="institution"
            value={education.institution}
            onChange={(e) => handleEducationChange(e, index)}
            placeholder="Institution"
            className="input-field"
          />
          <input
            name="degree"
            value={education.degree}
            onChange={(e) => handleEducationChange(e, index)}
            placeholder="Degree"
            className="input-field"
          />
          <input
            name="startDate"
            type="date"
            value={education.startDate}
            onChange={(e) => handleEducationChange(e, index)}
            className={`input-field ${education.error ? 'input-error' : ''}`}
          />
          <input
            name="endDate"
            type="date"
            value={education.endDate}
            onChange={(e) => handleEducationChange(e, index)}
            className={`input-field ${education.error ? 'input-error' : ''}`}
          />
          <button className="remove-button" onClick={() => handleRemoveEducation(index)}>Remove</button>
        </div>
      ))}
      <button className="add-button" onClick={handleAddEducation}>Add another education</button>
    </div>
  );
}

export default Education;