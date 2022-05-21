import './professional-exp.css';
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

    function deleteJobExp(id) {
        const remainingJobExps= jobExps.filter(jobExp => jobExp.id != id);
        remainingJobExps.map(jobExp => jobExp.id = id);
        setJobExps(remainingJobExps);
    };

    function cancelNew() {
        setEditing(false);
    };

    if (isEditing == false) {
        return (
            <>
                {jobExps.map(jobExp => 
                            <div className={'JobExp '+ jobExp.id}>
                                <ProfExpItem id={jobExp.id} 
                                            title={jobExp.title} 
                                            company={jobExp.company} 
                                            startDate={jobExp.startDate}
                                            endDate={jobExp.endDate}
                                            description={jobExp.description}
                                            editJobExp={editJobExp}
                                            deleteJobExp={deleteJobExp}
                                />
                            </div>)}
                <button className='addJobExp' onClick={() => setEditing(true)}>Add new job experience</button>
            </>
        );
    } else {
        return (
            <ProfExpForm createJobExp={createJobExp} id={jobExps.length + 1} cancelNew={cancelNew}/>
        );
    };
};

export default ProfExpList;