import React, { useState } from 'react';

function ProfExpItem(props) {
    return (
        <ul>
            <h3>Job Title: {props.title} </h3>
            <li>Company: {props.company}</li>
            <li>Start date: {props.startDate}</li>
            <li>End date: {props.endDate}</li>
            <li>Description: {props.description}</li>
        </ul>

    );
};

export default ProfExpItem;