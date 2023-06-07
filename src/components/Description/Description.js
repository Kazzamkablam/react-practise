import React from 'react';
import './Description.css';

// Expect 'descriptionData' and 'setDescriptionData' props from the parent component
function Description({ descriptionData, setDescriptionData }) {
  // Function to handle changes in the textarea
  const handleDescriptionChange = (event) => {
    // Update the description data in the state
    setDescriptionData(event.target.value);
  };

  // Render the component
  return (
    <div className="description">
      <h2>4. Tell us about yourself</h2>
      {/* Bind the textarea to the corresponding state variable and set the onChange handler */}
      <textarea value={descriptionData} onChange={handleDescriptionChange} placeholder="Describe yourself here..." />
    </div>
  );
}

// Export the component so it can be imported and used in other files
export default Description;