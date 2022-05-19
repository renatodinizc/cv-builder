import React, { useState } from 'react';
import './item.css';

function Item(props) {
    const [isEditing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    function handleNewTitle(event) {
        setNewTitle(event.target.value);
    };

    function handleItemSubmission(event) {
        event.preventDefault();
        props.editItemTitle(newTitle);
        setNewTitle('');
        setEditing(false);
    }

    if (isEditing == false) {
        return (
            <p className='inputAsButton' onClick={() => setEditing(true)}> {props.title} </p>
        );
    };

    return (
        <form className='inputAsButton' onSubmit={handleItemSubmission}>
            <input type='text' value={newTitle} onChange={handleNewTitle} placeholder={props.title} autoComplete='off' />
        </form>
    );
;}

export default Item;