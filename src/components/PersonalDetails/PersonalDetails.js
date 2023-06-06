// Import React and the useState hook
import React, { useState } from 'react';
// Import the CSS file for this component
import './PersonalDetails.css';

// Define the PersonalDetails component
function PersonalDetails() {
  // Define a new state variable 'person' with initial state as an object with empty strings
  const [person, setPerson] = useState({ name: '', email: '', phone: '' });

  // Function to handle changes in the input fields
  const handlePersonChange = (e) => {
    // Use the spread operator to copy the current state,
    // then update the changed field with the new value
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  // Render the component
  return (
    <div className="personal-details">
      <h2>1. Personal Details</h2>
      {/* Bind the input fields to the corresponding state variables and set the onChange handler */}
      <input name='name' value={person.name} onChange={handlePersonChange} placeholder='Name' />
      <input name='email' value={person.email} onChange={handlePersonChange} placeholder='Email' />
      <input name='phone' value={person.phone} onChange={handlePersonChange} placeholder='Phone' />
    </div>
  );
}

// Export the component so it can be imported and used in other files
export default PersonalDetails;