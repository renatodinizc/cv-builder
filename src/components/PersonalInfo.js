import React, { useState } from 'react';
import Item from './Item';


function PersonalInfo() {
    return (
        <>
            <h1> C.V. Builder</h1>
            <h2>Build beautiful, eye-catching resumes in a few clicks!</h2>
            <Item title='First Name' tag='h2' />
            <Item title='Last Name' tag='h2' />
            <Item title='Occupation' tag='h4' />
            <Item title='Address Line 1' tag='p' />
            <Item title='Address Line 2' tag='p' />
            <Item title='City' tag='p' />
            <Item title='Phone' tag='p' />
            <Item title='Email' tag='p' />
        </>
    );
}

export default PersonalInfo;