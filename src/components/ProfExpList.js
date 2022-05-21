import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import ProfExpForm from './ProfExpForm';
import ProfExpItem from './ProfExpItem';

function ProfExpList() {
    const [isEditing, setEditing] = useState(false);
    const [jobExps, setJobExps] = useState([]);

    function createJobExp(jobExp) {
        setJobExps([...jobExps, jobExp]);
        setEditing(false);
    };

    function editJobExp(id, editedJobExp) {
        const editedJobExps = jobExps.map(jobExp => {
            if (jobExp.id === id) {
                return jobExp = editedJobExp;
            }
            return jobExp;
        });
        setJobExps(editedJobExps);
    };

    if (isEditing == false) {
        return (
            <>
                <ul>
                {jobExps.map(jobExp => 
                            <li>
                                <ProfExpItem id={jobExp.id} 
                                            title={jobExp.title} 
                                            company={jobExp.company} 
                                            startDate={jobExp.startDate}
                                            endDate={jobExp.endDate}
                                            description={jobExp.description}
                                            editJobExp={editJobExp}
                                />
                            </li>)}
                </ul>
                <button onClick={() => setEditing(true)}>Add new job experience</button>
            </>
        );
    } else {
        return (
            <ProfExpForm createJobExp={createJobExp} id={jobExps.length + 1}/>
        );
    };
};

export default ProfExpList;