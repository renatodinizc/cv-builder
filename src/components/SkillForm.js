import React, { useState } from 'react';

function SkillForm(props) {
    const [skill, setSkill] = useState({
                                        id: 0,
                                        title: ''
                                        });

    function handleChange(event) {
        setSkill({
                 id: props.id,
                 title: event.target.value
                });
    };

    function handleSkillSubmission(event) {
        event.preventDefault();
        props.createSkill(skill);
        setSkill({
                 id: 0,
                 title: ''
                });
    };

    return (
        <form onSubmit={handleSkillSubmission}>
            <input type='text' value={skill.title} onChange={handleChange} placeholder='skill' autoComplete='off'/>
            <button>Submit new skill</button>
        </form>
    );

};

export default SkillForm;