import React, { useState } from 'react';

function ExperienceItem(props) {
    const [isEditing, setEditing] = useState(false);
    const [editedExperience, setEditedExperience] = useState({
                                                     id: props.id,
                                                     title: props.title,
                                                     institution: props.institution,
                                                     startDate: props.startDate,
                                                     endDate: props.endDate,
                                                     description: props.description
                                                    });


    function handleEdit(event) {
        setEditedExperience(prevState => (
                                     {...prevState, [event.target.name]: event.target.value}
                                     ));
    };

    function handleEditSubmission(event) {
        event.preventDefault();
        props.editExperience(props.id, editedExperience);
        setEditedExperience({
                         id: 0,
                         title: '',
                         institution: '',
                         startDate: '',
                         endDate: '',
                         description: ''
                        });
        setEditing(false);
    };

    if (isEditing == false) {
        return (
            <>
                <h3>{props.title} </h3>
                <h4>{props.institution}</h4>
                <p>Start date: {props.startDate}</p>
                <p>End date: {props.endDate}</p>
                <p>{props.description}</p>
                <button onClick={() => setEditing(true)}>Edit experience</button>
                <button onClick={() => props.deleteExperience(props.id)}>Delete</button>
            </>

        );
    } else {
        return (
            <form onSubmit={handleEditSubmission}>
                <input type='text' value={editedExperience.title} name='title' onChange={handleEdit} placeholder='Job title' autoComplete='off' />
                <input type='text' value={editedExperience.institution} name='institution' onChange={handleEdit} placeholder='Institution' autoComplete='off' />
                <input type='date' value={editedExperience.startDate} name='startDate' onChange={handleEdit} />
                <input type='date' value={editedExperience.endDate} name='endDate' onChange={handleEdit}/>
                <textarea value={editedExperience.description} name='description' onChange={handleEdit} placeholder='Description of activities' rows={4} cols={24}/>
                <button type='submit'>Save</button>
                <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        );
    };
};

export default ExperienceItem;