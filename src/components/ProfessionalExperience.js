import React from 'react';
import ExperienceList from './ExperienceList';

function ProfessionalExperience() {
    return (
        <>
            <h2>Professional Experience</h2>
            <ExperienceList titlePlaceholder='Job Title' institutionPlaceholder='Company' />
        </>
    );
};

export default ProfessionalExperience;