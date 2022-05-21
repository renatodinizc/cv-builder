import React from 'react';
import Item from './Item';


function PersonalInfo() {
    return (
        <>
            <Item defaultValue='First Name' tag='h2' />
            <Item defaultValue='Last Name' tag='h2' />
            <Item defaultValue='Occupation' tag='h4' />
            <Item defaultValue='Address Line 1' tag='p' />
            <Item defaultValue='Address Line 2' tag='p' />
            <Item defaultValue='City' tag='p' />
            <Item defaultValue='Phone' tag='p' />
            <Item defaultValue='Email' tag='p' />
        </>
    );
}

export default PersonalInfo;