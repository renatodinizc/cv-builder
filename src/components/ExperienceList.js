import './professional-exp.css';
import React, { useState } from 'react';
import ExperienceForm from './ExperienceForm';
import ExperienceItem from './ExperienceItem';

function ExperienceList(props) {
    const [isEditing, setEditing] = useState(false);
    const [experiences, setExperiences] = useState([]);

    function createExperience(experience) {
        setExperiences([...experiences, experience]);
        setEditing(false);
    };

    function editExperience(id, editedExperience) {
        const editedExperiences = experiences.map(experience => {
            if (experience.id === id) {
                return experience = editedExperience;
            }
            return experience;
        });
        setExperiences(editedExperiences);
    };

    function deleteExperience(id) {
        const remainingExperiences= experiences.filter(experience => experience.id != id);
        remainingExperiences.map(experience => experience.id = id);
        setExperiences(remainingExperiences);
    };

    function cancelNew() {
        setEditing(false);
    };

    if (isEditing == false) {
        return (
            <>
                {experiences.map(experience => 
                            <div className={'JobExp '+ experience.id}>
                                <ExperienceItem Item id={experience.id} 
                                            title={experience.title} 
                                            institution={experience.institution} 
                                            startDate={experience.startDate}
                                            endDate={experience.endDate}
                                            description={experience.description}
                                            editExperience={editExperience}
                                            deleteExperience={deleteExperience}
                                />
                            </div>)}
                <button className='addJobExp' onClick={() => setEditing(true)}>Add new job experience</button>
            </>
        );
    } else {
        return (
            <ExperienceForm createExperience={createExperience} id={experiences.length + 1} cancelNew={cancelNew}  titlePlaceholder={props.titlePlaceholder} institutionPlaceholder={props.institutionPlaceholder} />
        );
    };
};

export default ExperienceList;