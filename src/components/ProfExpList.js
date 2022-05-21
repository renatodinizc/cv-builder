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
                            />
                        </li>)}
            </ul>
            <button onClick={() => setEditing(true)}>Add new job experience</button>
        </>
        );
    };

    return (
        <ProfExpForm createJobExp={createJobExp} />
    );
};

export default ProfExpList;