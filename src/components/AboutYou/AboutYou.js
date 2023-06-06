import React, { useState } from 'react';

function AboutYou() {
  const [about, setAbout] = useState('');

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  return (
    <div>
      <h2>4. Tell us about yourself</h2>
      <textarea name='about' value={about} onChange={handleAboutChange} placeholder='About yourself'></textarea>
    </div>
  );
}

export default AboutYou;