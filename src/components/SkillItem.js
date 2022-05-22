import React from 'react';
import './skill-set.css';

function SkillItem(props) {
    return (
        <div className='SkillItem'>
            <p>{props.title}</p>
            <button onClick={() => props.deleteSkill(props.id)} >X</button>
        </div>
    );
};

export default SkillItem;