import React, { useState } from 'react';


function ProfExpForm(props) {
    const [jobExp, setJobExp] = useState({
                                          id: '',
                                          title: '',
                                          company: '',
                                          startDate: '',
                                          endDate: '',
                                          description: ''
                                         });

    function handleChange(event) {
        setJobExp(prevState => (
                                {...prevState,
                                [event.target.name]: event.target.value}
                               ));
        setJobExp(prevState => ({...prevState, id: props.id}));
    };

    function handleSubmit(event) {
        event.preventDefault();
        props.createJobExp(jobExp);
        setJobExp({
            id: 0,
            title: '',
            company: '',
            startDate: '',
            endDate: '',
            description: ''
           });
    };

    
    return (
        <form onSubmit={handleSubmit} >
            <input type='text' value={jobExp.title} name='title' onChange={handleChange} placeholder='Job title' autoComplete='off' />
            <input type='text' value={jobExp.company} name='company' onChange={handleChange} placeholder='Company' autoComplete='off' />
            <input type='date' value={jobExp.startDate} name='startDate' onChange={handleChange} />
            <input type='date' value={jobExp.endDate} name='endDate' onChange={handleChange}/>
            <textarea value={jobExp.description} name='description' onChange={handleChange} placeholder='Description of activities' rows={4} cols={24}/>
            <button type='submit'>Save</button>
        </form>
    );
};

export default ProfExpForm;