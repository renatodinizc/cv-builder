import React from 'react';

function SkillItem(props) {
    return (
        <div className='skillItem'>
            <p>{props.title}</p>
            <button onClick={() => props.deleteSkill(props.id)} >Delete</button>
        </div>
    );
};

export default SkillItem;