import React from 'react';
import './SubmitButton.css';

function SubmitButton({ personalData, jobsData, educationsData, descriptionData, setJobsData, setEducationsData }) {

    const handleSubmit = () => {
        // Validation
        let isValid = true;

        // Validate jobs
        const validatedJobs = jobsData.map(job => {
            if (new Date(job.startDate) > new Date(job.endDate) || !job.startDate || !job.endDate) {
                isValid = false;
                return { ...job, error: true };
            } else {
                return { ...job, error: false };
            }
        });

        // Validate educations
        const validatedEducations = educationsData.map(education => {
            if (new Date(education.startDate) > new Date(education.endDate) || !education.startDate || !education.endDate) {
                isValid = false;
                return { ...education, error: true };
            } else {
                return { ...education, error: false };
            }
        });

        setJobsData(validatedJobs);
        setEducationsData(validatedEducations);

        if (!isValid) {
            alert('Some dates are invalid. Please correct them before submitting.');
        } else {
            alert('Form submitted successfully!');
        }
    };

    return (
        <div className="submit-button">
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SubmitButton;