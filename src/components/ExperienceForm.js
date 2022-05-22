import React, { useState } from 'react';


function ExperienceForm(props) {
    const [experience, setExperience] = useState({
                                          id: '',
                                          title: '',
                                          institution: '',
                                          startDate: '',
                                          endDate: '',
                                          description: ''
                                         });

    function handleChange(event) {
        setExperience(prevState => (
                                {...prevState,
                                [event.target.name]: event.target.value}
                               ));
        setExperience(prevState => ({...prevState, id: props.id}));
    };

    function handleSubmit(event) {
        event.preventDefault();
        props.createExperience(experience);
        setExperience({
            id: 0,
            title: '',
            institution: '',
            startDate: '',
            endDate: '',
            description: ''
           });
    };

    
    return (
        <form className='JobExp' onSubmit={handleSubmit} >
            <input type='text' value={experience.title} name='title' onChange={handleChange} placeholder={props.titlePlaceholder} autoComplete='off' />
            <input type='text' value={experience.institution} name='institution' onChange={handleChange} placeholder={props.institutionPlaceholder} autoComplete='off' />
            <input type='date' value={experience.startDate} name='startDate' onChange={handleChange} />
            <input type='date' value={experience.endDate} name='endDate' onChange={handleChange}/>
            <textarea value={experience.description} name='description' onChange={handleChange} placeholder='Description of activities' rows={4} cols={24}/>
            <button type='submit'>Save</button>
            <button onClick={() => props.cancelNew()}>Cancel</button>
        </form>
    );
};

export default ExperienceForm;