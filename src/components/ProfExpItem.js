import React, { useState } from 'react';

function ProfExpItem(props) {
    const [isEditing, setEditing] = useState(false);
    const [editedJobExp, setEditedJobExp] = useState({
                                                     id: props.id,
                                                     title: props.title,
                                                     company: props.company,
                                                     startDate: props.startDate,
                                                     endDate: props.endDate,
                                                     description: props.description
                                                    });


    function handleEdit(event) {
        setEditedJobExp(prevState => (
                                     {...prevState, [event.target.name]: event.target.value}
                                     ));
    };

    function handleEditSubmission(event) {
        event.preventDefault();
        props.editJobExp(props.id, editedJobExp);
        setEditedJobExp({
                         id: 0,
                         title: '',
                         company: '',
                         startDate: '',
                         endDate: '',
                         description: ''
                        });
        setEditing(false);
    };

    if (isEditing == false) {
        return (
            <ul>
                <h3>Job Title: {props.title} </h3>
                <li>Item id: {props.id} </li>
                <li>Company: {props.company}</li>
                <li>Start date: {props.startDate}</li>
                <li>End date: {props.endDate}</li>
                <li>Description: {props.description}</li>
                <button onClick={() => setEditing(true)}>Edit experience</button>
            </ul>

        );
    } else {
        return (
            <form onSubmit={handleEditSubmission}>
                <input type='text' value={editedJobExp.title} name='title' onChange={handleEdit} placeholder='Job title' autoComplete='off' />
                <input type='text' value={editedJobExp.company} name='company' onChange={handleEdit} placeholder='Company' autoComplete='off' />
                <input type='date' value={editedJobExp.startDate} name='startDate' onChange={handleEdit} />
                <input type='date' value={editedJobExp.endDate} name='endDate' onChange={handleEdit}/>
                <textarea value={editedJobExp.description} name='description' onChange={handleEdit} placeholder='Description of activities' rows={4} cols={24}/>
                <button type='submit'>Save</button>
            </form>
        );
    };
};

export default ProfExpItem;