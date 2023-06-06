import React from 'react';
import './Description.css';

function Description({ description, setDescription }) {
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="description">
      <h2>4. Tell us about yourself</h2>
      <textarea value={description} onChange={handleDescriptionChange} placeholder="Describe yourself here..." />
    </div>
  );
}

export default Description;