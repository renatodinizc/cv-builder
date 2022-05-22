import React, { useState } from 'react';
import SkillForm from './SkillForm';
import SkillItem from './SkillItem';

function SkillList() {
    const [isEditing, setEditing] = useState(true);
    const [skills, setSkills] = useState([]);

    function createSkill(skill) {
        if (skill.title.trim()) {
            setSkills([...skills, skill]);
        };
        setEditing(false);
    };

    function deleteSkill(id) {
        const remainingSkills = skills.filter(skill => skill.id != id);
        remainingSkills.map(skill => skill.id);
        setSkills(remainingSkills);
    };

    if (isEditing == false) {
        return (
            <>
                <div className='SkillList'>
                    {skills.map(skill => 
                        <SkillItem id={skill.id} title={skill.title} deleteSkill={deleteSkill} />
                    )}
                </div>
                <button onClick={() => setEditing(true)}>Add new skill</button>
            </>
        );
    } else {
        return (
            <SkillForm createSkill={createSkill} id={skills.length + 1} deleteSkill={deleteSkill} />
        );
    };
};

export default SkillList;
